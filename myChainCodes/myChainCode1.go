package chaincode

import (
	"encoding/json"
	"fmt"

	"github.com/hyperledger/fabric-contract-api-go/v2/contractapi"
)

// SmartContract provides functions for managing Users
type SmartContract struct {
	contractapi.Contract
}

// User describes details of a user in the ledger
// Fields are in alphabetical order to maintain deterministic JSON marshalling
type User struct {
	Address string `json:"Address"`
	Age     int    `json:"Age"`
	DOB     string `json:"DOB"`
	ID      string `json:"ID"`
	Name    string `json:"Name"`
	Sex     string `json:"Sex"`
}

// InitLedger adds a base set of users to the ledger for testing/demo purposes
func (s *SmartContract) InitLedger(ctx contractapi.TransactionContextInterface) error {
	users := []User{
		{ID: "user1", Name: "Shreya", DOB: "1990-01-01", Address: "123 Wonderland", Age: 30, Sex: "Female"},
		{ID: "user2", Name: "Ramesh", DOB: "1985-05-20", Address: "456 Builder St.", Age: 35, Sex: "Male"},
		{ID: "user2", Name: "Sumesh", DOB: "1985-05-20", Address: "iit patna", Age: 3, Sex: "Male"},
		{ID: "user2", Name: "Riya", DOB: "1995-05-20", Address: "nit sikkim", Age: 5, Sex: "Female"},
	}

	for _, user := range users {
		userJSON, err := json.Marshal(user)
		if err != nil {
			return err
		}

		err = ctx.GetStub().PutState(user.ID, userJSON)
		if err != nil {
			return fmt.Errorf("failed to put user to world state: %v", err)
		}
	}

	return nil
}

// CreateUser adds a new user record to the ledger
func (s *SmartContract) CreateUser(ctx contractapi.TransactionContextInterface, id string, name string, dob string, address string, age int, sex string) error {
	exists, err := s.UserExists(ctx, id)
	if err != nil {
		return err
	}
	if exists {
		return fmt.Errorf("the user %s already exists", id)
	}

	user := User{
		ID:      id,
		Name:    name,
		DOB:     dob,
		Address: address,
		Age:     age,
		Sex:     sex,
	}
	userJSON, err := json.Marshal(user)
	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, userJSON)
}

// ReadUser returns the user record stored in the ledger with the given ID
func (s *SmartContract) ReadUser(ctx contractapi.TransactionContextInterface, id string) (*User, error) {
	userJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, fmt.Errorf("failed to read user from world state: %v", err)
	}
	if userJSON == nil {
		return nil, fmt.Errorf("the user %s does not exist", id)
	}

	var user User
	err = json.Unmarshal(userJSON, &user)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

// UpdateUser updates an existing user record in the ledger with provided parameters
func (s *SmartContract) UpdateUser(ctx contractapi.TransactionContextInterface, id string, name string, dob string, address string, age int, sex string) error {
	exists, err := s.UserExists(ctx, id)
	if err != nil {
		return err
	}
	if !exists {
		return fmt.Errorf("the user %s does not exist", id)
	}

	// Overwrite original user with new data
	user := User{
		ID:      id,
		Name:    name,
		DOB:     dob,
		Address: address,
		Age:     age,
		Sex:     sex,
	}
	userJSON, err := json.Marshal(user)
	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, userJSON)
}

// DeleteUser removes a user record from the ledger
func (s *SmartContract) DeleteUser(ctx contractapi.TransactionContextInterface, id string) error {
	exists, err := s.UserExists(ctx, id)
	if err != nil {
		return err
	}
	if !exists {
		return fmt.Errorf("the user %s does not exist", id)
	}

	return ctx.GetStub().DelState(id)
}

// UserExists returns true if a user record with the given ID exists in the ledger
func (s *SmartContract) UserExists(ctx contractapi.TransactionContextInterface, id string) (bool, error) {
	userJSON, err := ctx.GetStub().GetState(id)
	if err != nil {
		return false, fmt.Errorf("failed to read from world state: %v", err)
	}
	return userJSON != nil, nil
}

// GetAllUsers returns all user records found in the ledger
func (s *SmartContract) GetAllUsers(ctx contractapi.TransactionContextInterface) ([]*User, error) {
	resultsIterator, err := ctx.GetStub().GetStateByRange("", "")
	if err != nil {
		return nil, err
	}
	defer resultsIterator.Close()

	var users []*User
	for resultsIterator.HasNext() {
		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}

		var user User
		err = json.Unmarshal(queryResponse.Value, &user)
		if err != nil {
			return nil, err
		}
		users = append(users, &user)
	}

	return users, nil
}

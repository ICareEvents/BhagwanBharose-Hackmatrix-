package main

import (
	"encoding/json"
	"errors"
	"time"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type IdentityContract struct {
	contractapi.Contract
}

type Identity struct {
	ID            string            `json:"id"`
	PublicDetails map[string]string `json:"publicDetails"`
	PrivateHash   string            `json:"privateHash"`
	Verified      bool              `json:"verified"`
	CreatedAt     int64             `json:"createdAt"`
	UpdatedAt     int64             `json:"updatedAt"`
}

func (c *IdentityContract) CreateIdentity(ctx contractapi.TransactionContextInterface, id string, publicDetails string, privateHash string) error {
	exists, err := c.IdentityExists(ctx, id)
	if err != nil {
		return err
	}
	if exists {
		return errors.New("identity already exists")
	}
	var pd map[string]string
	err = json.Unmarshal([]byte(publicDetails), &pd)
	if err != nil {
		return err
	}
	now := time.Now().Unix()
	ident := Identity{
		ID:            id,
		PublicDetails: pd,
		PrivateHash:   privateHash,
		Verified:      false,
		CreatedAt:     now,
		UpdatedAt:     now,
	}
	b, err := json.Marshal(ident)
	if err != nil {
		return err
	}
	return ctx.GetStub().PutState(id, b)
}

func (c *IdentityContract) QueryIdentity(ctx contractapi.TransactionContextInterface, id string) (*Identity, error) {
	b, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, err
	}
	if b == nil {
		return nil, errors.New("identity not found")
	}
	var ident Identity
	err = json.Unmarshal(b, &ident)
	if err != nil {
		return nil, err
	}
	return &ident, nil
}

func (c *IdentityContract) IdentityExists(ctx contractapi.TransactionContextInterface, id string) (bool, error) {
	b, err := ctx.GetStub().GetState(id)
	if err != nil {
		return false, err
	}
	return b != nil, nil
}

func main() {
	chaincode, err := contractapi.NewChaincode(new(IdentityContract))
	if err != nil {
		panic("Error creating IdentityContract chaincode: " + err.Error())
	}
	if err := chaincode.Start(); err != nil {
		panic("Error starting IdentityContract chaincode: " + err.Error())
	}
}
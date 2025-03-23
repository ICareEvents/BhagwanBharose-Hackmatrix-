package main

import (
	"encoding/json"
	"time"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type ConsentContract struct {
	contractapi.Contract
}

type Consent struct {
	ID        string `json:"id"`
	UserID    string `json:"userId"`
	Consent   bool   `json:"consent"`
	Timestamp int64  `json:"timestamp"`
}

func (c *ConsentContract) GiveConsent(ctx contractapi.TransactionContextInterface, id string, userId string, consent bool) error {
	con := Consent{
		ID:        id,
		UserID:    userId,
		Consent:   consent,
		Timestamp: time.Now().Unix(),
	}
	b, err := json.Marshal(con)
	if err != nil {
		return err
	}
	return ctx.GetStub().PutState(id, b)
}

func (c *ConsentContract) QueryConsent(ctx contractapi.TransactionContextInterface, id string) (*Consent, error) {
	b, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, err
	}
	if b == nil {
		return nil, nil
	}
	var con Consent
	err = json.Unmarshal(b, &con)
	if err != nil {
		return nil, err
	}
	return &con, nil
}

func main() {
	chaincode, err := contractapi.NewChaincode(new(ConsentContract))
	if err != nil {
		panic("Error creating ConsentContract chaincode: " + err.Error())
	}
	if err := chaincode.Start(); err != nil {
		panic("Error starting ConsentContract chaincode: " + err.Error())
	}
}
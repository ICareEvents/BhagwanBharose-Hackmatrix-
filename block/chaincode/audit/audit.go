package main

import (
	"encoding/json"
	"time"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type AuditContract struct {
	contractapi.Contract
}

type AuditRecord struct {
	ID        string `json:"id"`
	Action    string `json:"action"`
	Timestamp int64  `json:"timestamp"`
	Actor     string `json:"actor"`
}

func (a *AuditContract) LogAction(ctx contractapi.TransactionContextInterface, id string, action string, actor string) error {
	record := AuditRecord{
		ID:        id,
		Action:    action,
		Timestamp: time.Now().Unix(),
		Actor:     actor,
	}
	b, err := json.Marshal(record)
	if err != nil {
		return err
	}
	return ctx.GetStub().PutState(id, b)
}

func (a *AuditContract) QueryAudit(ctx contractapi.TransactionContextInterface, id string) (*AuditRecord, error) {
	b, err := ctx.GetStub().GetState(id)
	if err != nil {
		return nil, err
	}
	if b == nil {
		return nil, nil
	}
	var record AuditRecord
	err = json.Unmarshal(b, &record)
	if err != nil {
		return nil, err
	}
	return &record, nil
}

func main() {
	chaincode, err := contractapi.NewChaincode(new(AuditContract))
	if err != nil {
		panic("Error creating AuditContract chaincode: " + err.Error())
	}
	if err := chaincode.Start(); err != nil {
		panic("Error starting AuditContract chaincode: " + err.Error())
	}
}
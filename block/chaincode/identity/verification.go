package main

import (
	"encoding/json"
	"errors"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

func (c *IdentityContract) VerifyIdentity(ctx contractapi.TransactionContextInterface, id string, proofData string) (bool, error) {
	ident, err := c.QueryIdentity(ctx, id)
	if err != nil {
		return false, err
	}
	// Dummy verification: if proofData equals privateHash, mark verified
	if proofData == ident.PrivateHash {
		ident.Verified = true
		b, err := json.Marshal(ident)
		if err != nil {
			return false, err
		}
		err = ctx.GetStub().PutState(id, b)
		if err != nil {
			return false, err
		}
		return true, nil
	}
	return false, errors.New("verification failed")
}
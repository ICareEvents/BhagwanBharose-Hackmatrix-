package services

import (
	"fmt"
	"io/ioutil"
	"path/filepath"

	"github.com/hyperledger/fabric-sdk-go/pkg/gateway"
)

var wallet *gateway.Wallet
var gatewayInstance *gateway.Gateway

func InitFabric() error {
	var err error
	wallet, err = gateway.NewFileSystemWallet("wallet")
	if err != nil {
		return err
	}
	if !wallet.Exists("admin") {
		return fmt.Errorf("admin identity not found in wallet")
	}
	ccPath := filepath.Join("..", "config", "connection-org1.json")
	ccpBytes, err := ioutil.ReadFile(ccPath)
	if err != nil {
		return err
	}
	gatewayInstance, err = gateway.Connect(
		gateway.WithConfig(gateway.ConfigFromRaw(ccpBytes, "json")),
		gateway.WithIdentity(wallet, "admin"),
	)
	if err != nil {
		return err
	}
	return nil
}

func GetContract(chaincodeName string, channelName string) (*gateway.Contract, error) {
	network, err := gatewayInstance.GetNetwork(channelName)
	if err != nil {
		return nil, err
	}
	contract := network.GetContract(chaincodeName)
	return contract, nil
}
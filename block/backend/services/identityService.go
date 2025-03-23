package services

func IdentityServiceCreate(id string, publicDetails string, privateHash string) error {
	contract, err := GetContract("identity", "ch")
	if err != nil {
		return err
	}
	_, err = contract.SubmitTransaction("CreateIdentity", id, publicDetails, privateHash)
	return err
}

func IdentityServiceQuery(id string) (string, error) {
	contract, err := GetContract("identity", "ch")
	if err != nil {
		return "", err
	}
	result, err := contract.EvaluateTransaction("QueryIdentity", id)
	if err != nil {
		return "", err
	}
	return string(result), nil
}
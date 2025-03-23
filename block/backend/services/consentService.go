package services

func ConsentServiceGive(id string, userId string, consent bool) error {
	contract, err := GetContract("consent", "ch")
	if err != nil {
		return err
	}
	_, err = contract.SubmitTransaction("GiveConsent", id, userId, boolToString(consent))
	return err
}

func ConsentServiceQuery(id string) (string, error) {
	contract, err := GetContract("consent", "ch")
	if err != nil {
		return "", err
	}
	result, err := contract.EvaluateTransaction("QueryConsent", id)
	if err != nil {
		return "", err
	}
	return string(result), nil
}

func boolToString(b bool) string {
	if b {
		return "true"
	}
	return "false"
}
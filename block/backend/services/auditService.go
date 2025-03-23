package services

func AuditServiceQuery(id string) (string, error) {
	contract, err := GetContract("audit", "ch")
	if err != nil {
		return "", err
	}
	result, err := contract.EvaluateTransaction("QueryAudit", id)
	if err != nil {
		return "", err
	}
	return string(result), nil
}
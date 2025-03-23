package models

type Consent struct {
	ID      string `json:"id"`
	UserID  string `json:"userId"`
	Consent bool   `json:"consent"`
}
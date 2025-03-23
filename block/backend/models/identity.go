package models

type Identity struct {
	ID            string            `json:"id"`
	PublicDetails map[string]string `json:"publicDetails"`
	PrivateHash   string            `json:"privateHash"`
	Verified      bool              `json:"verified"`
	CreatedAt     int64             `json:"createdAt"`
	UpdatedAt     int64             `json:"updatedAt"`
}
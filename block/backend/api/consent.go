package api

import (
	"encoding/json"
	"net/http"

	"backend/services"
)

func GiveConsentHandler(w http.ResponseWriter, r *http.Request) {
	var data map[string]string
	json.NewDecoder(r.Body).Decode(&data)
	id := data["id"]
	user := data["userId"]
	consent := data["consent"]
	err := services.ConsentServiceGive(id, user, consent == "true")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	json.NewEncoder(w).Encode(map[string]string{"msg": "consent recorded"})
}

func QueryConsentHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")
	result, err := services.ConsentServiceQuery(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	json.NewEncoder(w).Encode(result)
}
package api

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"backend/services"
)

func CreateIdentityHandler(w http.ResponseWriter, r *http.Request) {
	var data map[string]string
	body, _ := ioutil.ReadAll(r.Body)
	json.Unmarshal(body, &data)
	id := data["id"]
	pd := data["publicDetails"]
	ph := data["privateHash"]
	err := services.IdentityServiceCreate(id, pd, ph)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	json.NewEncoder(w).Encode(map[string]string{"msg": "identity created"})
}

func QueryIdentityHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")
	result, err := services.IdentityServiceQuery(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	json.NewEncoder(w).Encode(result)
}
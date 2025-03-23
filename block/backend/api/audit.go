package api

import (
	"encoding/json"
	"net/http"

	"backend/services"
)

func QueryAuditHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")
	result, err := services.AuditServiceQuery(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	json.NewEncoder(w).Encode(result)
}
package main

import (
	"log"
	"net/http"

	"backend/api"
	"backend/services"

	"github.com/gorilla/mux"
)

func main() {
	err := services.InitFabric()
	if err != nil {
		log.Fatalf("Failed to initialize Fabric: %s", err.Error())
	}
	r := mux.NewRouter()
	r.HandleFunc("/auth", api.AuthHandler).Methods("POST")
	r.HandleFunc("/identity/create", api.CreateIdentityHandler).Methods("POST")
	r.HandleFunc("/identity/query", api.QueryIdentityHandler).Methods("GET")
	r.HandleFunc("/consent/give", api.GiveConsentHandler).Methods("POST")
	r.HandleFunc("/consent/query", api.QueryConsentHandler).Methods("GET")
	r.HandleFunc("/audit/query", api.QueryAuditHandler).Methods("GET")
	log.Println("Backend API listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
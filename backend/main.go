package main

import (
	"fmt"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello from Moments backend!")
}

func main() {
	http.HandleFunc("/", helloHandler)
	fmt.Println("🚀 Backend running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

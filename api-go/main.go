package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Estructura de los datos
type Mission struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      string `json:"status"`
}

func main() {
	// Handler para la raíz (/)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/" {
			http.NotFound(w, r)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"message": "API Go - Proxy Dog API", "endpoints": ["/dog"]}`)
	})

	// Proxy para Dog API
	http.HandleFunc("/dog", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Content-Type", "application/json")

		resp, err := http.Get("https://dog.ceo/api/breeds/image/random")
		if err != nil {
			http.Error(w, "Error al contactar Dog API", http.StatusInternalServerError)
			return
		}
		defer resp.Body.Close()

		var result map[string]interface{}
		json.NewDecoder(resp.Body).Decode(&result)

		// Devolvemos solo lo necesario
		json.NewEncoder(w).Encode(map[string]string{
			"url": result["message"].(string),
		})
	})

	fmt.Println("Servidor Go corriendo en http://localhost:9000")
	err := http.ListenAndServe(":9000", nil)
	if err != nil {
		fmt.Printf("Error al iniciar el servidor: %s\n", err)
	}
}

package models

type Config struct {
	AccountConnection AccountConnection
}
type AccountConnection struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	User     string `json:"user"`
	Password string `json:"password"`
	DB       string `json:"database"`
}

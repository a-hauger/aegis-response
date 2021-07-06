package models

type Config struct {
	AccountConnection AccountConnection
}

type AccountConnection struct {
	Host     string `default:"localhost" json:"host"`
	Port     int    `default:"5432" json:"port"`
	User     string `default:"postgres" json:"user"`
	Password string `default:"2018_5_22_SunBone" json:"password"`
	DB       string `default:"lenslocked_dev" json:"database"`
}

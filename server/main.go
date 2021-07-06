package main

import (
	"os"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/configor"
	_ "github.com/lib/pq"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

const (
	host = "localhost"
	port = 5432
	user = "postgres"
	password = "2018_5_22_SunBone"
	dbname = "aegis_response_dev"
)

func main() {	
	logLevel := os.Getenv("LOGLEVEL")
	if logLevel == "" {
		logLevel = "1"
	}
	intLevel, intErr := strconv.Atoi(logLevel)
	if intErr != nil {
		log.Error().Err(intErr).Msg("Unable to convert LOGLEVEL to integer. Setting intLevel to 1 as default.")
	}
	zerolog.SetGlobalLevel(zerolog.Level(intLevel))

	config := models.Config{}

	configErr := configor.
		New(&configor.Config{
			AutoReload:         true,
			AutoReloadInterval: time.Second,
			AutoReloadCallback: func(c interface{}) {
				log.Debug().Interface("config", config).Msg("Loading new config")

				accountH.UpdateAccountHandler(config.AccountConnection)
			}}).
		Load(&config, "config.json")

	if configErr != nil {
		log.Fatal().Err(configErr).Msg("Error while loading config.")
		panic("Error while loading config.")
	}

	accountClient := clients.CreateAccountClient(config config.AccountConnection)
	defer accountClient.Close()
	
	accountH := handlers.NewAccountHandler(accountClient)
	
	r := gin.New()

	r.GET("/healthz")
}

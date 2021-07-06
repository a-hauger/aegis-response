package handlers

import (
	"database/sql"
	"fmt"
	"net/http"

	"../clients/"
	"../models/"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog/log"
)

type AccountHandler struct {
	Config models.AccountConnection
	Client clients.Accountclient
}

func NewAccountHandler(c models.AccountConnection, aC clients.AccountClient) *AccountHandler {
	return &AccountHandler{
		Config: c,
		Client: aC,
	}
}

func UpdateAccountHandler(config models.AccountConnection) {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		config.Host, config.Port, config.User, config.Password, config.DB)
	dbConnection, connectionErr := sql.Open("postgres", psqlInfo)
}

/**********************************/
/****Aw CRUD (Handler Edition)*****/
/**********************************/
// Create NOTE: Expose to Swagger
func (aH AccountHandler) CreateAccount(c *gin.Context) {
	var acct models.Account
	marshalErr := c.ShouldBindJSON(&acct)
	if marshalErr != nil {
		log.Error().Err("error", marshalError).Msg("Unable to create account from response")
		c.JSON(http.StatusBadRequest, gin.H{"error": marshallErr})
	}
}

// GetById Note: Expose to Swagger

// GetByEmail Note: Expose to Swagger

// PatchAccount Note: Expose to Swagger
// Ask: Do you want people to be able to change their email
// Note: Returns the dbConnection.Save whole response

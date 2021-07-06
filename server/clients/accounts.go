package clients

import (
	"github.com/jinzhu/gorm"
	"../models/"
)

var (
	ErrNotFound = errors.New("models: resource not found")
	ErrInvalidID = errors.New("models: ID provided was invalid")
)

type AccountClient struct {
	dbConnection gorm.DB
}

func NewAccountClient(config models.Config.AccountConnection) *AccountClient {
	db, connectionErr := gorm.Open("postgres", config)
	if connectionErr != nil {
		return nil, connectionErr
	}

	return &AccountClient{
		dbConnection: db,
	}, nil
}

func (aC *AccountClient) Close() error {
	return aC.dbConnection.Close()
}

/**********************************/
/****Aw CRUD (Database Edition)****/
/**********************************/
// Create is a User with Account data
func (aC *AccountClient) Create(account *models.Account) error {
	createResult := aC.dbConnection.Create(account)
	if createResult.Error != nil{
		return createResult.Error
	}

	return nil
}

// Get User by id
func (aC *AccountCLient) ByID(id uint) (*models.Account, error) {
	var user User
	findUserErr := aC.dbConnection.Where("id = ?", id).First(&user).Error
	switch findUserErr {
	case nil:
		return &user, nil
	case gorm.ErrRecordNotFound:
		return nil, ErrNotFound
	default:
		return nil, findUserErr
	}
}

// Get User by associated email
func (aC *AccountClient) ByEmail(email string) (*models.Account, error) {
	var user User
	findUserErr := aC.dbConnection.Where("email = ?", email).First(&user).Error
	switch findUserErr {
	case nil:
		return &user, nil
	case gorm.ErrRecordNotFound:
		return nil, ErrNotFound
	default:
		return nil, findUserErr
	}
}

// Patch User
func (ac *AccountClient) Update(acct *models.Account)  error {
	patchResult := aC.dbConnection.Save(user)
	if patchResult.Error != nil {
		return error
	}
}

// Delete User by ID
func (ac *AccountClient) Delete(acct *models.Account) error {
	deleteResult := aC.dbConnection.Delete(acct)
	if deleteResult.Error != nil {
		return deleteResult.Error
	}

	return nil
}
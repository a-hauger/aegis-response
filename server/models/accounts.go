package models

type Account struct {
	ID    string
	Name  string
	Email string `gorm:"not null; unique_index`
}

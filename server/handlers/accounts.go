package handlers

type AccountHandler{
	Config
	Client
}

func NewAccountHandler(aC clients.AccountClient) {
	return &AccountHandler {
		Client: nil,
	}
}

func UpdateAccountHandler(config models.Config.AccountConnection) {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
						config.Host, config.Port, config.User, config.Password, config.DB)
	dbConnection, connectionErr := sql.Open("postgres", psqlInfo)
	
}
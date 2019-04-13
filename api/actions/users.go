package actions

import (
	"github.com/gobuffalo/buffalo"
	"Cosmos/api/models"

	"github.com/satori/go.uuid"
)

// db is fake database
var db = make(map[uuid.UUID]models.User)

// UserResource is the resource for the user model
type UserResource struct{}

// List gets all Users.
func (ur UserResource) List(c buffalo.Context) error {
	return c.Render(200, r.JSON(db))
}

// Create User.
func (ur UserResource) Create(c buffalo.Context) error {
	u, _ := uuid.NewV4()
	user := &models.User{
		ID: u ,
	}
	db[user.ID] = *user

	return c.Render(201, r.JSON(user))
}

// Show User by id.
func (ur UserResource) Show(c buffalo.Context) error {

	id, err := uuid.FromString(c.Param("id"))
	if err != nil {

		return c.Render(500, r.String("id is not uuid v4"))
	}

	user, ok := db[id]
	if ok {

		return c.Render(200, r.JSON(user))
	}

	return c.Render(404, r.String("user not found"))
}

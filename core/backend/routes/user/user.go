package user

import (
	"fmt"
	"net/http"
	"strings"

	templates ".."
	"../../app"
)

func UserHandler(w http.ResponseWriter, r *http.Request) {

	session, err := app.Store.Get(r, "auth-session")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	//fmt.Println(session.Values["profile"])

	profile := session.Values["profile"]
	dataProfile := fmt.Sprintf("%v", profile)

	nickname := strings.Index(dataProfile, "nickname")
	name := strings.Index(dataProfile, " name")
	id := dataProfile[nickname+9 : name]
	fmt.Println(id)

	templates.RenderTemplate(w, "user", profile)
}

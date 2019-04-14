const profile = document.getElementById("profile");

profile.onclick = function () {
    keycloak.accountManagement();
}

const logout = document.getElementById("logout");

logout.onclick = function () {
    keycloak.logout();
}

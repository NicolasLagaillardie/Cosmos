const profile = document.getElementById("profile");

profile.onclick = profileClick;

function profileClick() {
    keycloak.accountManagement();
}

const logout = document.getElementById("logout");

logout.onclick = logoutClick;

function logoutClick() {
    keycloak.logout();
}

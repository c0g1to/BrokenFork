export const UserStorage = {
    getLogin: function() {
        return localStorage.getItem("login");
    },

    setLogin: function(value) {
        localStorage.setItem("login", value);
    },

    getRole: function() {
        return localStorage.getItem("role");
    },

    setRole: function(value) {
        localStorage.setItem("role", value);
    },

    clear: function() {
        localStorage.clear();
    }
}

export const UserRoles = {
    GUEST: "guest",
    USER: "user",
    PARTICIPANT: "participant",
    AGENT: "agent",
    HOST: "host",
}
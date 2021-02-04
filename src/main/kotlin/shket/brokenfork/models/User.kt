package shket.brokenfork.models

import shket.brokenfork.services.UserService
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table
import javax.persistence.Transient

@Entity
@Table(name = "user")
data class User(
    val nickname: String = "",
    @Id
    val login: String = "",
    val password: String = "",
    @Transient
    val photo: String = "database/images/default/guest.png"
) {
    fun encoded() = User(nickname, login, UserService.encodePassword(password), photo)
    fun anyIsEmpty() = nickname == "" || login == "" || password == ""

    companion object {
        val Guest = User("guest", "guest")
        val photoPathWin = "database\\images\\users\\"
        val photoPathUnix = "database/images/users/"
    }
}
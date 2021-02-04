package shket.brokenfork.services

import org.mindrot.jbcrypt.BCrypt

class UserService {
    companion object {
        const val salt = "$2a$10$9U0eO0pqc3oydaHAfs/ct."
        fun encodePassword(password: String) = BCrypt.hashpw(password, salt).substring(28, 60)
    }
}
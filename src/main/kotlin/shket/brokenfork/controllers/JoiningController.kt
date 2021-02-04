package shket.brokenfork.controllers

import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import shket.brokenfork.exceptions.joining.EmptyFieldsException
import shket.brokenfork.exceptions.joining.ExistingLoginException
import shket.brokenfork.exceptions.joining.FailedAuthorizationException
import shket.brokenfork.models.User
import shket.brokenfork.models.User.Companion.Guest
import shket.brokenfork.repos.UserRepository

@RestController
@RequestMapping
class JoiningController(private val userRepository: UserRepository) {

    @PostMapping("/register")
    fun register(@RequestBody user: User): ResponseEntity<String> {

        if (user.anyIsEmpty()) throw EmptyFieldsException()
        if (userRepository.findByIdOrNull(user.login) != null
            || user.login == Guest.login) throw ExistingLoginException(user.login)

        userRepository.save(user.encoded())
        return ResponseEntity.ok().build()
    }

    @PostMapping("/sign_in")
    fun signIn(@RequestBody user: User): ResponseEntity<String> {
        val dbUser = userRepository.findByIdOrNull(user.login)

        if (user.anyIsEmpty()) throw EmptyFieldsException()
        if (dbUser?.password != user.encoded().password) throw FailedAuthorizationException()

        return ResponseEntity.ok().build()
    }
}
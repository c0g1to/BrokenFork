package shket.brokenfork.controllers

import org.springframework.core.io.ClassPathResource
import org.springframework.data.repository.findByIdOrNull
import org.springframework.http.HttpRequest
import org.springframework.http.ResponseEntity
import org.springframework.util.StreamUtils
import org.springframework.web.bind.annotation.*
import shket.brokenfork.models.User
import shket.brokenfork.models.User.Companion.Guest
import shket.brokenfork.repos.UserRepository
import java.io.File
import javax.servlet.http.HttpServletRequest

const val projectPath = "E:\\Projects\\Web\\BrokenFork\\src\\main\\resources\\static\\"

@RestController
@RequestMapping
class MainMenuController(private val userRepository: UserRepository) {

    @GetMapping("/get_user/{login}")
    fun getUserData(@PathVariable login: String) =
        if (login == Guest.login) Guest
        else userRepository.findByIdOrNull(login)!!

    @PostMapping("/update_user")
    fun updateUserData(@RequestBody user: User) {
        if (user.password != "") userRepository.save(user.encoded())
        else userRepository.save(User(user.nickname, user.login, userRepository.findByIdOrNull(user.login)!!.password))
    }

//    @PostMapping("/save_photo/{login}")
//    fun savePhoto(@RequestParam("photo") photo: MultipartFile, @PathVariable login: String): ResponseEntity<String> {
//        photo.transferTo(File("$projectPath ${User.photoPathWin}", "$login.jpg"))
//        return ResponseEntity.ok().body("${User.photoPathUnix}$login.jpg")
//    }

    @PostMapping("/save_photo/{login}")
    fun savePhoto(@RequestParam("photo") request: HttpServletRequest, @PathVariable login: String): ResponseEntity<String> {
        val imgFile = ClassPathResource("$projectPath ${User.photoPathWin}$login.jpg")
        StreamUtils.copy(request.inputStream, imgFile.outputStream)
        return ResponseEntity.ok().body("${User.photoPathUnix}$login.jpg")
    }
}
package shket.brokenfork.controllers

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.ResponseStatus
import shket.brokenfork.exceptions.joining.EmptyFieldsException
import shket.brokenfork.exceptions.joining.ExistingLoginException
import shket.brokenfork.exceptions.joining.FailedAuthorizationException

@ControllerAdvice
class ExceptionController {

    @ResponseBody
    @ExceptionHandler(RuntimeException::class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    fun exceptionHandler(ex: RuntimeException) = ex.message
}
package shket.brokenfork.exceptions.joining

class ExistingLoginException(login: String) : RuntimeException("\"$login\" is already existing login")
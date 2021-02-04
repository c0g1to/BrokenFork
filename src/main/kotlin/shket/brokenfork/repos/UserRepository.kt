package shket.brokenfork.repos

import org.springframework.data.jpa.repository.JpaRepository
import shket.brokenfork.models.User

interface UserRepository : JpaRepository<User, String>
package shket.brokenfork.config

import org.slf4j.LoggerFactory
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.web.client.RestTemplateBuilder
import org.springframework.context.annotation.Bean
import org.springframework.web.client.RestTemplate


@SpringBootApplication
open class ConsumingRestApplication {
    companion object {
        private val log = LoggerFactory.getLogger(ConsumingRestApplication::class.java)
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(ConsumingRestApplication::class.java, *args)
        }
    }

    @Bean
    open fun restTemplate(builder: RestTemplateBuilder): RestTemplate {
        return builder.build()
    }
}
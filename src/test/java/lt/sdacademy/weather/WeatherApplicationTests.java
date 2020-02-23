package lt.sdacademy.weather;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//@SpringBootTest
class WeatherApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void tmp() {
        System.out.println(new BCryptPasswordEncoder().encode("OPL1A"));
    }
}

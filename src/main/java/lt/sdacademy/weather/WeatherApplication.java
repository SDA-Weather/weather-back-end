package lt.sdacademy.weather;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import lt.sdacademy.weather.services.DatabaseService;

@SpringBootApplication
public class WeatherApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext configurableApplicationContext = SpringApplication.run(WeatherApplication.class, args);
        DatabaseService databaseService = configurableApplicationContext.getBean(DatabaseService.class);
        databaseService.updateWeatherForecast();
    }
}

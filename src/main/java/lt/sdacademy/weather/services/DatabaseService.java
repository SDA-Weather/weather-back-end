package lt.sdacademy.weather.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Scanner;

import lt.sdacademy.weather.model.entities.LocationEntity;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;
import lt.sdacademy.weather.repositories.LocationRepository;
import lt.sdacademy.weather.repositories.WeatherDataRepository;

@EnableScheduling
@Service
public class DatabaseService {

    private static Scanner input = new Scanner(System.in);
    private final LocationRepository locationRepository;
    private final WeatherDataRepository weatherDataRepository;

    @Autowired
    public DatabaseService(LocationRepository locationRepository, WeatherDataRepository weatherDataRepository) {
        this.locationRepository = locationRepository;
        this.weatherDataRepository = weatherDataRepository;
    }

    public void updateWeatherForecast() {

        while (true) {
            System.out.println("Enter 'update' to start updating the database with newest weather data");
            System.out.println("Or enter 'shutdown' to shutdown this service.");
            System.out.println("> ");
            String inputString = input.next();
            switch (inputString) {
                case "update":
                    startUpdating();
                    break;
                case "shutdown":
                    System.exit(0);
                default:
                    break;
            }
            input.next();
        }
    }

    @Scheduled(fixedDelay = 86400000)
    private void startUpdating() {
        HttpRequestService httpRequestService = new HttpRequestService();
        JsonParserService jsonParserService = new JsonParserService();
        List<LocationEntity> locationEntityList = locationRepository.findAll();
        for (int i = 0; i < locationEntityList.size(); i++) {
            LocationEntity locationEntity = locationEntityList.get(i);
            System.out.println("Current location: " + locationEntity.getName() + " (" + locationEntity.getCode()
                                       + "). (" + (i + 1) + "/" + locationEntityList.size() + ")");
            try {
                String rawJsonResponse = httpRequestService.sendRequest(locationEntity.getCode());
                List<WeatherDataEntity> forecasts = jsonParserService.parseAndReturnForecasts(rawJsonResponse);
                for (WeatherDataEntity f : forecasts) {
                    f.setLocation(locationEntity);
                    WeatherDataEntity weatherDataEntity = weatherDataRepository.findByLocation_CodeAndForecastTimeUtcContaining(locationEntity.getCode(), f.getForecastTimeUtc());
                    if (weatherDataEntity != null) {
                        System.out.println("WDE entry found, updating...");
                        f.setId(weatherDataEntity.getId());
                    }
                    weatherDataRepository.save(f);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

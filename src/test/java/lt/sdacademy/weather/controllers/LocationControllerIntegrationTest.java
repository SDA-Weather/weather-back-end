package lt.sdacademy.weather.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import lt.sdacademy.weather.converters.CardDataConverter;
import lt.sdacademy.weather.converters.FavoritesConverter;
import lt.sdacademy.weather.converters.LocationConverter;
import lt.sdacademy.weather.converters.WeatherDataConverter;
import lt.sdacademy.weather.model.dto.LocationWeatherData;
import lt.sdacademy.weather.repositories.LocationRepository;
import lt.sdacademy.weather.repositories.WeatherDataRepository;
import lt.sdacademy.weather.services.LocationService;
import lt.sdacademy.weather.services.WeatherDataService;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)
class LocationControllerIntegrationTest {

    @Mock
    private LocationRepository locationRepository;

    @Mock
    private WeatherDataRepository weatherDataRepository;
    private LocationController locationController;


    @BeforeEach
    void setup() {
        CardDataConverter cardDataConverter = new CardDataConverter();
        FavoritesConverter favoritesConverter = new FavoritesConverter();
        WeatherDataConverter weatherDataConverter = new WeatherDataConverter();
        WeatherDataService weatherDataService = new WeatherDataService(weatherDataConverter, weatherDataRepository, locationRepository, cardDataConverter, favoritesConverter);
        LocationConverter locationConverter = new LocationConverter();
        LocationService locationService = new LocationService(locationConverter, locationRepository);
        locationController = new LocationController(locationService, weatherDataService);
    }

    @Test
    void getWeatherData() {
        LocationWeatherData result = locationController.getWeatherData(2);

        assertNotNull(result);
    }
}

package lt.sdacademy.weather.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import lt.sdacademy.weather.model.dto.CardData;
import lt.sdacademy.weather.model.dto.Location;
import lt.sdacademy.weather.model.dto.LocationWeatherData;
import lt.sdacademy.weather.model.dto.WeatherData;
import lt.sdacademy.weather.services.LocationService;
import lt.sdacademy.weather.services.WeatherDataService;

@CrossOrigin
@RestController
@RequestMapping("/api/locations")
public class LocationController {

    private final LocationService locationService;
    private final WeatherDataService weatherDataService;

    @Autowired
    public LocationController(LocationService locationService, WeatherDataService weatherDataService) {
        this.locationService = locationService;
        this.weatherDataService = weatherDataService;
    }

    @GetMapping
    public List<Location> getAllLocations() {
        return locationService.getAll();
    }

    @GetMapping("/{id}")
    public LocationWeatherData getWeatherData(@PathVariable Integer id) {
        List<WeatherData> weatherDataList = weatherDataService.getWeatherDataByLocationId(id);
        return new LocationWeatherData(locationService.getLocation(id), weatherDataList);
    }

    @GetMapping("/current/{locations}")
    public List<CardData> getCurrentWeatherData(@PathVariable String locations) {
        List<String> locationsList = Arrays.asList(locations.split(","));
        return weatherDataService.getCurrentWeatherDataForLocations(locationsList);
    }
}

package lt.sdacademy.weather.services;

import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lt.sdacademy.weather.converters.CardDataConverter;
import lt.sdacademy.weather.converters.FavoritesConverter;
import lt.sdacademy.weather.converters.WeatherDataConverter;
import lt.sdacademy.weather.model.dto.CardData;
import lt.sdacademy.weather.model.dto.Favorite;
import lt.sdacademy.weather.model.dto.WeatherData;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;
import lt.sdacademy.weather.repositories.LocationRepository;
import lt.sdacademy.weather.repositories.WeatherDataRepository;

@Service
public class WeatherDataService {

    private final WeatherDataConverter weatherDataConverter;
    private final WeatherDataRepository weatherDataRepository;
    private final LocationRepository locationRepository;
    private final CardDataConverter cardDataConverter;
    private final FavoritesConverter favoritesConverter;

    public WeatherDataService(WeatherDataConverter weatherDataConverter, WeatherDataRepository weatherDataRepository, LocationRepository locationRepository, CardDataConverter cardDataConverter, FavoritesConverter favoritesConverter) {
        this.weatherDataConverter = weatherDataConverter;
        this.weatherDataRepository = weatherDataRepository;
        this.locationRepository = locationRepository;
        this.cardDataConverter = cardDataConverter;
        this.favoritesConverter = favoritesConverter;
    }

    private String getCurrentDateHour(){
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("YYYY-MM-dd HH:00:00");
        return df.format(date);
    }

    public List<WeatherData> getWeatherDataByLocationId(Integer id) {
        List<WeatherDataEntity> weatherData = weatherDataRepository.findByLocation_IdAndForecastTimeUtcGreaterThanEqualOrderByForecastTimeUtcAsc(id, getCurrentDateHour());
        return weatherDataConverter.convert(weatherData);
    }

    public List<CardData> getCurrentWeatherDataForLocations(List<String> locations) {
        List<CardData> cardDataList = new ArrayList<>();
        for (String location : locations) {
            WeatherDataEntity weatherDataEntity = weatherDataRepository.findByLocation_CodeAndForecastTimeUtcContaining(location, getCurrentDateHour());
            if (weatherDataEntity == null) {
                weatherDataEntity = new WeatherDataEntity(0D, 0, 0, 0, 0, 0, 0D, "NaN", "NaN", null);
            }
            cardDataList.add(cardDataConverter.convert(locationRepository.findByCode(location), weatherDataEntity));
        }
        return cardDataList;
    }

    public List<Favorite> getCurrentWeatherDataForFavorites(List<String> locations) {
        List<Favorite> favoriteList = new ArrayList<>();
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("YYYY-MM-dd HH:00:00");
        String time = df.format(date);
        for (String location : locations) {
            favoriteList.add(favoritesConverter.convert(
                    locationRepository.findByCode(location),
                    weatherDataRepository.findByLocation_CodeAndForecastTimeUtcContaining(location, time)
            ));
        }
        return  favoriteList;
    }
}

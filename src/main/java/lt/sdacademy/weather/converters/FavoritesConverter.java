package lt.sdacademy.weather.converters;

import org.springframework.stereotype.Component;

import lt.sdacademy.weather.model.dto.Favorite;
import lt.sdacademy.weather.model.entities.LocationEntity;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;

@Component
public class FavoritesConverter {

    public Favorite convert(LocationEntity locationEntity, WeatherDataEntity weatherDataEntity) {
        return new Favorite(
                locationEntity.getId(),
                locationEntity.getName(),
                weatherDataEntity.getAirTemperature(),
                weatherDataEntity.getWindSpeed(),
                weatherDataEntity.getTotalPrecipitation(),
                weatherDataEntity.getConditionCode()
        );
    }
}

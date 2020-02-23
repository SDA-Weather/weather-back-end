package lt.sdacademy.weather.converters;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

import lt.sdacademy.weather.model.dto.WeatherData;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;

@Component
public class WeatherDataConverter {

    public List<WeatherData> convert(List<WeatherDataEntity> weatherData) {
        return weatherData.stream().map(this::convert).collect(Collectors.toList());
    }

    public WeatherData convert(WeatherDataEntity weatherDataEntity) {
        if (weatherDataEntity == null) {
            throw new IllegalArgumentException("WeatherDataEntity is required.");
        }

        return new WeatherData(
                weatherDataEntity.getAirTemperature(),
                weatherDataEntity.getWindSpeed(),
                weatherDataEntity.getWindGust(),
                weatherDataEntity.getWindDirection(),
                weatherDataEntity.getCloudCover(),
                weatherDataEntity.getSeaLevelPressure(),
                weatherDataEntity.getTotalPrecipitation(),
                weatherDataEntity.getConditionCode(),
                weatherDataEntity.getForecastTimeUtc()
        );
    }
}

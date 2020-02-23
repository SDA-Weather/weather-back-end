package lt.sdacademy.weather.repositories;

import org.springframework.data.repository.Repository;

import java.util.List;

import lt.sdacademy.weather.model.entities.WeatherDataEntity;

public interface WeatherDataRepository extends Repository<WeatherDataEntity, Integer> {

    List<WeatherDataEntity> findByLocation_IdAndForecastTimeUtcGreaterThanEqualOrderByForecastTimeUtcAsc(Integer id, String forecastTimeUtc);

    WeatherDataEntity save(WeatherDataEntity weatherDataEntity);

    WeatherDataEntity findByLocation_CodeAndForecastTimeUtcContaining(String code, String forecastTimeUtc);
}

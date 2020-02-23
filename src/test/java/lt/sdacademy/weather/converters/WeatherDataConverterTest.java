package lt.sdacademy.weather.converters;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import lt.sdacademy.weather.model.dto.WeatherData;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class WeatherDataConverterTest {

    private WeatherDataConverter weatherDataConverter;

    @BeforeEach
    void setUp() {
        weatherDataConverter = new WeatherDataConverter();
    }

    @Test
    void convert() {
    }

    @Test
    void convert_passingWeatherDataAsNull() {
        List<WeatherDataEntity> weatherDataEntities = new ArrayList<>();
        weatherDataEntities.add(null);

        IllegalArgumentException exception = Assertions.assertThrows(IllegalArgumentException.class, () -> {
            weatherDataConverter.convert(weatherDataEntities);
        });

        assertEquals("WeatherDataEntity is required.", exception.getMessage());
    }

    @Test
    void convert_emptyList() {
        List<WeatherDataEntity> weatherDataEntities = new ArrayList<>();

        List<WeatherData> result = weatherDataConverter.convert(weatherDataEntities);

        assertTrue(result.isEmpty());
    }
}

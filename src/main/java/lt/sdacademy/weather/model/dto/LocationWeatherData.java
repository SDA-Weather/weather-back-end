package lt.sdacademy.weather.model.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LocationWeatherData {

    private Location location;
    private List<WeatherData> weatherData;
}

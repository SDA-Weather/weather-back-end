package lt.sdacademy.weather.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WeatherData {

    private Double airTemperature;
    private Integer windSpeed;
    private Integer windGust;
    private Integer windDirection;
    private Integer cloudCover;
    private Integer seaLevelPressure;
    private Double totalPrecipitation;
    private String conditionCode;
    private String forecastTimeUtc;
}

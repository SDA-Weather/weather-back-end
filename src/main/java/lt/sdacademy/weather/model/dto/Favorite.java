package lt.sdacademy.weather.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Favorite {

    private Integer id;
    private String name;
    private Double airTemperature;
    private Integer windSpeed;
    private Double totalPrecipitation;
    private String conditionCode;
}

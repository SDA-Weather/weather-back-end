package lt.sdacademy.weather.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "weather_data")
public class WeatherDataEntity extends AbstractEntity {

    @Column(name = "air_temperature", nullable = false)
    private Double airTemperature;

    @Column(name = "wind_speed", nullable = false)
    private Integer windSpeed;

    @Column(name = "wind_gust", nullable = false)
    private Integer windGust;

    @Column(name = "wind_direction", nullable = false)
    private Integer windDirection;

    @Column(name = "cloud_cover", nullable = false)
    private Integer cloudCover;

    @Column(name = "sea_level_pressure", nullable = false)
    private Integer seaLevelPressure;

    @Column(name = "total_precipitation", nullable = false)
    private Double totalPrecipitation;

    @Column(name = "condition_code", nullable = false)
    private String conditionCode;

    @Column(name = "forecast_time_utc", length = 50, nullable = false)
    private String forecastTimeUtc;

    @ManyToOne
    @JoinColumn(name = "location_id")
    private LocationEntity location;
}

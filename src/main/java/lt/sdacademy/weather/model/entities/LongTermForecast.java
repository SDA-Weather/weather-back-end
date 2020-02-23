package lt.sdacademy.weather.model.entities;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class LongTermForecast {

    @SerializedName("place")
    private LocationEntity locationEntity;

    private String forecastCreationTimeUtc;

    @SerializedName("forecastTimestamps")
    private List<WeatherDataEntity> weatherDataEntities;

    public LongTermForecast(LocationEntity locationEntity, String forecastCreationTimeUtc, List<WeatherDataEntity> weatherDataEntities) {
        this.locationEntity = locationEntity;
        this.forecastCreationTimeUtc = forecastCreationTimeUtc;
        this.weatherDataEntities = weatherDataEntities;
    }

    public LocationEntity getLocationEntity() {
        return locationEntity;
    }

    public String getForecastCreationTimeUtc() {
        return forecastCreationTimeUtc;
    }

    public List<WeatherDataEntity> getForecastTimestamps() {
        return weatherDataEntities;
    }

    @Override
    public String toString() {
        return "LongTermForecast{" +
                "location=" + locationEntity +
                ", forecastCreationTimeUtc='" + forecastCreationTimeUtc + '\'' +
                ", forecastTimestamps=" + weatherDataEntities +
                '}';
    }
}

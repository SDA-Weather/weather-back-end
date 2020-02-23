package lt.sdacademy.weather.model.entities;

public class Forecast {

    private String forecastTimeUtc;
    private double airTemperature;
    private short windSpeed;
    private short windGust;
    private short windDirection;
    private short cloudCover;
    private short seaLevelPressure;
    private double totalPrecipitation;
    private String conditionCode;

    public Forecast(String forecastTimeUtc, double airTemperature, short windSpeed, short windGust, short windDirection, short cloudCover, short seaLevelPressure, double totalPrecipitation, String conditionCode) {
        this.forecastTimeUtc = forecastTimeUtc;
        this.airTemperature = airTemperature;
        this.windSpeed = windSpeed;
        this.windGust = windGust;
        this.windDirection = windDirection;
        this.cloudCover = cloudCover;
        this.seaLevelPressure = seaLevelPressure;
        this.totalPrecipitation = totalPrecipitation;
        this.conditionCode = conditionCode;
    }

    @Override
    public String toString() {
        return "Forecast{" +
                "forecastTimeUtc='" + forecastTimeUtc + '\'' +
                ", airTemperature=" + airTemperature +
                ", windSpeed=" + windSpeed +
                ", windGust=" + windGust +
                ", windDirection=" + windDirection +
                ", cloudCover=" + cloudCover +
                ", seaLevelPressure=" + seaLevelPressure +
                ", totalPrecipitation=" + totalPrecipitation +
                ", conditionCode=" + conditionCode +
                '}';
    }
}

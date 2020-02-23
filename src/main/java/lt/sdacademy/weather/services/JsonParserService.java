package lt.sdacademy.weather.services;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import lt.sdacademy.weather.model.entities.LongTermForecast;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;

public class JsonParserService {

    public List<WeatherDataEntity> parseAndReturnForecasts(String line) {
        Gson gson = new Gson();
        LongTermForecast forecast = gson.fromJson(line, LongTermForecast.class);
        return new ArrayList<>(forecast.getForecastTimestamps());
    }
}

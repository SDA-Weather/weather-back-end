package lt.sdacademy.weather.converters;

import lt.sdacademy.weather.model.dto.CardData;
import lt.sdacademy.weather.model.entities.LocationEntity;
import lt.sdacademy.weather.model.entities.WeatherDataEntity;
import org.springframework.stereotype.Component;

@Component
public class CardDataConverter {

    public CardData convert(LocationEntity locationEntity, WeatherDataEntity weatherDataEntity) {
        return new CardData(
                locationEntity.getId(),
                locationEntity.getName(),
                weatherDataEntity.getAirTemperature(),
                weatherDataEntity.getConditionCode()
        );
    }
}

package lt.sdacademy.weather.converters;

import lt.sdacademy.weather.model.dto.Location;
import lt.sdacademy.weather.model.entities.LocationEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class LocationConverter {

    public List<Location> convert(List<LocationEntity> locations) {
        return locations.stream().map(this::convert).collect(Collectors.toList());
    }

    public Location convert(LocationEntity location) {
        if (location == null) {
            throw new IllegalArgumentException("Location must be defined");
        }

        return new Location(
                location.getId(),
                location.getName(),
                location.getAdministrativeDivision(),
                location.getCountry()
        );
    }
}

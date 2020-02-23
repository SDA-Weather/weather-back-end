package lt.sdacademy.weather.services;

import lt.sdacademy.weather.converters.LocationConverter;
import lt.sdacademy.weather.model.dto.Location;
import lt.sdacademy.weather.model.entities.LocationEntity;
import lt.sdacademy.weather.repositories.LocationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService {

    private final LocationConverter locationConverter;
    private final LocationRepository locationRepository;

    public LocationService(LocationConverter locationConverter, LocationRepository locationRepository) {
        this.locationConverter = locationConverter;
        this.locationRepository = locationRepository;
    }

    public List<Location> getAll() {
        List<LocationEntity> locations = locationRepository.findAll();
        return locationConverter.convert(locations);
    }

    public Location getLocation(Integer id) {
        LocationEntity locationEntity = locationRepository.findById(id);
        return locationConverter.convert(locationEntity);
    }
}

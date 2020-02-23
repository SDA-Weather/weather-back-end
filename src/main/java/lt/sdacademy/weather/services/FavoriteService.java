package lt.sdacademy.weather.services;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lt.sdacademy.weather.converters.FavoritesConverter;
import lt.sdacademy.weather.model.dto.Favorite;
import lt.sdacademy.weather.model.entities.FavoriteEntity;
import lt.sdacademy.weather.model.entities.LocationEntity;
import lt.sdacademy.weather.model.entities.UserEntity;
import lt.sdacademy.weather.repositories.FavoriteRepository;
import lt.sdacademy.weather.repositories.LocationRepository;
import lt.sdacademy.weather.repositories.UserRepository;
import lt.sdacademy.weather.repositories.WeatherDataRepository;

@Service
public class FavoriteService {

    private final WeatherDataRepository weatherDataRepository;
    private final LocationRepository locationRepository;
    private final UserRepository userRepository;
    private final FavoriteRepository favoriteRepository;
    private final FavoritesConverter favoritesConverter;

    public FavoriteService(WeatherDataRepository weatherDataRepository, LocationRepository locationRepository, UserRepository userRepository, FavoriteRepository favoriteRepository,
                           FavoritesConverter favoritesConverter) {
        this.weatherDataRepository = weatherDataRepository;
        this.locationRepository = locationRepository;
        this.userRepository = userRepository;
        this.favoriteRepository = favoriteRepository;
        this.favoritesConverter = favoritesConverter;
    }

    @Transactional
    public void delete(Integer locationId, String email) {
        favoriteRepository.deleteByLocation_IdAndUser_Id(locationId, userRepository.findOneByEmail(email).getId());
    }

    public void save(Integer id, String userEmail) {
        UserEntity userEntity = userRepository.findOneByEmail(userEmail);
        LocationEntity locationEntity = locationRepository.findById(id);
        favoriteRepository.save(new FavoriteEntity(userEntity, locationEntity));
    }

    public List<Favorite> getFavorites(String userEmail) {
        List<Favorite> favoriteList = new ArrayList<>();
        UserEntity userEntity = userRepository.findOneByEmail(userEmail);
        for (LocationEntity locationEntity : userEntity.getLocations()) {
            favoriteList.add(favoritesConverter.convert(locationEntity, weatherDataRepository.findByLocation_CodeAndForecastTimeUtcContaining(locationEntity.getCode(), getCurrentDateHour())));
        }
        if (favoriteList.isEmpty()) {
            return null;
        } else {
            return favoriteList;
        }
    }

    private String getCurrentDateHour() {
        Date date = new Date();
        SimpleDateFormat df = new SimpleDateFormat("YYYY-MM-dd HH:00:00");
        return df.format(date);
    }
}

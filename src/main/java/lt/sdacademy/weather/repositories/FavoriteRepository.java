package lt.sdacademy.weather.repositories;

import org.springframework.data.repository.Repository;

import lt.sdacademy.weather.model.entities.FavoriteEntity;

public interface FavoriteRepository extends Repository<FavoriteEntity, Integer> {

    void deleteByLocation_IdAndUser_Id(Integer locationId, Integer userId);

    void save(FavoriteEntity favoriteEntity);
}

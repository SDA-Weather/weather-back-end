package lt.sdacademy.weather.repositories;

import lt.sdacademy.weather.model.entities.LocationEntity;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface LocationRepository extends Repository<LocationEntity, Integer> {

    List<LocationEntity> findAll();

    Integer countAllByCodeIsNotNull();

    LocationEntity findById(Integer id);

    LocationEntity findByCode(String location);
}

package lt.sdacademy.weather.repositories;

import lt.sdacademy.weather.model.entities.UserEntity;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<UserEntity, Integer> {

    UserEntity findOneByEmail(String email);
}

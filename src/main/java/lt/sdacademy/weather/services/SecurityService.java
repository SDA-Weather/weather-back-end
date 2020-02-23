package lt.sdacademy.weather.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lt.sdacademy.weather.configs.JwtAuthFilter;
import lt.sdacademy.weather.model.entities.UserEntity;
import lt.sdacademy.weather.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityService implements UserDetailsService {

    private final UserRepository userRepository;

    public SecurityService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = userRepository.findOneByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException(String.format("User \"%s\" not found", email));
        }

        return user;
    }

    public String generateToken(String email) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(email)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JwtAuthFilter.VALIDITY))
                .signWith(SignatureAlgorithm.HS512, JwtAuthFilter.SECRET)
                .compact();
    }
}

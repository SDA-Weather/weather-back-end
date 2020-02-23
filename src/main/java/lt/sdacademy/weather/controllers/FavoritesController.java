package lt.sdacademy.weather.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import lt.sdacademy.weather.model.dto.Favorite;
import lt.sdacademy.weather.services.FavoriteService;

@CrossOrigin
@RestController
@RequestMapping("/api/locations/favorites")
public class FavoritesController {

    private final FavoriteService favoriteService;

    @Autowired
    public FavoritesController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @GetMapping
    public List<Favorite> currentUserName(Authentication authentication) {
        return favoriteService.getFavorites(authentication.getName());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id, Authentication authentication) {
        favoriteService.delete(id, authentication.getName());
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping
    public String save(@RequestBody Integer id, Authentication authentication) {
        try {
            favoriteService.save(id, authentication.getName());
        } catch (DataIntegrityViolationException e) {
            return "{\"error\": \"Favorite already exists\"}";
        }
        return "{\"error\": \"OK\"}";
    }
}

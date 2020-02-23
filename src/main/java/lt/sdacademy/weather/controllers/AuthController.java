package lt.sdacademy.weather.controllers;

import lt.sdacademy.weather.model.dto.Token;
import lt.sdacademy.weather.model.dto.User;
import lt.sdacademy.weather.services.SecurityService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final SecurityService securityService;

    public AuthController(AuthenticationManager authenticationManager, SecurityService securityService) {
        this.authenticationManager = authenticationManager;
        this.securityService = securityService;
    }

    @PostMapping("/login")
    public Token authenticate(@RequestBody User user) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        return new Token(securityService.generateToken(user.getEmail()));
    }
}

package lt.sdacademy.weather.controllers;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import lt.sdacademy.weather.model.dto.Token;
import lt.sdacademy.weather.model.dto.User;
import lt.sdacademy.weather.model.entities.UserEntity;
import lt.sdacademy.weather.repositories.UserRepository;
import lt.sdacademy.weather.services.SecurityService;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertNotNull;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AuthControllerTest {

    private AuthController authController;
    private SecurityService securityService;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void init() {
        securityService = new SecurityService(userRepository);
        authController = new AuthController(authenticationManager, securityService);
    }

    @Test
    void authenticate() {
        User user = User.builder().email("super@user.com").password("supersecretpass").build();

        Token token = authController.authenticate(user);

        assertNotNull(token);
        assertEquals("Token(token=", token.toString().substring(0, 12));
    }

    @Test
    void authenticate_mockUserDatabase() {
        UserEntity userEntity = UserEntity.builder().email("super@user.com").password("supersecretpass").name("Super").build();
        when(userRepository.findOneByEmail(userEntity.getEmail())).thenReturn(userEntity);

        securityService.loadUserByUsername(userEntity.getEmail());
    }

    @Test
    void authenticate_passingUserWithWrongEmail() {
        UserEntity userEntity = UserEntity.builder().email("super@user.com").password("supersecretpass").name("Super").build();

        UsernameNotFoundException exception = Assertions.assertThrows(UsernameNotFoundException.class, () -> {
            securityService.loadUserByUsername(userEntity.getEmail());
        });

        assertEquals("User \"super@user.com\" not found", exception.getMessage());
    }

    @Test
    void authenticate_passingUserWithNull() {
        User user = null;

        NullPointerException exception = Assertions.assertThrows(NullPointerException.class, () -> {
            authController.authenticate(user);
        });

        assertEquals(null, exception.getMessage());
    }
}

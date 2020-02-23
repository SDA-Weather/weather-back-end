package lt.sdacademy.weather.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import lt.sdacademy.weather.converters.LocationConverter;
import lt.sdacademy.weather.model.dto.Location;
import lt.sdacademy.weather.model.entities.LocationEntity;
import lt.sdacademy.weather.repositories.LocationRepository;
import lt.sdacademy.weather.services.LocationService;
import lt.sdacademy.weather.services.WeatherDataService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
class LocationControllerTest {
    @Mock
    private LocationRepository locationRepository;

    private LocationController locationController;
    private LocationConverter locationConverter;
    private WeatherDataService weatherDataService;

    @BeforeEach
    void setup() {
        LocationConverter locationConverter = new LocationConverter();
        LocationService locationService = new LocationService(locationConverter, locationRepository);
        locationController = new LocationController(locationService, weatherDataService);
    }

    @Test
    void getAllPlaces() {
        List<LocationEntity> locations = new ArrayList<>();
        LocationEntity locationEntity = LocationEntity.builder()
                .code("bezdonys")
                .name("Bezdonys")
                .administrativeDivision("Vilniaus rajono savivaldybė")
                .country("Lithuania")
                .build();
        locations.add(locationEntity);
        when(locationRepository.findAll()).thenReturn(locations);

        List<Location> result = locationController.getAllLocations();

        assertEquals("Bezdonys", result.get(0).getName());
        //save Location
        /*
        @Test
        void getStudyProgram() {
            StudyProgramEntity studyProgram = StudyProgramEntity.builder()
                    .title("Study Program")
                    .students(new ArrayList<>())
                    .modules(new ArrayList<>())
                    .build();
            when(studyProgramRepository.findOneById(5)).thenReturn(studyProgram);
            StudyProgram result = studyProgramController.getStudyProgram(5);
            assertEquals("Study Program", result.getTitle());
            assertEquals(new ArrayList<>(), result.getModules());
        }
*/
        //get Location

        //verify
    }

    @Test
    void getWeatherData() {
    }

    @Test
    void getCurrentWeatherData() {
    }

    @Test
    void getFavorites() {
    }
}

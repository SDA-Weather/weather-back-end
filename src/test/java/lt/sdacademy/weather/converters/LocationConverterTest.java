package lt.sdacademy.weather.converters;

import lt.sdacademy.weather.model.dto.Location;
import lt.sdacademy.weather.model.entities.LocationEntity;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class LocationConverterTest {

    private LocationConverter locationConverter;

    @BeforeEach
    void setUp() {
        locationConverter = new LocationConverter();
    }

//    @Test
//    void convert_passingNull() {
//        List<LocationEntity> locations = new ArrayList<>();
//
//        List<Location> result = locationConverter.convert(null);
//        // neleidzia null convert, nes turim du metodus su skirtingais parametrais ir jis nezino i kuri kreiptis
//        assertNull(result);
//    }

    @Test
    void convert_passingListAsNull() {
        List<LocationEntity> locations = new ArrayList<>();
        locations.add(null);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class,
                () -> locationConverter.convert(locations));

        assertEquals("Location must be defined", exception.getMessage());
    }

    @Test
    void convert_emptyList() {
        List<LocationEntity> locations = new ArrayList<>();

        List<Location> result = locationConverter.convert(locations);

        assertTrue(result.isEmpty());
    }
}

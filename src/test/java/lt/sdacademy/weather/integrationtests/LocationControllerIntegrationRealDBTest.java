package lt.sdacademy.weather.integrationtests;

import com.fasterxml.jackson.core.type.TypeReference;
import lt.sdacademy.weather.model.dto.Location;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;

class LocationControllerIntegrationRealDBTest extends AbstractIT {

    @Test
    void getAllLocations() throws Exception {
        List<Location> result = sendGet("/api/locations", new TypeReference<List<Location>>() {
        });

        assertFalse(result.isEmpty());
    }
}
//Before išsivalyti duombaze / paduoti duomenis / juos išsaugoti / patikrinti ar grįžta tai, ką įvedįm

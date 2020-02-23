package lt.sdacademy.weather.services;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class HttpRequestService {

    private static HttpURLConnection connection;

    public String sendRequest(String locationCode) throws IOException {
        URL url = new URL("https://api.meteo.lt/v1/places/" + locationCode + "/forecasts/long-term");
        connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Accept-Charset", "UTF-8");
        connection.setRequestProperty("User-Agent", "Mozilla/5.0");
        connection.setRequestProperty("Content-Type", "application/json; charset=utf-8");
        connection.setConnectTimeout(10000);
        connection.setReadTimeout(10000);

        StringBuilder response;
        try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            response = new StringBuilder();
            while ((line = in.readLine()) != null) {
                response.append(line);
                response.append(System.lineSeparator());
            }
        }
        connection.disconnect();
        return response.toString();
    }
}

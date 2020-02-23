package lt.sdacademy.weather.model.exceptions;

import lombok.Getter;

import java.util.List;

@Getter
public class ServerError {

    private String message;

    private List<String> items;

    public ServerError() {
    }

    public ServerError(String message) {
        this.message = message;
    }

    public ServerError(String message, List<String> items) {
        this.message = message;
        this.items = items;
    }
}

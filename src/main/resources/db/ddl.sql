-- DDL -----------------------------------------------------------------------------------------

CREATE TABLE place (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
code VARCHAR(50) NOT NULL,
name VARCHAR(50) NOT NULL,
administrativeDivision VARCHAR(100) NOT NULL
);

CREATE TABLE weather_data
(
    id                 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    airTemperature     DOUBLE       NOT NULL,
    windSpeed          INT          NOT NULL,
    windGust           INT          NOT NULL,
    windDirection      INT          NOT NULL,
    cloudCover         INT          NOT NULL,
    seaLevelPressure   INT          NOT NULL,
    totalPrecipitation DOUBLE       NOT NULL,
    conditionCode      VARCHAR(50)  NOT NULL,
    forecastTimeUtc    VARCHAR(50)  NOT NULL,
    place_id           INT UNSIGNED NOT NULL,
    FOREIGN KEY (place_id) REFERENCES place (id)
);

-- DDL END--------------------------------------------------------------------------------------

alter table place
    change administrativeDivision administrative_division varchar(50) not null;
alter table place
    add column country varchar(50) not null;
alter table place
    add column countryCode varchar(10) not null;
update place
set country = 'Lietuva';
update place
set countryCode = 'LT';
alter table weather_data
    change airTemperature air_temperature double not null;
alter table weather_data
    change windSpeed wind_speed int not null;
alter table weather_data
    change windGust wind_gust int not null;
alter table weather_data
    change windDirection wind_direction int not null;
alter table weather_data
    change cloudCover cloud_cover int not null;
alter table weather_data
    change seaLevelPressure sea_level_pressure int not null;
alter table weather_data
    change totalPrecipitation total_precipitation double not null;
alter table weather_data
    change conditionCode condition_code varchar(50) not null;
alter table weather_data
    change forecastTimeUtc forecast_time_utc varchar(50) not null;
rename table place to location;
alter table weather_data
    change place_id location_id int unsigned not null;
alter table location
    change countryCode country_code varchar(10) not null;

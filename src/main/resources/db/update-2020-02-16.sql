-- DDL update 2020-02-16 ---------------------------
CREATE TABLE favorites
(
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id     INT UNSIGNED NOT NULL,
    location_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (location_id) REFERENCES location (id),
    UNIQUE (user_id, location_id)
);
-- ----------- DDL END ------------------------------

INSERT INTO user (email, password, name)
VALUES ('kitas@pastas.lt', '$2a$10$gVxwG6rYlAtbN0Pq30SHruzthEaMRf6/bDqOTo.DDYbDaE.qDLzX.', 'kitasUser');

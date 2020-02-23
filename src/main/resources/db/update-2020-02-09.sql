create table user
(
    id       int unsigned auto_increment primary key,
    email    varchar(250) not null unique,
    password varchar(60)  not null,
    name     varchar(50)  not null
);

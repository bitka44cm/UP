USE bali;

DROP TABLE IF EXISTS OFFERS;
DROP TABLE IF EXISTS HASHTAGS;
DROP TABLE IF EXISTS REVIEWS;
DROP TABLE IF EXISTS USERS;

CREATE TABLE OFFERS(
	OFFER_ID INT NOT NULL UNIQUE AUTO_INCREMENT,
    USER_ID INT NOT NULL,
    OFFER_NAME varchar(100) NOT NULL,
    DESCRIPTION varchar(250) NOT NULL,
    VENDOR_LINK varchar(250),
    VALID_UNTIL date,
    DISCOUNT INT NOT NULL,
    CREATED_AT datetime NOT NULL,
    PHOTO_LINK text,
    PRIMARY KEY(OFFER_ID)
);

INSERT INTO OFFERS(USER_ID, OFFER_NAME, DESCRIPTION, CREATED_AT, VALID_UNTIL, DISCOUNT, VENDOR_LINK, PHOTO_LINK) 
	VALUES
	(1, 'offer_name_1', 'Компьютеры со скидкой 40%Компьютеры со скидкой 40%Компьютеры со скидкой 40%Компьютеры со скидкой 40%Компьютеры со скидкой 40%', '2021-05-20 20:12:32', '2022-05-20 20:12:32', 10, 'https://ghost-writers.ru', 'https://qph.fs.quoracdn.net/main-qimg-191fcd7a4badd243ccaf2812f487e848.webp'),
	(1, 'offer_name_2', 'Компьютеры со скидкой 7%', '2021-03-01', '2022-05-18 20:12:32', 11, 'https://PC.pl', 'https://qph.fs.quoracdn.net/main-qimg-191fcd7a4badd243ccaf2812f487e848.webp'),
	(2, 'offer_name_3', 'Компьютеры со скидкой 25%', '2021-05-14 20:12:32', '2022-05-14 20:12:32', 25, 'https://PC.pl', 'https://qph.fs.quoracdn.net/main-qimg-191fcd7a4badd243ccaf2812f487e848.webp'),
	(3, 'offer_name_4', 'Компьютеры со скидкой 44%', '2021-05-12 20:12:32', '2022-05-12 20:12:32', 44, 'https://PC.pl', 'https://qph.fs.quoracdn.net/main-qimg-191fcd7a4badd243ccaf2812f487e848.webp'),
	(2, 'offer_name_5', 'Компьютеры со скидкой 5%', '2021-05-16T20:12:32', '2022-05-16T20:12:32', 5, 'https://PC.pl', 'https://qph.fs.quoracdn.net/main-qimg-191fcd7a4badd243ccaf2812f487e848.webp');

CREATE TABLE HASHTAGS(
	OFFER_ID INT NOT NULL,
    TAG VARCHAR(20)
);

INSERT INTO HASHTAGS(OFFER_ID, TAG)
	VALUES
    (1, 'PC'),
    (1, 'CS'),
    (1, 's1mple'),
    (2, 'PC'),
    (2, 'CSGO'),
    (2, 's1mple'),
    (3, 'PC'),
    (3, 'CS'),
    (3, 's1mpletop1'),
    (4, 'PC'),
    (4, 'CS'),
    (4, 'ACER'),
    (4, 's1mple'),
    (5, 'PC'),
    (5, 'CS'),
    (5, 'BSU'),
    (5, 's1mple');
    
    
    CREATE TABLE REVIEWS(
		OFFER_ID INT NOT NULL,
        USERNAME VARCHAR(32),
        REVIEW TEXT,
        DATE_REVIEW DATETIME,
        RATING INT NOT NULL
    );
    
    INSERT INTO REVIEWS(OFFER_ID, USERNAME, REVIEW, DATE_REVIEW, RATING)
		VALUES
        (1, 'German', 'Xbox is better!', curdate(), 3),
        (1, 'Petya', 'Xbox is better! I agree!', curdate(), 3),
        (1, 'Petya', 'Xbox is better! I agree!', curdate(), 4),
        (1, 'Yarick', 'Xbox is better! I agree!', curdate(), 1),
        (2, 'German', 'MacBook is the best computer !', curdate(), 4),
        (2, 'Artyom', 'MacOS is the best OS', '2020-05-09', 5),
        (3, 'Pasha', 'some cooment1', curdate(), 2),
        (4, 'Artyom', 'some comment2', '2020-05-09', 3),
        (5, 'Masha', 'some comment3', '2020-05-09', 5);
    
    CREATE TABLE USERS(
		USER_ID INT NOT NULL UNIQUE AUTO_INCREMENT,
        USER_NAME VARCHAR(32) NOT NULL,
        USER_PASSWORD VARCHAR(100) NOT NULL,
        IS_VENDOR BOOL,
        PRIMARY KEY(USER_ID)
    );
    
    INSERT INTO USERS(USER_NAME, USER_PASSWORD, IS_VENDOR)
    VALUES
    ('Artyom', '152941', TRUE),
    ('German', '152941', FALSE),
    ('Masha', '152941', TRUE),
    ('Pasha', '152941', FALSE);
    
    
    
    
    
    
    
    
    
    
    
    
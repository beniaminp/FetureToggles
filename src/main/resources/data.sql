DROP TABLE IF EXISTS admin_users;
CREATE TABLE admin_users
(
    id       BIGINT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(250) NOT NULL,
    password VARCHAR
);

INSERT INTO admin_users (id, name, password)
VALUES (1, 'admin', '1');
------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS customer;
CREATE TABLE customer
(
    id              INT AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(250) NOT NULL,
    created_at      BIGINT,
    created_by      BIGINT,
    last_updated_at BIGINT,
    last_updated_by BIGINT,
    active          BOOLEAN
);

INSERT INTO customer (id, name, created_at, created_by, last_updated_at, last_updated_by, active)
VALUES (1, 'Aliko', 1629435091113, 1, 1629435091113, 1, true),
       (2, 'Bill', 1629435091113, 1, 1629435091113, 1, true),
       (3, 'Folrunsho', 1629435091113, 1, 1629435091113, 1, true);
----------------------------------------------------------
DROP TABLE IF EXISTS feature_toggle;
CREATE TABLE feature_toggle
(
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    display_name    VARCHAR(250)  NOT NULL,
    technical_name  VARCHAR(250)  NOT NULL,
    expires_on      BIGINT        NOT NULL,
    description     VARCHAR(1000) NOT NULL,
    inverted        BOOLEAN       NOT NULL,
    created_at      BIGINT,
    created_by      BIGINT,
    last_updated_at BIGINT,
    last_updated_by BIGINT,
    active          BOOLEAN
);
INSERT INTO feature_toggle (id,
                            display_name,
                            technical_name,
                            expires_on,
                            description,
                            inverted,
                            created_at,
                            created_by,
                            last_updated_at,
                            last_updated_by,
                            active)
VALUES (1, 'future-a', 'improve-a', 1999435091113, 'improvement on future a', false, 1629435091113, 1, 1629435091113, 1,
        true),
       (2, 'future-b', 'improve-b', 1999435091113, 'improvement on future b', false, 1629435091113, 1, 1629435091113, 1,
        true),
       (3, 'future-c', 'improve-c', 1999435091113, 'improvement on future c', true, 1629435091113, 1, 1629435091113, 1,
        true),
       (4, 'future-d', 'improve-d', 1999435091113, 'improvement on future d', false, 1629435091113, 1, 1629435091113, 1,
        true),
       (5, 'future-e', 'improve-e', 1999435091113, 'improvement on future e', true, 1629435091113, 1, 1629435091113, 1,
        true),
       (6, 'future-f', 'improve-f', 1999435091113, 'improvement on future f', false, 1629435091113, 1, 1629435091113, 1,
        true),
       (7, 'future-g', 'improve-g', 1999435091113, 'improvement on future g', true, 1629435091113, 1, 1629435091113, 1,
        true),
       (8, 'future-h', 'improve-h', 1999435091113, 'improvement on future h', false, 1629435091113, 1, 1629435091113, 1,
        true),
       (9, 'future-i', 'improve-i', 1999435091113, 'improvement on future i', true, 1629435091113, 1, 1629435091113, 1,
        true);
-----------------------------------------------------------------------------------------------------------------------
DROP TABLE IF EXISTS customer_toggle;
CREATE TABLE customer_toggle
(
    id                BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id       BIGINT NOT NULL,
    feature_toggle_id BIGINT NOT NULL,
    expires_on        BIGINT,
    created_at        BIGINT,
    created_by        BIGINT,
    last_updated_at   BIGINT,
    last_updated_by   BIGINT,
    active            BOOLEAN
);

INSERT INTO customer_toggle (customer_id, feature_toggle_id, created_at, created_by, last_updated_at, last_updated_by,
                             active, expires_on)
VALUES (1, 1, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (1, 2, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (1, 3, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (2, 4, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (2, 5, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (2, 5, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (3, 6, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (3, 7, 1629435091113, 1, 1629435091113, 1, true, 1629435091113),
       (3, 1, 1629435091113, 1, 1629435091113, 1, true, 1629435091113);
------------------------------------------------------------------------------------------------------------------

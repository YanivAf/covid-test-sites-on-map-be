CREATE TABLE IF NOT EXISTS sites (
    id          INT(200) AUTO_INCREMENT,
    sId         VARCHAR(36) NOT NULL,
    sTitle      VARCHAR(20) NOT NULL,
    sDetails    VARCHAR(200) NOT NULL,
    sTestType   VARCHAR(10) NOT NULL,
    sType       VARCHAR(10) NOT NULL,
    lat         FLOAT(16) NOT NULL,
    lng         FLOAT(16) NOT NULL,
    createdAt   TIMESTAMP NOT NULL,
    updatedAt   TIMESTAMP NOT NULL,
    archived    BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS sites (
    id          INT(200) AUTO_INCREMENT NOT NULL,
    sId         VARCHAR(36) NOT NULL,
    sTitle      VARCHAR(20) NOT NULL,
    sDetails    VARCHAR(200) NOT NULL,
    sTestType   VARCHAR(10) NOT NULL,
    sType       VARCHAR(10) NOT NULL,
    lat         FLOAT(64) NOT NULL,
    lng         FLOAT(64) NOT NULL,
    createdAt   DATE DEFAULT (CURRENT_DATE) NOT NULL,
    updatedAt   DATE DEFAULT (CURRENT_DATE) NOT NULL,
    archived    BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
/*
* CREATE TABLE properties (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);*/
/*CREATE TABLE units (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  property_id CHAR(36) REFERENCES properties(id) ON DELETE CASCADE
);*/

export type Properties = {
    id: string,//36
    name: string,//255
    address: string,//255
}
export type Units  = {
    id: string,//36
    name: string,//255
    property_id: string,//36
}
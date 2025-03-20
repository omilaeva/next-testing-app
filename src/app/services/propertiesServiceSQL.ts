//import postgres from "postgres";
import {sql} from './db';

import {Properties} from "./definitions";

/*CREATE TABLE properties (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);*/
const TABLE : string = "properties";


//const sql = postgres();

export async function getAll():Promise<Properties[] | undefined>  {
    console.log("getAll");

    let rows : Properties[] | undefined = undefined;
    try {
        rows =await sql<Properties[]>`SELECT *FROM ${sql(TABLE)}`;
    }catch (error){
        console.error(error);
    }

    console.log(rows)

    return  rows;
}


export async function getOne(id : string) : Promise<Properties | undefined>{
    console.log("getOne")
   // id = id.padEnd(36," ");

    let row: Properties[] | undefined = undefined;
    try {
        row  = await sql<Properties[]>`SELECT * 
                                         FROM ${sql(TABLE)} 
                                        WHERE id = ${id}`;
    }catch (error){
        console.log(error);
        return undefined;
    }

    return row?.[0];
}

export async function add(property : Properties) : Promise<Properties | undefined> {

    let newProperty: Properties[] | undefined = undefined;

    try {
        newProperty= await sql<Properties[] >`INSERT INTO ${sql(TABLE)} (id, name, address)
                                 VALUES ( ${property.id}, ${property.name}, ${property.address}) RETURNING * `;
    } catch (error) {
        console.error(error);
    }
    //console.log(newProperty);

    return newProperty?.[0];
}

export async function  remove(id: string): Promise<boolean>  {
    try {
        await sql`DELETE FROM ${sql(TABLE)}
                        WHERE id = ${id}`;
    } catch (error) {
        console.error(error);
        return false;
    }
    return true;
}
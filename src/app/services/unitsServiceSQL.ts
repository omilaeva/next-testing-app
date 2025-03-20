//import postgres from "postgres";
import {sql} from './db';

import {Units} from "./definitions";

/*CREATE TABLE units (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  property_id CHAR(36) REFERENCES properties(id) ON DELETE CASCADE
);*/
const TABLE : string = "units";


//const sql = postgres();

export async function getAll():Promise<Units[] | undefined>  {
    console.log("getAll");

    let rows : Units[] | undefined = undefined;
    try {
        rows =await sql<Units[]>`SELECT *FROM ${sql(TABLE)}`;
    }catch (error){
        console.error(error);
    }

    console.log(rows)

    return  rows;
}


export async function getOne(id : string) : Promise<Units | undefined>{
    console.log("getOne")
    // id = id.padEnd(36," ");

    let row: Units[] | undefined = undefined;
    try {
        row  = await sql<Units[]>`SELECT * 
                                         FROM ${sql(TABLE)} 
                                        WHERE id = ${id}`;
    }catch (error){
        console.log(error);
        return undefined;
    }

    return row?.[0];
}

export async function getbyPropertyId(id : string) : Promise<Units[] | undefined> {
    console.log("getbyPropertyId");

    let rows : Units[] | undefined = undefined;
    try {
        rows =await sql<Units[]>`SELECT * FROM ${sql(TABLE)}
                                        WHERE property_id = ${id}`;
    }catch (error){
        console.error(error);
    }

    console.log(rows)

    return  rows;
}

export async function add(unit : Units) : Promise<Units | undefined> {

    let newUnit: Units[] | undefined = undefined;

    try {
        newUnit= await sql<Units[] >`INSERT INTO ${sql(TABLE)} (id, name, property_id)
                                 VALUES ( ${unit.id}, ${unit.name}, ${unit.property_id}) RETURNING * `;
    } catch (error) {
        console.error(error);
    }
    //console.log(newProperty);

    return newUnit?.[0];
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
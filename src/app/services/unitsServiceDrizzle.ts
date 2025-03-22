//import postgres from "postgres";
import { eq, lt, gte, ne } from 'drizzle-orm';

import { db } from "../../db/db";
import { units} from "../../db/schema";
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
        rows = await db.select().from(units);
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
        row  = await db.select().from(units).where(eq(units.id,id));
    }catch (error){
        console.log(error);
        return undefined;
    }

    return row?.[0];
}



export async function add(unit : Units) : Promise<Units | undefined> {

    let newUnit: Units[] | undefined = undefined;

    try {
        newUnit= await db.insert(units).values(unit).returning();
    } catch (error) {
        console.error(error);
    }
    //console.log(newProperty);

    return newUnit?.[0];
}

export async function  remove(id: string): Promise<boolean>  {
    try {
        await db.delete(units).where(eq(units.id,id));
    } catch (error) {
        console.error(error);
        return false;
    }
    return true;
}
//import { NextRequest, NextResponse } from "next/server";
import { eq, lt, gte, ne } from 'drizzle-orm';

import { db } from "../../db/db";
import {properties} from "../../db/schema";
import {Properties} from "./definitions";
//import {sql} from "./db";


export async function getAll():Promise<Properties[] | undefined>  {
    console.log("getAll");

    let rows : Properties[] | undefined = undefined;
    try {
        rows =await db.select().from(properties);
        console.log(rows)
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
        row = await db.select().from(properties).where(eq(properties.id,id))
    }catch (error){
        console.log(error);
        return undefined;
    }

    return row?.[0];
}

export async function add(property : Properties) : Promise<Properties | undefined> {

    let newProperty: Properties[] | undefined = undefined;

    try {
        newProperty= await db.insert(properties).values(property).returning();
        console.log(newProperty);
    } catch (error) {
        console.error(error);
    }
    //console.log(newProperty);

    return newProperty?.[0];
}

export async function  remove(id: string): Promise<boolean>  {
    try {
        await db.delete(properties).where(eq(properties.id,id));
    } catch (error) {
        console.error(error);
        return false;
    }
    return true;
}

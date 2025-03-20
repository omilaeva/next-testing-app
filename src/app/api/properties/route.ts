import { NextRequest } from 'next/server';
//import * as service from '../../services/propertiesServiceArray';
import * as service from '../../services/propertiesServiceSQL';
import {Properties} from "../../services/definitions";

export async function GET(request: NextRequest) {

    const properties : Properties[] | undefined= await service.getAll();

    if (properties){
        return new Response(JSON.stringify(properties), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    }else{
        return new Response(null, {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

}

export async function POST(request: NextRequest) {
    // Parse the request body
    const body = await request.json();
    const  property : Properties = body;


    const newProperty : Properties | undefined = await service.add(property);

    if (newProperty){
        return new Response(JSON.stringify(newProperty), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    }else{
        return new Response(null, {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }

}
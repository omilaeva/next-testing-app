import { NextRequest } from 'next/server';
//import * as service from '../../services/propertiesServiceArray';
import * as service from '../../services/unitsServiceSQL';
import {Units} from "../../services/definitions";

export async function GET(request: NextRequest) {

    const units : Units[] | undefined = await service.getAll();

    if (units){
        return new Response(JSON.stringify(units), {
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
    const  unit : Units = body;


    const newUnit : Units | undefined = await service.add(unit)

    if (newUnit){
        return new Response(JSON.stringify(newUnit), {
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
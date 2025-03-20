import { NextRequest } from 'next/server';
import {Properties} from "../../../services/definitions";
import * as service from '../../../services/propertiesServiceSQL';
//import * as service from '../../../services/propertiesArray';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id : string = (await params).id;
    console.log(id);
    const property : Properties| undefined = await service.getOne(id);
    // e.g. Query a database for user with ID `id`

    if (property) {
        return new Response(JSON.stringify(property), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }else{
        return new Response(null, {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }

}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id : string = (await params).id;

    const property : Properties| undefined = await service.getOne(id);

    if(!property) {
        return new Response(null, {status: 404 });
    }

    if (await service.remove(id)){
        return new Response( null, { status: 204 });
    }else{
        return new Response( null, { status: 500 });
    }

}
import { NextRequest } from 'next/server';
import {Units} from "../../../services/definitions";
import * as service from '../../../services/unitsServiceSQL';
//import * as service from '../../../services/propertiesArray';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id : string = (await params).id;
    console.log(id);
    const unit : Units| undefined = await service.getOne(id);
    // e.g. Query a database for user with ID `id`

    if(unit){
        return new Response(JSON.stringify(unit), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }else{
        return new Response(null, {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }

}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id : string = (await params).id;

    const unit : Units | undefined = await service.getOne(id);

    if(!unit){
        return new Response(null, {status: 404 });
    }

    if (await service.remove(id)){
        return new Response( null, { status: 204 });
    }else{
        return new Response( null, { status: 500 });
    }

}
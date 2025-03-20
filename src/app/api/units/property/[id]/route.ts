import { NextRequest } from 'next/server';
import {Units} from "../../../../services/definitions";
import * as service from '../../../../services/unitsServiceSQL';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id : string = (await params).id;
    console.log(id);
    const units : Units[] | undefined = await service.getbyPropertyId(id);
    // e.g. Query a database for user with ID `id`

    if (units){
        return new Response(JSON.stringify(units), {
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
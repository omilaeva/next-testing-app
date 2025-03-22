import { NextRequest } from 'next/server';
//import * as service from '../../services/propertiesServiceArray';
//import * as service from '../../services/propertiesServiceSQL';
import * as service from '../../services/propertiesServiceDrizzle';

export async function GET(request: NextRequest) {

    const data = await service.getPropertiesJoinUnits();

    if (data){
        return new Response(JSON.stringify(data), {
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
import {Units} from "./definitions";
import propertiesJson from "./properties.json";

const properties : Units[] = propertiesJson;//[];

export function  getAll() : Units[] {
    return properties;
}

export function getOne(id : string) : Units | undefined{
    console.log("getOne")
    const comment :Units | undefined = properties.find((element)=> element.id === id);
    console.log(comment);
    return comment;
}

export function add(property : Units) : Units {
    properties.push(property);
    return property;
}

export function remove(id: string) : Units | undefined {
    const property :Units | undefined = properties.find((element)=> element.id === id);

    if (property){
        properties.splice(properties.indexOf(property), 1);
    }

    return property;
}
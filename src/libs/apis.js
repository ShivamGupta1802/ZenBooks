
import sanityClient from "./sanity";
import * as queries from './sanityQueries';
import {Room} from '../models/room';


export async function getFeaturedRoom(){
    const result=await sanityClient.fetch(queries.getFeaturedRoomquery,{},
        {cache:'no-cache'}
    );
    return result;
      
}


export async function getRooms()
{
    const result=await sanityClient.fetch(queries.getRoomsQuery ,{},
        { cache: 'no-cache' });
    return result;
}

export async function getRoom(slug)
{
    const result=await sanityClient.fetch(queries.getRoom,{slug},{ cache: 'no-cache' });
    return result;
}


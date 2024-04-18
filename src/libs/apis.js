
import sanityClient from "./sanity";
import * as queries from './sanityQueries';
import {Room} from '../app/models/room';


export async function getFeaturedRoom(){
    const result=await sanityClient.fetch(queries.getFeaturedRoomquery,{},
        {cache:'no-cache'}
    );
    return result;
      
}


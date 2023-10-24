import { createDirectus, rest, readItems, readUser } from '@directus/sdk';

export const getDirectusClient = async ( collection, args, type = 'items' ) => {
    const client = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());
    let result = '';
    if ( type === 'items' ) {
        result = await client.request(
            readItems( collection, args )
        );
    } else if( type === 'users' ) {
        result = await client.request(
            readUser( args.authorId )
        );
    }

    return result;
};

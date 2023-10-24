import { getDirectusClient } from './client'
import { getAssetURL } from './getAssetUrl'
import { marked } from 'marked'

export async function getAuthor( args ) {

    const rawAuthor = await getDirectusClient( 
        'directus_users', 
        args,
        'users'
    )
    
    const author = {
        'displayName': rawAuthor.first_name + ' ' + rawAuthor.last_name,
        'bio': rawAuthor.description,
    };

    if (rawAuthor.avatar) {
        author.photo = getAssetURL( rawAuthor.avatar );
    }

    return author;
}
import { fetchAPI } from "./client";

export async function getAuthor( args ) {
    let queryArgs = 'users/' + args.authorId;

    const rawAuthor = await fetchAPI( queryArgs );
    
    const author = {
        'displayName': rawAuthor.name,
        'bio': rawAuthor.description,
    };

    if (rawAuthor?.avatar_urls['96']) {
        author.photo = rawAuthor?.avatar_urls['96'];
    }

    return author;
}
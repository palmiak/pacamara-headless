const cmsType = 'wordpress';

export async function getPosts( args ) {
    const data = await import( `./${cmsType}/getPosts.js` );
    return data.getPosts( args );
}

export async function getAuthor( args ) {
    const data = await import( `./${cmsType}/getAuthor.js` );
    return data.getAuthor( args );
}

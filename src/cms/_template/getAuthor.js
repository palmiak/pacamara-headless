export async function getAuthor( args ) {

    const rawAuthor = [];
    
    const author = {
        'displayName': '',
        'bio': '',
    };

    if (rawAuthor.avatar) {
        author.photo = '';
    }

    return author;
}
import { cosmic } from "./client.js";

export async function getAuthor( args ) {

    const rawAuthor = await cosmic.objects.findOne({
        type: "users",
        id: args.authorId
    });
    
    const author = {
        'displayName': rawAuthor.object.title,
        'bio': rawAuthor.object.metadata.bio,
    };

    if (rawAuthor.object.thumbnail) {
        author.photo = rawAuthor.object.thumbnail;
    }

    return author;
}
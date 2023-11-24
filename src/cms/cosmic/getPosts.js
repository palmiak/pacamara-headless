import { cosmic } from "./client.js";
import { marked } from 'marked'

export async function getPosts( args ) {    
    const limit = ( args.postLimit ) ? args.postLimit : 1000;

    let query = {
        type: 'blog',
    };

    if ( args.skipPost ) {
        query.id = {
            $ne: args.skipPost
        }
    }

    const rawPosts = await cosmic.objects
    .find(query)
    .sort('-created_at')
    .depth(1)
    .limit(limit);

    const posts = [];
    rawPosts.objects.map((post, index) => {

        const temp = {
            'id': post.id,
            'title': post.title,
            'slug': post.slug,
            'intro': post.metadata.intro,
            'tag': post.metadata.tag,
            'pubDate': post.published_at,
            'content': marked.parse(post.metadata.content),
            'authorId': post.metadata.author.id
        };

        if (post.thumbnail) {
            temp.image = post.thumbnail;
        }

        posts.push(temp);
    });

    return posts;
}
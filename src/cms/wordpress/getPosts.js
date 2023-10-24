import { fetchAPI } from "./client";

export async function getPosts( args ) {
    let queryArgs = 'posts?';

    if ( args.postLimit !== undefined ) {
        queryArgs = queryArgs + 'per_page=' + args.postLimit + '&';
    } else {
        queryArgs = queryArgs + 'per_page=100&';
    }

    if ( args.skipPost !== undefined ) {
        queryArgs = queryArgs + 'exclude=' + args.skipPost + '&';
    }

    queryArgs = queryArgs + '_embed';

    const rawPosts = await fetchAPI( queryArgs );
    const posts = [];
    rawPosts.map((post, index) => {
        const temp = {
            'id': post.id,
            'title': post.title.rendered,
            'slug': post.slug,
            'intro': post.excerpt.rendered,
            'tag': post._embedded["wp:term"][1][0].name,
            'pubDate': post.data,
            'content': post.content.rendered,
            'authorId': post.author
        };

        if (post._embedded["wp:featuredmedia"] !== undefined ) {
            temp.image = post._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
        }

        posts.push(temp);
    });

    return posts;
}
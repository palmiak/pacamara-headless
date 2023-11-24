import { getDirectusClient } from './client'
import { getAssetURL } from './getAssetUrl'
import { marked } from 'marked'

export async function getPosts( args ) {
    const params =  {
        fields: ['*'],
    };

    if ( args.postLimit != undefined && args.postLimit != '' ) {
        params.limit = args.postLimit;
    }

    if ( args.skipPost != undefined && args.skipPost != '' ) {
        params.filter = {
            "id": {
                "_neq": args.skipPost
            }
        }
    }

    const rawPosts = await getDirectusClient( 
        "Blog", 
        params
    )
    
    const posts = [];
    rawPosts.map((post, index) => {
        const temp = {
            'id': post.id,
            'title': post.Title,
            'slug': post.Slug,
            'intro': post.Intro,
            'tag': post.Tag,
            'pubDate': post.date_created,
            'content': marked.parse( post.Content ),
            'authorId': post.user_created
        };

        if (post.Image) {
            temp.image = getAssetURL( post.Image );
        }

        posts.push(temp);
    });

    return posts;
}
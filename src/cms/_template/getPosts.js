export async function getPosts( args ) {    
    const posts = [];
    rawPosts.map((post, index) => {
        const temp = {
            'id': '',
            'title': '',
            'slug': '',
            'intro': '',
            'tag': '',
            'pubDate': '',
            'content': '',
            'authorId': ''
        };

        if (post.Image) {
            temp.image = '';
        }

        posts.push(temp);
    });

    return posts;
}
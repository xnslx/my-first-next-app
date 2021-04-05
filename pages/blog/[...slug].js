import {useRouter} from 'next/router';

function BlogPostsPage() {

    const router = useRouter()
    return(
        <div>
            <h1>The Blog Posts.</h1>
        </div>
    )
};

export default BlogPostsPage;
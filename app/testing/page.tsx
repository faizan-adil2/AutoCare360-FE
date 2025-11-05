// app/posts/page.tsx

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache' // equivalent to getStaticProps
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    
    const data = await res.json(); 
    return data;
}

export default async function Posts() {
    const posts = await getPosts();
    
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <div className="space-y-4">
                {posts.map((post: any) => (
                    <div key={post.id} className="border p-4 rounded">
                        <h2 className="font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default function Post({allPosts}) {
    return (
        allPosts.map((post) => (
            <h1 key={post._id}>{post.content}</h1>
        ))
    )
}
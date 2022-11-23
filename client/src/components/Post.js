export default function Post({allPosts}) {
    return (
        allPosts.map((post) => (
        <div key={post._id} class="post">
            <h3>{post.title}</h3>
            <code>{post.content}</code>
        </div>
        ))
    )
}
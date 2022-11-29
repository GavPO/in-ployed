export default function SinglePost({allPosts, handlePostUpvote}) {
    return (
        allPosts.map((post) => (
        <div key={post._id} class="post">
            <h3>{post.title}</h3>
            <code>{post.content}</code>
            <button onClick={() => handlePostUpvote(post._id)}>UPVOTE POST</button>
        </div>
        ))
    )
}
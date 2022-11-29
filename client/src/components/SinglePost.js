export default function SinglePost({allPosts, handlePostUpvote}) {
    return (
        allPosts.map((post) => (
        <div key={post._id} className="post">
            <h3>{post.title}</h3>
            <code>{post.content}</code> <br/>
            <button onClick={() => handlePostUpvote(post._id)}/>
        </div>
        ))
    )
}
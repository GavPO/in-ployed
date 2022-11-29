export default function SinglePost({allPosts, handlePostUpvote, upvoteCount}) {
    return (
        allPosts.map((post) => (
        <div key={post._id} className="post">
            <h3>{post.title} with {post.upvotes.length} upvotes!</h3>
            <code>{post.content}</code> <br/>
            <button onClick={() => handlePostUpvote(post._id)}/>
        </div>
        ))
    )
}
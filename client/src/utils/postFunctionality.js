const postForm = async (event) => {
    
    // Get post title
  const postTitle = document.querySelector('id="postTitle"').value;
  // Get post content
  const postContent = document.querySelector('id="postContent"').value;
  // Make post to database so we can show it on the site
  if (postTitle, postContent) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: postTitle,
        content: postContent
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Comment Posted');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#postForm').addEventListener('submit', commentForm);
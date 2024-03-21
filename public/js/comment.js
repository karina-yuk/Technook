// Function to extract post ID from the URL
const getPostIdFromUrl = () => {
  // Split the URL by "/" to get an array of URL parts
  const urlParts = window.location.toString().split("/");
  // Return the last part of the URL, which is the post ID
  return urlParts[urlParts.length - 1];
};

// Function to handle comment form submission
const commentFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the comment form
  const commentText = document.querySelector('#comment').value.trim();

  // Extract post_id from the URL
  const postId = getPostIdFromUrl();

  // Check if the comment has a value and post_id is extracted
  if (commentText && postId) {
    // Send a POST request to the API endpoint for posting comments
    const response = await fetch('/api/comments', {
      method: 'POST',
      // Convert the user input to JSON and include it in the request body
      body: JSON.stringify({ post_id: postId, comment_text: commentText }),
      // Specify the content type of the request body as JSON
      headers: { 'Content-Type': 'application/json' },
    });

    // Check if the response status is OK (200-299 range)
    if (response.ok) {
      // If the response status is successful (in the 200-299 range), reload the page to reflect the updated comments
      window.location.reload();
    } else {
      // If the response status is not OK, show an alert with the status text
      alert(response.statusText);
    }
  }
};

// Check if the comment form exists in the DOM
if (document.querySelector('#comment-form')) {
  // Add an event listener to the comment form to trigger the commentFormHandler function
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
}
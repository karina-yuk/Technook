// Function to extract post ID from the URL
const getPostIdFromUrl = () => {
  // Split the URL by "/" to get an array of URL parts
  const urlParts = window.location.toString().split('/');
  // Return the last part of the URL, which is the post ID
  return urlParts[urlParts.length - 1];
};

// Function to handle post editing form submission
const editPostFormHandler = async (event) => {
  event.preventDefault();

  // Extract post ID from the URL
  const postId = getPostIdFromUrl();

  // Collect values from the edit post form
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  // Check if both title and content have values
  if (title && content) {
    try {
      // Send a PUT request to the API endpoint for updating the post
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        // Convert the user input to JSON and include it in the request body
        body: JSON.stringify({ title, content }),
        // Specify the content type of the request body as JSON
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the response status is OK (200-299 range)
      if (response.ok) {
        // If the response status is successful, redirect to the updated post or dashboard
        window.location.replace('/dashboard');
      } else {
        // If the response status is not OK, show an alert with the status text
        alert(response.statusText);
      }
    } catch (error) {
      // If an unexpected error occurs during the fetch request, log the error and show an alert
      alert('An unexpected error occurred. Please try again.');
    }
  } else {
    // If either title or content is empty, display an alert to the user
    alert('Title and content are required.');
  }
};

// Add an event listener to the edit post form
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editPostFormHandler);
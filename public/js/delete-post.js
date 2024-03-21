// Function to handle post deletion
const deletePostHandler = async (event) => {
  // Prevent the default behavior of the button
  event.preventDefault();

  // Extract post ID from the data attribute of the clicked button
  const postId = event.target.dataset.postId;

  try {
    // Send a DELETE request to the API endpoint for deleting the post
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    // Check if the response status is OK (200-299 range)
    if (response.ok) {
      // If the response status is successful, redirect to the dashboard
      window.location.replace('/dashboard');
    } else {
      // If the response status is not OK, show an alert with the status text
      alert(response.statusText);
    }
  } catch (error) {
    // If an unexpected error occurs during the fetch request, log the error and show an alert
    alert('An unexpected error occurred. Please try again.');
  }
};

// Add an event listener to all elements with the class 'delete-post-button'
document.querySelectorAll('.delete-post-button').forEach((button) => {
  button.addEventListener('click', deletePostHandler);
});
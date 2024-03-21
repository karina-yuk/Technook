// Function to handle new post form submission
const newPostFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the new post form
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  // Check if both title and content have values
  if (title && content) {
    try {
      // Send a POST request to the API endpoint for creating a new post
      const response = await fetch('/api/posts', {
        method: 'POST',
        // Convert the user input to JSON and include it in the request body
        body: JSON.stringify({ title, content }),
        // Specify the content type of the request body as JSON
        headers: { 'Content-Type': 'application/json' },
      });

      // Check if the response status is OK (200-299 range)
      if (response.ok) {
        // If the response status is successful, redirect to the updated dashboard
        window.location.replace('/dashboard');
      } else {
        // If the response status is not OK, show an alert with the status text
        alert(response.statusText);
      }
    } catch (error) {
      // If an unexpected error occurs, show an alert
      console.error('Error during new post creation:', error.message);
      alert('An unexpected error occurred. Please try again.');
    }
  }
};

// Add an event listener to the new post form
document
  .querySelector('#new-post-form')
  .addEventListener('submit', newPostFormHandler);
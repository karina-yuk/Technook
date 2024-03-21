// Function to handle user logout
const logout = async () => {
  // Send a POST request to the API endpoint for user logout
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    // Specify the content type of the request body as JSON
    headers: { 'Content-Type': 'application/json' },
  });

  // Check if the response status is OK (200-299 range)
  if (response.ok) {
    // If the response status is successful, redirect to the homepage
    document.location.replace('/');
  } else {
    // If the response status is not OK, show an alert with the status text
    alert(response.statusText);
  }
};

// Check if the logout button exists in the DOM
if (document.querySelector('#logout')) {
  // Add an event listener to the logout button to trigger the logout function
  document.querySelector('#logout').addEventListener('click', logout);
}
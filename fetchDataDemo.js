// Example JavaScript script to fetch data from a public API

// Define the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch and display data
async function fetchData() {
  try {
    // Send GET request to the API
    const response = await fetch(apiUrl);

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Display the first 5 records in console
    console.log('Fetched Data (first 5 records):');
    console.log(data.slice(0, 5));

  } catch (error) {
    // Catch and display any errors during the fetch process
    console.error('Error fetching data:', error);
  }
}

// Call the function
fetchData();

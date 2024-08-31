document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Replace with your API URL
  const dataList = document.getElementById('dataList');

  // Function to fetch data from the API
  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      displayData(data.slice(0, 10)); // Show only the first 5 records
      // displayData(data); // to show all the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Function to display data in the UI
  function displayData(data) {
    data.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title; // Assuming each item has a 'title' property
      dataList.appendChild(listItem);
    });
  }

  // Initial data fetch
  fetchData();
});

document.getElementById('retrieveButton').addEventListener('click', () => {
    // Make a GET request to the API
    fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
        });
});
function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const dataItem = document.createElement('div');
        dataItem.className = 'data-item';
        dataItem.innerHTML = `
        `;
        dataContainer.appendChild(dataItem);
    });
}

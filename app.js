/* Global Variables */

let baseURL ='http://api.openweathermap.org/data/2.5/weather?';

// Personal API Key for OpenWeatherMap API
let apiKey = '26a266564be9e4c420e48fc2a76ce2ec';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
        const newZip =  document.getElementById('zip').value;
        const countryCode = 'de';
        /* Function to GET Web API Data*/
        const data = getWeather(baseURL, newZip, countryCode, apiKey) 
        // put data to dictionr
        newData = {'data': data}
        // send dictionary to server
        postData('/weather', newData)
        // get all data from server, call function
        allData = retrieveData('/all')
        // put allData onto page


    }

const getWeather = async (baseURL, newZip, countryCode, apiKey)=>{
//Build url according to API call
    const requestUri = `${baseURL}zip=${newZip},${countryCode}&appid=${apiKey}`
    console.log(requestUri)

    const response = await fetch(requestUri);
    try {
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
}

/* Function to POST data */
const postData = async (url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
    console.log(response)
  }
  
//   // Call Function
//  // postData('/addAnimal', {animal:'lion'});

// Get all data from server
const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
        const allData = await request.json()
        return allData
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };

 // Need a function that put new info on to page
 // Get temperature and city from API response and send it to my server 
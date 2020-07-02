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
    getWeather(baseURL, newZip, countryCode, apiKey)
     
    }
    const getWeather = async (baseURL, newZip, countryCode, apiKey)=>{

        const requestUri = `${baseURL}zip=${newZip},${countryCode}&appid=${apiKey}`
        console.log(requestUri)
    
      const response = await fetch(requestUri);
      try {
    
        const data = await response.json();
        console.log(data)
        return data;
      }  catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }

// /* Function to POST data */
// const postData = async ( url = '', data = {})=>{
//     console.log(data)
//       const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(weatherData), // body data type must match "Content-Type" header        
//     });
  
//       try {
//         const newData = await response.json();
//         // console.log(newData);
//         return newData
//       }catch(error) {
//       console.log("error", error);
//       // appropriately handle the error
//       }
//   }
  
//   // Call Function
//  // postData('/addAnimal', {animal:'lion'});
  
// // Async GET
// const retrieveData = async (url='') =>{ 
//     const request = await fetch(url);
//     try {
//     // Transform into JSON
//     const allData = await request.json()
//     }
//     catch(error) {
//       console.log("error", error);
//       // appropriately handle the error
//     }
//   };
  
// // Chain your async functions to post an animal then GET the resulting data
// /* Function to GET Project Data */
// function postGet(){
//     postData('/animal', {fav:'lion'})
//       .then(function(data){
//         retrieveData('/all')
//       })
//   }
//   // Call the chained function
//   postGet()
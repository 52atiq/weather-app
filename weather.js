
const submitBtn = () =>{ 
    const inputField = document.getElementById('inputField').value;
   inputField.value=''
console.log(inputField);

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputField+'&appid=fb80d07b05f181bb788b9dcdc5146812')
.then(res => res.json())
.then(data => displayDetailsWeather(data))

.catch(res => alert('please type right city name'))
}

const displayDetailsWeather = (data) =>{
    console.log(data)
    const  detailsWeather = document.getElementById('details-weather')
    detailsWeather.value =''
    const div = document.createElement('div');
    div.classList.add('car')
    div.innerHTML = `
         <h2> City Name: ${data.name}</h2>
         <h1> Temperature: ${(data.main.temp -273.15).toFixed(2)}&deg;c  </h1>
          <h3> Country Name: ${data.sys.country} </h3>
          <h3> Main: ${data.weather[0].main} </h3>
          <h3> Description: ${data.weather[0].description} </h3>

    
         <h4> ID: ${data.id}<h4>
  
    `
    detailsWeather.appendChild(div);
   
}


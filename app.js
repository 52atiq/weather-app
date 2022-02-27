
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function() {
const inputField = document.getElementById('input-field').value;
console.log(inputField);


fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputField+'&appid=fb80d07b05f181bb788b9dcdc5146812')

.then(res => res.json())
.then( data =>  {
    const cityName = data.name;
    const tem = data.main.temp;
    const temp = tem - 273.15 ;
    const description = data.weather[0].description;
    

    document.getElementById('city').innerText =cityName;    
    document.getElementById('temp').innerText =temp .toFixed(2);    
    document.getElementById('des').innerText = description;    
  

})
   .catch(res => alert('please type right city name'))
})

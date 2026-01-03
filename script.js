function getweather(){
    let city = document.getElementById("city").value.trim();
    if(!city){
        console.log("Please enter a city name!");
       alert("Please enter a city name!");
       return;
    }

   let apikey = "645061461ceb4fcaa3553633260301";
   let URL = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;


   fetch(URL)
      .then(response => response.json())
      .then(data => {
        const cityBox = document.querySelector(".output");
        if(data.response == "False"){
            alert("weather not found");
            cityBox.innerHTML = "";

        }else{
            cityBox.innerHTML = `
            <h2> ${data.current.temp_c}°C</h2>
            <h3>${data.location.name},${data.location.region},${data.location.country}</h3>
            <img src ="https:${data.current.condition.icon}" width = "100px">
            <p>condition :  ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>

             `;
        }

      })
  .catch(error =>{
    console.log("Error:",error);
    alert("Something went wrong,please try again!");
  });

}
document.querySelector(".input-box button").addEventListener("click",getweather);
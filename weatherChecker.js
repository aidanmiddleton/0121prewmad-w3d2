let isRaining = false;
let sky = "cloudy" // "cloudy"


if (isRaining && sky === "cloudy") {

    console.log("bring an umbrella");

} else if (!isRaining && sky === "clear") {

    console.log("bring a hat");

} else if (!isRaining && sky === "cloudy") {

    console.log("You might want an umbrella");

}
 


// if it is raining and cloudy console.log("Bring an umbrella") 
// if it is not raining and the sky is clear, console.log("bring a hat")
// if the sky is cloudy but it is not raining ("You might want the umbrella")
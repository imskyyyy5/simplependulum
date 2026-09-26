const lengthSlider = document.getElementById("length")
const lengthValue = document.getElementById("lengthValue")
lengthSlider.addEventListener("input",function()
{
    lengthValue.textContent = lengthSlider.value + "m";
} )

const string = document.querySelector(".string");
const bob= document.querySelector(".bob");
const pendulum = document.querySelector(".pendulum")
const period = document.getElementById("period");
lengthSlider.addEventListener("input",function() {
    let length = lengthSlider.value;
    let pixels= length * 100;
    string.style.height = pixels + "px";
    bob.style.top = (30+pixels) + "px";
    let gravity = 9.8;
    let timePeriod = 2 * Math.PI * Math.sqrt(length/gravity);
    period.textContent = "Time Period: " + timePeriod.toFixed(2)+ "s";

}

);

let angle = 0;
let direction =1;
const pauseButton = document.getElementById("pauseButton");
let paused = false;
function animate()
{
    if(!paused) 
    {

    
        angle += 0.02 * direction;
        if(angle>0.5)
        {
            direction = -1;
        }
        if(angle < -0.5)
        {
            direction = 1;

        }

        pendulum.style.transform = `rotate(${angle}rad)`;
    }
    requestAnimationFrame(animate);
}
animate();

pauseButton.addEventListener("click",function(){
paused = !paused;
if(paused)
{
    pauseButton.textContent = "Resume";

}
else {
    pauseButton.textContent= "Pause";
}
});




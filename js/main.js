function slider(mySlider, sliderValue){
  valPercent = (mySlider.value / mySlider.max)*100;
  mySlider.style.background = `linear-gradient(to right, #3264fe ${valPercent}%, #d5d5d5 ${valPercent}%)`;
  sliderValue.textContent = mySlider.value;
}

const mySlider_1 = document.getElementById("my-slider-1");
const sliderValue_1 = document.getElementById("slider-value-1");
slider(mySlider_1, sliderValue_1);

const mySlider_2 = document.getElementById("my-slider-2");
const sliderValue_2 = document.getElementById("slider-value-2");
slider(mySlider_2, sliderValue_2);

const mySlider_3 = document.getElementById("my-slider-3");
const sliderValue_3 = document.getElementById("slider-value-3");
slider(mySlider_3, sliderValue_3);
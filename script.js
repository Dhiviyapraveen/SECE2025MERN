slider.oninput = changeOpacity;

function changeOpacity(){
    image.style.opacity = this.value / 100;
}
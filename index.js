function accept(){
    document.getElementById("text").innerHTML = "Yaay!!!! Lesssgoo 😍";
}
const button = document.getElementById('No');

button.addEventListener('mouseover', () => {
  const newX = Math.random() * (window.innerWidth - button.offsetWidth);
  const newY = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.left = newX +"px";
  button.style.top = newY+ "px";
});


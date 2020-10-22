const images = document.querySelectorAll("img");
const span = document.querySelector("span");
const playButton = document.querySelector("button");
const randomNumb = [];

for(let i = 0; i<images.length; i++){
  randomNumb[i] = generateRandomNumb();

  images[i].src = `ressources/images/dice${randomNumb[i]}.png`;

  if(i===1){
    if(randomNumb[0] > randomNumb[i]){
      span.innerHTML = "1";
    }else if(randomNumb[0] < randomNumb[i]){
      span.innerHTML = "2";
    }else{
      span.innerHTML = "1 and 2";
    }
  }
}

function generateRandomNumb(){
  return Math.floor(Math.random()*6)+1;
}

function reloadPage(){
  location.reload();
}
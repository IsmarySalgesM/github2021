//randomuser.me/api/
window.onload = function () {
  init(false);
};

function init(gender) {
  let apiUser = "https://randomuser.me/api/?results=22";
  fetch(apiUser)
    .then((response) => response.json())
    .then((data) => printUser(data.results, gender));
}

document
  .querySelectorAll(".item-home,.item-female,.item-male")
  .forEach((el) => {
    el.addEventListener("click", function (e) {
        clear();
      let gender = e.target.className.split("-")[1];
      init(gender);
    });
  });


function printUser(data, gender) {
  let container = document.getElementById("container-user");
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (gender == element.gender || gender == false || gender == "home") {
      document.getElementById("load").innerHTML = "";
      container.innerHTML += `<div class="content">
       <div class="img-user">
       <img class="photo-user"src=${element.picture.thumbnail}  alt="${element.name.first}"/>
       </div>
       <div class="email-user">${element.email}</div>
       <div class="name-user">${element.name.first} </div>
       </div>
       `;
    }
  }
}

function clear() {
  document.getElementById("container-user").innerHTML = "";
  document.getElementById("load").innerHTML = "<h2 class='load'>Cargando...</h2>";
}



let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      height : '100%',
      width : '100%',
      videoId : 'fOW8Y09GVek', 
      playerlets : { 
          'autoplay' : 1, 
          'controls' : 0,
          'autohide' : 1, 
          'showinfo' : 0, 
          'modestbranding' : 0, 
          'rel' : 0 
      },
      events : {
          'onReady': onPlayerReady, 
          'onStateChange': onPlayerStateChange 
      }
  });
}

function onPlayerReady(event) {
  event.target.playVideo()
}

let done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
      done = true;
  }
  if (event.data == YT.PlayerState.PAUSED) {
  }
}

function playvideo(){
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}
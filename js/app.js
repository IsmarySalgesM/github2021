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

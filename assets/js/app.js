let active = 1;

let groupOne = [
  { name: "Fernando", color: "#FF7474" },
  { name: "Mariana", color: "#FD74FF" },
  { name: "João", color: "#74B2FF" },
  { name: "Rafaela", color: "#74FFD0" },
  { name: "Marcelo", color: "#FAFF74" },
  { name: "Guilherme", color: "#84FF74" },
  { name: "Joana", color: "#9C9C9C" },
];

let groupTwo = [
  { name: "Isadora", color: "#FD74FF" },
  { name: "Rafael", color: "#FAFF74" },
  { name: "Ana", color: "#74FFD0" },
  { name: "Johan", color: "#84FF74" },
  { name: "Claudio", color: "#74B2FF" },
  { name: "Henrique", color: "#9C9C9C" },
  { name: "Bianca", color: "#FF7474" },
];

let groupThree = [
  { name: "Lucas", color: "#9C9C9C" },
  { name: "Renata", color: "#FD74FF" },
  { name: "Marcel", color: "#84FF74" },
  { name: "Tharcus", color: "#74FFD0" },
  { name: "José", color: "#74B2FF" },
  { name: "Luciano", color: "#FAFF74" },
  { name: "Bruno", color: "#FF7474" },
];

const buttonOne = document.getElementById("group-one");
const buttonTwo = document.getElementById("group-two");
const buttonThree = document.getElementById("group-three");

const buttonName = document.getElementById("name");
const buttonColor = document.getElementById("color");
const buttonShuffle = document.getElementById("reset");

let ulOne = document.getElementById("color-list");

function populate(group) {
  ulOne.innerHTML = "";
  group.forEach(function (item) {
    let li = document.createElement("li");
    li.innerHTML = `<li style="background-color:${item.color}">${item.name}</li>`;
    ulOne.appendChild(li);
  });
}

function orderAlpha(active) {
  ulOne.innerHTML = "";
  if (active === 1) {
    groupOne.sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" })
    );
    populate(groupOne);
  } else if (active === 2) {
    groupTwo.sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" })
    );
    populate(groupTwo);
  } else {
    groupThree.sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" })
    );
    populate(groupThree);
  }
}

function orderColor(active) {
  ulOne.innerHTML = "";
  if (active === 1) {
    groupOne.sort((a, b) =>
      a.color.localeCompare(b.color, "en", { sensitivity: "base" })
    );
    populate(groupOne);
  } else if (active === 2) {
    groupTwo.sort((a, b) =>
      a.color.localeCompare(b.color, "en", { sensitivity: "base" })
    );
    populate(groupTwo);
  } else {
    groupThree.sort((a, b) =>
      a.color.localeCompare(b.color, "en", { sensitivity: "base" })
    );
    populate(groupThree);
  }
}

function shuffle(array) {
  var i = array.length,
    temp,
    aux;

  while (0 !== i) {
    aux = Math.floor(Math.random() * i);
    i -= 1;

    temp = array[i];
    array[i] = array[aux];
    array[aux] = temp;
  }

  return array;
}

function resetGroup(active) {
  ulOne.innerHTML = "";
  if (active === 1) {
    populate(shuffle(groupOne));
  } else if (active === 2) {
    populate(shuffle(groupTwo));
  } else {
    populate(shuffle(groupThree));
  }
}

buttonOne.onclick = function () {
  populate(groupOne);
  active = 1;
};

buttonTwo.onclick = function () {
  populate(groupTwo);
  active = 2;
};

buttonThree.onclick = function () {
  populate(groupThree);
  active = 3;
};

buttonName.onclick = function () {
  orderAlpha(active);
};

buttonColor.onclick = function () {
  orderColor(active);
};

buttonShuffle.onclick = function () {
  resetGroup(active);
};

(function () {
  populate(groupOne);
})();

// KF Panda Search

// Search btn
document.getElementById("btn").addEventListener("click", search);
let charName = document.getElementById("char-name");
let charQuote = document.getElementById("char-quote");
let charImg = document.getElementById("char-img");

function search() {
  //input
  let name = document.getElementById("char").value.toLowerCase();

  //if statement
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charName.innerHTML = "Po";
    charQuote.innerHTML = "Buddy, I an the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name === "tigress") {
    charName.innerHTML = "Tigress";
    charQuote.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charName.innerHTML = "Mantis";
    charQuote.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charName.innerHTML = "Monkey";
    charQuote.innerHTML = "We should hang out!";
    charImg.src = "img/monkey.png";
  } else if (name === "boss-wolf" || name === "boss wolf") {
    charName.innerHTML = "Boss-Wolf";
    charQuote.innerHTML = "The panda? That's impossible!";
    charImg.src = "img/boss-wolf.png";
  } else if (name === "crane") {
    charName.innerHTML = "Crane";
    charQuote.innerHTML =
      "Stop flapping your mouth and start flapping your wings.";
    charImg.src = "img/crane.png";
  } else if (name === "croc") {
    charName.innerHTML = "Croc";
    charQuote.innerHTML = "Vengeance is served!";
    charImg.src = "img/croc.png";
  } else if (name === "mr.ping" || name === "mr ping") {
    charName.innerHTML = "Mr.Ping";
    charQuote.innerHTML = "... Noodles.";
    charImg.src = "img/mr-ping.png";
  } else if (name === "kai") {
    charName.innerHTML = "Kai";
    charQuote.innerHTML = "Kai has RETURNED!";
    charImg.src = "img/kai.png";
  } else if (name === "oogway") {
    charName.innerHTML = "Oogway";
    charQuote.innerHTML = "Remember the path.";
    charImg.src = "img/oogway.png";
  } else if (name === "shen") {
    charName.innerHTML = "Shen";
    charQuote.innerHTML =
      "My father's throne. He used to let me play here at his side, promising one day this throne would be mine...";
    charImg.src = "img/shen.png";
  } else if (name === "shifu") {
    charName.innerHTML = "Shifu";
    charQuote.innerHTML = "Inner peace... Inner peace...";
    charImg.src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charName.innerHTML = "Soothsayer";
    charQuote.innerHTML = "I see... I see... I see pain.";
    charImg.src = "img/soothsayer.png";
  } else if (name === "storming ox") {
    charName.innerHTML = "Storming Ox";
    charQuote.innerHTML = "Then the weapon would kill... everyone!";
    charImg.src = "img/storming-ox.png";
  } else if (name === "tai lung" || name === "tai-lung") {
    charName.innerHTML = "Tai Lung";
    charQuote.innerHTML = "I don't want your apology. I want my scroll!";
    charImg.src = "img/tai-lung.png";
  } else if (name === "viper") {
    charName.innerHTML = "Viper";
    charQuote.innerHTML =
      "They must be close. I can feel a kung fu chill riding up my spine.";
    charImg.src = "img/viper.png";
  } else {
    charName.innerHTML = "???";
    charQuote.innerHTML = "-----------";
    charImg.src = "img/question-mark.png";
  }
}

// Theme btn
document.getElementById("theme-btn").addEventListener("click", theme);

function theme() {
  let themeType = document.getElementById("theme-in").value.toLowerCase();
  let rand = Math.floor(Math.random() * 256);
  let rand2 = Math.floor(Math.random() * 256);
  let rand3 = Math.floor(Math.random() * 256);
  let body = document.getElementById("body");
  let div = document.getElementById("div");
  let themebtn = document.getElementById("theme-btn");
  let btn = document.getElementById("btn");

  if (themeType === "dark" || themeType === "black") {
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    body.style.color = "white";
    div.style.backgroundColor = "black";
    div.style.color = "white";
    themebtn.style.backgroundColor = "black";
    themebtn.style.color = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  } else if (themeType === "light" || themeType === "white") {
    body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    body.style.color = "black";
    div.style.backgroundColor = "white";
    div.style.color = "black";
    themebtn.style.backgroundColor = "white";
    themebtn.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else if (themeType === "disco") {
    body.style.backgroundColor = `rgba(${rand}, ${rand2}, ${rand}, 0.7)`;
    body.style.color = `rgb(${rand3}, ${rand2}, ${rand})`;
    div.style.backgroundColor = `rgba(${rand2}, ${rand}, ${rand3}, 0.7)`;
    div.style.color = `rgb(${rand3}, ${rand}, ${rand2})`;
    themebtn.style.backgroundColor = `rgb(${rand2}, ${rand}, ${rand2})`;
    themebtn.style.color = `rgb(${rand}, ${rand3}, ${rand3})`;
    btn.style.backgroundColor = `rgb(${rand3}, ${rand2}, ${rand3})`;
    btn.style.color = `rgb(${rand3}, ${rand}, ${rand2})`;
  } else if (themeType === "random") {
    body.style.backgroundColor = `rgba(${rand}, ${rand2}, ${rand3}, 0.7)`;
    body.style.color = "black";
    div.style.backgroundColor = `rgba(${rand}, ${rand2}, ${rand3}, 0.7)`;
    div.style.color = "black";
    themebtn.style.backgroundColor = `rgb(${rand}, ${rand2}, ${rand3})`;
    themebtn.style.color = "black";
    btn.style.backgroundColor = `rgb(${rand}, ${rand2}, ${rand3})`;
    btn.style.color = "black";
  } else if (themeType === "normal" || themeType === "original") {
    body.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    body.style.color = "black";
    div.style.backgroundColor = "rgba(72, 116, 63, 0.7)";
    div.style.color = "white";
    themebtn.style.backgroundColor = "rgb(72, 116, 63)";
    themebtn.style.color = "white";
    btn.style.backgroundColor = "rgb(72, 116, 63)";
    btn.style.color = "white";
  }
}

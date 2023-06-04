const container = document.querySelector(".blogs-containers");

for (var i = 2; i <= 7; i++) {
  const newDiv = document.createElement("DIV");
  newDiv.className = "blogs-boxs";
  const iImg = document.createElement("I");
  iImg.className = "bx bx-code-alt";
  const newH3 = document.createElement("H3");
  newH3.innerText = "Week " + i;
  const newP = document.createElement("P");
  const newBtn = document.createElement("button");
  newBtn.className = "btn";
  newBtn.innerText = "Read More";
  container.appendChild(newDiv);
  newDiv.appendChild(iImg);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);
  newDiv.appendChild(newBtn);
}

const containers = document.querySelector("#container");

for (var i = 9; i <= 13; i++) {
  const newDiv = document.createElement("DIV");
  newDiv.className = "blogs-boxs";
  const iImg = document.createElement("I");
  iImg.className = "bx bx-code-alt";
  const newH3 = document.createElement("H3");
  newH3.innerText = "Week " + i;
  const newP = document.createElement("P");
  const newBtn = document.createElement("button");
  newBtn.className = "btn";
  newBtn.innerText = "Read More";
  containers.appendChild(newDiv);
  newDiv.appendChild(iImg);
  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);
  newDiv.appendChild(newBtn);
}

var block1 = document.getElementsByTagName("P");

block1[0].textContent =
  "This was my first-time using GitHub and setting it up. I didn’t" +
  "understand how it works but after going through the tutorial and" +
  "YouTube videos, I think I understand how to use GitHub to save my" +
  "progress and have it there if anything were to go wrong, as it is" +
  "also a way to share and view code with multiple people...";

block1[1].textContent =
  "When starting to learn about HTML I was excited as I love coding and" +
  "learning how to use different languages as it is my first-time" +
  "coding with HTML. With any new language is it kind of easy to start" +
  "to learn as almost all coding languages are very similar wtherefore"+
  "it was simple enough to get the hang of it quickly..."

block1[2].textContent =
  "It is very exciting to learn CSS and to see how goes in hand with" +
  "HTML to create and design a visually aesthetic website. The lectures" +
  "helped me engage with the content in a way that allow me to code" +
  "alongside to effectively understand the workwithout losing track of"+
  "what is happening.The lecture showed me how... "

block1[3].textContent =
  "Continuing with my website I have seen how important it is to create wireframes."+
  "Otherwise, I'd have to build my website just out of my head and this does not work out as there"+
  "are multiple ways in which the site can look and it is hard to choose which way to do it."+
  "I started off drawing my wireframes..."

block1[4].textContent = "Nothing was done during this WEEK..."

block1[5].textContent = "Nothing was done during this WEEK..."

block1[6].textContent = "During this week, I was focusing on the small aspect of my website..."

block1[7].textContent = "The Lack of Scalability in my website was not working as how I thought it was, when I made the screen smaller with the development tools, the..."

block1[8].textContent ="Since I was not happy with my assignment 1 website, I decided to restart my website. This week start by looking into other websites "+
"and looking at ideas..."

block1[9].textContent = "This week I started coding my new designs for each page, mainly the home page as a starting point. My main goal for this week is in completing..."

block1[10].textContent = "This week I tried implementing JavaScript within my blog section to reduce the number of divs on the HTML page. For this, I created a for like "+
"which creates a divs..."

block1[11].textContent = "This week I want to look into different ways in which I can reduce image sizes for that it is easier for in to load on my website, as for my assignment "+
"This week I want to look into different ways in which I can reduce image sizes for that it is easier for in to load on my website, as for my assignment..."

block1[12].textContent ="For this week I am trying to add all my weekly blogs and texts to my website. As I want to try and find different ways in which to put my text in my documents without having to use multiple HTML pages. "+
"As in my last assignment..."

var link = document.getElementsByTagName("button")
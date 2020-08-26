//W10A Assignment

var firstPTag = document.querySelector("body p");
firstPTag.style.color = "red";


var allPTags = document.querySelectorAll("body p");
for(var index = 0; index < allPTags.length; index++) {
    allPTags[index].style.color = "blue";
}

var newElement = document.createElement('p');
var parentElement = document.getElementById('parent');
parentElement.append(newElement);
newElement.innerHTML = "I love synths!"


var infoText = document.getElementsByClassName('info-text');
for(var index = 0; index < infoText.length; index++) {
    infoText[index].style.color = "blue";
}

var headerText = document.getElementsByTagName('h1');
for(var index = 0; index < headerText.length; index++) {
    headerText[index].style.color = "orange";
}
var newElement = document.createElement('p');
var parentElement2 = document.getElementById('parent');
parentElement2.append(newElement);
newElement.innerHTML ="This is a new synth!";


var node = document.createElement("H1");
var moog = document.createTextNode("Nice Moog Synth bro!");
node.appendChild(moog);
document.body.appendChild(node);

node.removeChild(moog);


newElement.classList.add("style");

newElement.classList.remove("style");

newElement.classList.toggle('style');










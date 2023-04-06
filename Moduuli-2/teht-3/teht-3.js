
let namesOfDogs = [];
for(let i = 0; i < 6; i++) {
  namesOfDogs.push(prompt('Enter the name of the dog.'));
  }

namesOfDogs.sort();
namesOfDogs.reverse();

let html = "";
for (let i = 0; i < namesOfDogs.length; i++) {
  html += "<li>" + namesOfDogs[i] + "</li>";
}

document.getElementById("dogList").innerHTML = html;

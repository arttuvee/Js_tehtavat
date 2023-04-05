

let numberOfParticipants = prompt("Enter the number of participants.");
let namesOfParticipants = [];
for(let i = 0; i < numberOfParticipants; i++) {
  namesOfParticipants.push(prompt('Enter the name of the participant.'));
  }
namesOfParticipants.sort();


let html = "";
for (let i = 0; i < namesOfParticipants.length; i++) {
  html += "<li>" + namesOfParticipants[i] + "</li>";
}

document.getElementById("participantList").innerHTML = html;

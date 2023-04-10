function rollDice() {
  let roll6 = false;
  let rollList = [];
  while (!roll6) {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
    rollList.push(roll)
    if (roll === 6) (roll6 = true);

    let html = '';
    for (let i = 0; i < rollList.length; i++) {
      html += '<li>' + rollList[i] + '</li>';
    }

    document.getElementById('rollList').innerHTML = html;
  }
}
rollDice()
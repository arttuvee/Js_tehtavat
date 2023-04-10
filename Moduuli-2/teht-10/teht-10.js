let candidates = []

function startVote() {
  const numOfCandidates = +prompt('Enter the number of canditates.')
  for (let i = 1; i <= numOfCandidates; i++) {
    let newName = prompt(`Enter the name of candidate number ${i}`)
    candidates.push({'name': newName, 'votes': 0})
  }
}

function vote(candidates) {
  const numOfVoters = +prompt('Enter the number of voters.')
  for (let i = 1; i <= numOfVoters; i++) {
    let voteSelect = prompt(
        'Enter the name of the candidate you want to vote for.')
    candidates.forEach(candidate => {
      if (candidate.name.toLowerCase() === voteSelect.toLowerCase()) {
        candidate.votes++
      }
    })
  }

  candidates.sort((a, b) => b.votes - a.votes);
  console.log(
      `The winner is ${candidates[0].name} with ${candidates[0].votes} votes!`)
  console.log('results:')
  candidates.forEach((cand) => {
    console.log(`${cand.name}: ${cand.votes} votes`)
  })
}

startVote()
vote(candidates)
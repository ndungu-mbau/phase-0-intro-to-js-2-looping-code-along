// Code your solutions in this file
function writeCards(names, desc){
  // return names.map(name => {
  //   return `Thank you, ${name}, for the wonderful ${desc} gift!`
  // })

  const messages = []

  for(let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${desc} gift!`)
  }

  return messages
}

function countDown(num) {
  for(let i = num; i >= 0; i--){
    console.log(i)
  }
}
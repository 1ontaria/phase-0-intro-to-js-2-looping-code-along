function writeCards(name, event) {
  let message = [];
  for (let i = 0; i < name.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
  }
  return message;
}

function countDown() {
  let count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let j = 0;
  while (j < count.length) {
    console.log(count[j++]);
  }
}

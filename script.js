// Good Luck 💪🏾


function pluralizing(words) {
  const pluralForms = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

 
    {
      pluralForms.push(word + "s");
    }
  }

  return pluralForms;
}

const singular = ["cat", "cat", "dog", "mouse", ];
const plural = pluralizing(singular);
console.log(plural);
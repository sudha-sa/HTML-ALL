let myjokes = 
[
    {
      "joke": "What's the difference between unlawful and illegal? Unlawful is against the law and illegal is a sick bird."
    },
    {
      "joke": "Why do ghosts carry tissues? Because they have BOOOOgers."
    },
    {
      "joke": "Why couldn't Bach pay for his dinner? Because he was Baroque."
    },
    {
      "joke": "What's the best way to get a hold of Vin Diesel? IM Groot."
    },
    {
      "joke": "Why do Gastroenterologists have such a passion for their job? Because they find the components of one's stomach very intestine."
    },
    {
      "joke": "How to create a clean joke Step 1. Find a dirty joke Step 2. Clean it"
    },
    {
      "joke": "College My son took Rock Climbing in college but he had to drop the class. He couldn't find any \"Cliff Notes.\""
    },
    {
      "joke": "Did you hear about NASA finding bones on the moon? Yeah, the cow didn't make it."
    },
    {
      "joke": "What do you call a sheep with no legs? A cloud."
    },
    {
      "joke": "I went to a shredded cheese convention the other day... it was grate"
    }
  ]

let index = Math.floor(Math.random() * (myjokes.length - 1));
console.log(index)
joke.innerHTML = myjokes[index].joke
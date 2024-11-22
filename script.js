const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotesDay = [
"The way to get started is to quit talking and begin doing. – Walt Disney",
"Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill" ,
"Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
"Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
"Opportunities don't happen. You create them. – Chris Grosser",
"Dream big and dare to fail. – Norman Vaughan",
"You miss 100% of the shots you don’t take. – Wayne Gretzky",
"The best revenge is massive success. – Frank Sinatra",
"I never dreamed about success, I worked for it. – Estée Lauder",
"Do what you can, with what you have, where you are. – Theodore Roosevelt",
"Leadership is not about being in charge. It is about taking care of those in your charge. – Simon Sinek",
"Be the change that you wish to see in the world. – Mahatma Gandhi",
"If your actions inspire others to dream more, learn more, do more, and become more, you are a leader. – John Quincy Adams",
"A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
"Do not follow where the path may lead. Go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
"Innovation distinguishes between a leader and a follower. – Steve Jobs",
"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
"The art of communication is the language of leadership. – James Humes",
"People don’t care how much you know until they know how much you care. – Theodore Roosevelt",
"In matters of style, swim with the current; in matters of principle, stand like a rock. – Thomas Jefferson",
"Do not judge me by my success, judge me by how many times I fell down and got back up again. – Nelson Mandela",
"The only way to do great work is to love what you do. – Steve Jobs",
"Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
"What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
"Fall seven times and stand up eight. – Japanese Proverb",
"The wound is the place where the light enters you. – Rumi",
"Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi",
"It always seems impossible until it’s done. – Nelson Mandela",
"Turn your wounds into wisdom. – Oprah Winfrey",
"Life isn’t about waiting for the storm to pass but learning to dance in the rain. – Vivian Greene",
"Creativity is intelligence having fun. – Albert Einstein",
"Every artist was first an amateur. – Ralph Waldo Emerson",
"Imagination is more important than knowledge. – Albert Einstein",
"Do one thing every day that scares you. – Eleanor Roosevelt",
"You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
"The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
"Logic will get you from A to B. Imagination will take you everywhere. – Albert Einstein",
"Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
"Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
"I am always doing that which I cannot do, in order that I may learn how to do it. – Pablo Picasso",
"Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
"In the middle of every difficulty lies opportunity. – Albert Einstein",
"Happiness depends upon ourselves. – Aristotle",
"Do what you feel in your heart to be right – for you’ll be criticized anyway. – Eleanor Roosevelt",
"Life is what happens when you’re busy making other plans. – John Lennon",
"Happiness is when what you think, what you say, and what you do are in harmony. – Mahatma Gandhi",
"Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
"Life isn’t about finding yourself. It’s about creating yourself. – George Bernard Shaw",
"We do not remember days, we remember moments. – Cesare Pavese",
"The purpose of our lives is to be happy. – Dalai Lama",
{ type: "image", content: "quote.png"}
]

button.addEventListener("click", () => {
    let randomQuote = quotesDay[Math.floor(Math.random() * quotesDay.length)];
    console.log(randomQuote);
    par.computedStyleMap.display = "block";
    par.textContent = randomQuote;
    

})

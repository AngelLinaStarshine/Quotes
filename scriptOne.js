
const buttonOne = document.querySelector("#btnOne");
const parOne = document.querySelector("#parOne");

const quotesWoman = [
"I am no bird, and no net ensnares me; I am a free human being with an independent will. – Charlotte Brontë",
"The most difficult thing is the decision to act; the rest is merely tenacity. – Amelia Earhart",
"Courage is like a muscle. We strengthen it by use. – Ruth Gordon",
"I never dreamed about success. I worked for it. – Estée Lauder",
"A woman with a voice is, by definition, a strong woman. – Melinda Gates",
"Power’s not given to you. You have to take it. – Beyoncé",
"The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
"One is not born, but rather becomes, a woman. – Simone de Beauvoir",
"Above all, be the heroine of your life, not the victim. – Nora Ephron",
"We realize the importance of our voices only when we are silenced. – Malala Yousafzai",
"I am deliberate and afraid of nothing. – Audre Lorde",
"Never doubt that a small group of thoughtful, committed citizens can change the world. – Margaret Mead",
"You don’t make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas. – Shirley Chisholm",
"If you obey all the rules, you miss all the fun. – Katharine Hepburn",
"I alone cannot change the world, but I can cast a stone across the water to create many ripples. – Mother Teresa",
"I raise up my voice—not so I can shout, but so that those without a voice can be heard. – Malala Yousafzai",
"To know what is right and not do it is the worst cowardice. – Confucius (popularized in activism by women leaders)",
"You have to have confidence in your ability, and then be tough enough to follow through. – Rosalynn Carter",
"I will not be triumphed over. – Cleopatra",
"Do one thing every day that scares you. – Eleanor Roosevelt",
"When you know better, you do better. – Maya Angelou",
"It is not easy to be a pioneer—but oh, it is fascinating! – Elizabeth Blackwell",
"The power to question is the basis of all human progress. – Indira Gandhi",
"The most effective way to do it, is to do it. – Amelia Earhart",
"I am not afraid of storms, for I am learning how to sail my ship. – Louisa May Alcott",
"The best protection any woman can have is courage. – Elizabeth Cady Stanton",
"Every woman’s success should be an inspiration to another. We’re strongest when we cheer each other on. – Serena Williams",
"The mind is not a vessel to be filled but a fire to be kindled. – Plutarch (quoted by many female educators and philosophers)",
"One child, one teacher, one book, one pen can change the world. – Malala Yousafzai",
"Education is the most powerful weapon which you can use to change the world. – Nelson Mandela (championed by women like Malala and others)",
"Don’t let anyone rob you of your imagination, your creativity, or your curiosity. – Mae Jemison",
"What you do makes a difference, and you have to decide what kind of difference you want to make. – Jane Goodall",
"If they don’t give you a seat at the table, bring a folding chair. – Shirley Chisholm",
"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence. – Helen Keller",
"No one can make you feel inferior without your consent. – Eleanor Roosevelt",
"Life shrinks or expands in proportion to one’s courage. – Anaïs Nin",
"You can waste your lives drawing lines. Or you can live your life crossing them. – Shonda Rhimes",
"I am my own muse. I am the subject I know best. The subject I want to know better. – Frida Kahlo",
"If I stop to kick every barking dog, I am not going to get where I’m going. – Jackie Joyner-Kersee",
"Creativity takes courage. – Henri Matisse (celebrated by female artists like Georgia O’Keeffe and others)",
"You may encounter many defeats, but you must not be defeated. – Maya Angelou",
"I have learned over the years that when one’s mind is made up, this diminishes fear. – Rosa Parks",
"I am stronger than fear. – Malala Yousafzai",
"Success is getting what you want. Happiness is wanting what you get. – Ingrid Bergman",
"I have always been delighted at the prospect of a new day, a fresh try, one more start, with perhaps a bit of magic waiting somewhere behind the morning. – J.B. Priestley",
"Success breeds confidence. – Beryl Markham",
"You don’t have to be perfect, just be better than you were yesterday. – Jenny Han",
"She believed she could, so she did. – R.S. Grey",
"I am not afraid of my truth anymore, and I will not omit pieces of myself to make you comfortable. – Alex Elle",
"Storms make trees take deeper roots. – Dolly Parton"
]

buttonOne.addEventListener("click", () => {
    let randomQuote = quotesWoman[Math.floor(Math.random() * quotesWoman.length)];
    console.log(randomQuote);
    parOne.textContent = randomQuote;

})
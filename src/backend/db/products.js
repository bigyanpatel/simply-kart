import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Learning How To Fly - Life Lessons for the Youth",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
    description: `Dr A.P.J. Abdul Kalam had a great belief in the power of the youth. He met over 21 million children and young people in India and outside and spoke to them about the power of knowledge, ambition, moral behaviour and the need to bring about change in society.`,
    author: "A.P.J abdual kalam",
    sellPrice: "129",
    costPrice: "197",
    discount: "33",
    ratings: "4.6",
    categoryName: "Fiction",
  },
  {
    _id: uuid(),
    title: "You are the Best Wife",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/jyeq64w0/book/5/4/0/you-are-the-best-wife-original-imafgkyugczdayt8.jpeg?q=70",
    description: `Ajay believes in living for himself; Bhavna teaches him to live for others. Ajay is a planner for life; Bhavna makes him live in every moment. You are the Best Wife is a story of two people with contradictory ideologies who fall in love. It changes them for good. `,
    author: "Ajay K Pandey",
    sellPrice: "125",
    costPrice: "175",
    discount: "28%",
    ratings: "4.5",
    categoryName: "Family-and-relationShip",
  },
  {
    _id: uuid(),
    title: "How to Win Friends and Influence People",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/krxtrww0/book/g/8/1/how-to-win-friends-and-influence-people-original-imag5m73dmc8bzhd.jpeg?q=70",
    description: `How to Win Friends & Influence People is a classic self-help book by Dale Carnegie. Summary of the Book Dale Carnegie discusses how to increase improve one’s popularity by winning them over through simple changes in one’s actions. He teaches readers how to impress people with his world-famous techniques which can help readers learn how to sell ideas and products by controlling their audience’s emotions effectively. `,
    author: "Carnegie Dale",
    costPrice: "90",
    sellPrice: "150",
    discount: "40%",
    ratings: "4.5",
    categoryName: "Family-and-relationship",
  },
  {
    _id: uuid(),
    title: "One Indian Girl",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/ki96c280-0/book/3/p/n/one-indian-girl-original-imafy2zrymfbtygz.jpeg?q=70",
    description: `One Indian Girl is about a girl named Radhika Mehta who is an investment banker at Goldman Sachs. Once a nerd by nature, she is now all set to get hitched to Brijesh Gulati and arrives for her destination wedding in Goa. However, as the D-Day looms closer, she discovers that marrying Gulati is not as easy as it seems. Soon, one by one, things start to get messy and threaten to fall apart? Can Radhika get herself out of this mess or will it be the end of the road for her? Read One Indian Girl and find out.`,
    author: "Chetan Bhagat",
    costPrice: "157",
    sellPrice: "195",
    discount: "19%",
    ratings: "4.3",
    categoryName: "Family-and-relationship",
  },
  {
    _id: uuid(),
    title: "Wake Up, Life is Calling",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/jt7jhjk0/book/6/0/7/wake-up-life-is-calling-original-imafehzjxbac5hsz.jpeg?q=70",
    description: `“Wake Up, Life is Calling” is a sequel to the national bestseller, “Life is What You Make it” by the popular Indian writer, Preeti Shenoy. Ankita, the protagonist of this story, overcomes her troublesome past and starts leading a normal life. She even joins a college to pursue creative writing. With everything falling into place, Ankita doesn’t realize that trouble is slowly creeping back into her life. Will Ankita be able to beat the odds this time?`,
    author: "Shenoy Preeti",
    costPrice: "99",
    sellPrice: "199",
    discount: "50%",
    ratings: "4.5",
    categoryName: "Self-Help",
  },
  // break
  {
    _id: uuid(),
    title: "The Power of Your Subconscious Mind",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/ktn9pjk0/book/m/q/n/the-power-of-your-subconscious-mind-original-imag6xbtcrb2mmrh.jpeg?q=70",
    description: `This book by Dr. Joseph Murphy teaches you to unlock the powers of your subconscious mind. He combines spiritual wisdom with scientific research, and explains how the subconscious mind influences every single thing that you do. From getting rid of bad habits to getting that promotion you want, this book will change your life and open up doors to happiness, success, prosperity and peace.`,
    author: "Murphy Joseph",
    costPrice: "127",
    sellPrice: "275",
    discount: "53%",
    ratings: "4.5",
    categoryName: "Philosophy",
  },
  {
    _id: uuid(),
    title: "The Psychology of Money",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/kjom6q80-0/regionalbooks/o/i/t/the-psychology-of-money-original-imafvb5vbgcczykj.jpeg?q=70",
    description: `Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do.`,
    author: "Housel Morgan",
    costPrice: "216",
    sellPrice: "399",
    discount: "45%",
    ratings: "4.6",
    categoryName: "Money_and_finance",
  },
  {
    _id: uuid(),
    title: "Everything I Never Told You",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/kgzg8sw0/book/8/5/3/everything-i-never-told-you-original-imafx3s2fzftvehp.jpeg?q=70",
    description: `We can live without religion, but we cannot survive without love. Roshan and Soha were not just class-mates and neighbours, but also best friends. They wanted to be together, but the world saw them as a Hindu and a Muslim before everything else. Roshan failed to convince his father and had to let Soha go. He married Manisha with the hope of moving on, and his life unfolded with a new definition of love.`,
    author: "Pandey Ajay K.",
    costPrice: "110",
    sellPrice: "199",
    discount: "44%",
    ratings: "4.5",
    categoryName: "Fiction",
  },
  {
    _id: uuid(),
    title: "The Dhoni Touch",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/kwmfqfk0/book/o/w/l/the-dhoni-touch-original-imag99z3qv8y5z4n.jpeg?q=70",
    description: `Be it his signature helicopter shot or his ever-calm demeanour, Mahendra Singh Dhoni has always found a way to tap into the hearts of his fans. For someone who was training to be a footballer, who could have told that Mahi was going to take the world of cricket by storm. In The Dhoni Touch: Unravelling the Enigma That Is Mahendra Singh Dhoni, Bharat Sundaresan reaches out to some of Mahi’s closest friends to find out how he became the man that he is today. `,
    author: "Sundaresan Bharat",
    costPrice: "171",
    sellPrice: "299",
    discount: "42%",
    ratings: "4.6",
    categoryName: "Non-fiction",
  },
  {
    _id: uuid(),
    title: "Skill It, Kill It",
    imgSrc:
      "https://rukminim2.flixcart.com/image/416/416/kpedle80/book/i/6/o/skill-it-kill-it-original-imag3n7ma5nrqvvw.jpeg?q=70",
    description: `Ever wondered why CEOs, leaders and recruiters talk endlessly about soft skills? Job interviews, promotions, appraisals, teamwork, managing workplace challenges, communication skills and a lot more-soft skills give you a sizeable professional edge to ace all of these. In this book, Ronnie Screwvala shares personal stories and observations from his many failures and few successes to give you an insider's view of the 'invisible' skills, which can cut years off your learning curve. Practical, actionable and peppered with advice from successful leaders, Skill It, Kill It will ensure you're future-proof in these ever-changing times and ready to stand out among your peers. If you are ready to RISE COMMIT LISTEN SACRIFICE and really want it BADLY Then your time is NOW Welcome to #LifeLongLearning An essential career guide on exceling in the corporate world!`,
    author: "Screwvala Ronnie",
    costPrice: "207",
    sellPrice: "299",
    discount: "30%",
    ratings: "4.4",
    categoryName: "Self-help",
  },
];
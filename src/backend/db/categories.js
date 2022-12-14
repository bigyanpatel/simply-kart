import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    imgSrc: "https://n2.sdlcdn.com/imgs/e/h/m/Fiction-0ba2f.jpg",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Non-fiction",
    imgSrc: "https://n2.sdlcdn.com/imgs/e/h/m/NonFiction-3fef2.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Philosophy",
    imgSrc: "https://n4.sdlcdn.com/imgs/e/h/m/philosphy-ed2c5.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Family-relationship",
    imgSrc: "https://n3.sdlcdn.com/imgs/e/h/m/family-fcca1.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Self-help",
    imgSrc: "https://n2.sdlcdn.com/imgs/e/h/m/SelfHelp-eeb2f.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
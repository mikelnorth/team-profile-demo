import headshot from "../assets/images/stock-head.jpeg"

const people = [
  {
    id: 1,
    image: headshot,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta id, voluptatum consectetur, rem obcaecati nulla veniam quasi cupiditate consequatur impedit architecto neque amet magni accusamus ex! Rerum, ipsa quo."
  },
  {
    id: 2,
    image: headshot,
    text: "Beans"
  },
  {
    id: 3,
    image: headshot,
    text: "Bananas"
  }
];

export function getPeople() {
  return people;
}

export function getPerson(id) {
  [2,5,57,645,634,456,74564,5643,5,4].reduce((acc, sum) => {
    acc += sum
  }, 0)
}
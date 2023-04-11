export const horseData = [
  {
    id: 1,
    name: "Reggie",
    breed: "Riding Pony",
    descriptionTitle: "Extremely Flashy Black yearling colt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "10000",
    adTitle: "Extremely Flashy Black yearling colt, with great breeding",
    category: "Horses",
    age: "3 years old",
    colour: "Black",
    height: "15 Hands",
    gender: "Male",
    breed: "Colt",
  },
  {
    id: 2,
    name: "Kayzee",
    breed: "British Warmblood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Male",
    price: "50",
  },
  {
    id: 3,
    name: "Summer Breeze",
    breed: "Cob",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Female",
    price: "9725",
  },
  {
    id: 4,
    name: "Jami",
    breed: "Selle Francais",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Female",
    price: "15123112313",
  },
  {
    id: 5,
    name: "Mountbrown Minstrel",
    breed: "Irish Draught",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Female",
    price: "320",
  },
  {
    id: 6,
    name: "Clay",
    breed: "Cob",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Male",
    price: "13",
  },
  {
    id: 7,
    name: "Veradis",
    breed: "Selle Francais",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Male",
    price: "13",
  },
  {
    id: 8,
    name: "Jammie",
    breed: "Irish Draught",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Male",
    price: "499",
  },
  {
    id: 9,
    name: "Jammie",
    breed: "Irish Draught",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Male",
    price: "233",
  },
  {
    id: 10,
    name: "Roger",
    breed: "British Warmblood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Male",
    price: "1230",
  },
  {
    id: 11,
    name: "Toger",
    breed: "British Warmblood",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gender: "Female",
    price: "3230",
  },
];

const countByKey = (arr, key) => {
  const counts = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i][key];
    counts[value] = counts[value] ? counts[value] + 1 : 1;
  }
  return counts;
};

const result = [];
const counts = countByKey(horseData, "breed");
for (const [key, value] of Object.entries(counts)) {
  result.push({ name: key, count: value });
}
console.log("result", result);

export default result;

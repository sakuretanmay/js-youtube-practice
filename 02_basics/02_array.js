const marvelHeroes = ["thor", "Ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// Push dcHeroes array into marvelHeroes
// marvelHeroes.push(dcHeroes);

console.log(marvelHeroes); // ["thor", "Ironman", "spiderman", Array(3)]

// Combine arrays without nesting using concat
const allHeroesConcat = marvelHeroes.concat(dcHeroes);
console.log(allHeroesConcat);

// Combine arrays using spread operator
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log(allHeroesSpread);

// Flatten deeply nested array
const nestedArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Check if "Hitesh" is an array
console.log(Array.isArray("Hitesh")); // false

// Convert a string to an array
console.log(Array.from("Hitesh")); // ["H", "i", "t", "e", "s", "h"]

// Convert an object to an array
console.log(Array.from({ name: "hitesh" })); // [] (interesting behavior)

// Use Array.of() 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [100, 200, 300]

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Trouver la birthdate
console.log("\nTrouver la birthdate")
let birthdate = entrepreneurs.filter(function(birth) {
    return birth.year > 1969 && birth.year < 1980;
});

console.log(birthdate)

// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("\nSors une array qui contient le prénom et le nom des entrepreneurs")
fullname = []
entrepreneurs.forEach(item => {
    a = item.first
    b = item.last
    fullname.push(a + " " + b)
});
console.log(fullname)


// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("\nQuel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach(item => {
    actualage = 2021 - item.year
    console.log("l'entrepeur " + item.first + " a actuellement " + actualage + " ans")
});


//Trie les entrepreneurs par ordre alphabétique du nom de famille
console.log("\nTrie des entrepreneurs par ordre alphabétique du nom de famille :")
array = []
entrepreneurs.forEach(item => {
  array.push(item.last)
});
console.log(array.sort())





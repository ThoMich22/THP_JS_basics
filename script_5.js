const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



// Est-ce que tous les livres ont été au moins empruntés une fois ?

console.log('\nEst-ce que tous les livres ont été au moins empruntés une fois ?')
var found = books.find(function(book, index) {
  if (book.rented == '0'){
    console.log (`Non, ${book.title} n'a pas encore été emprunté`)
  }
  else if (book.rented != '0'){
    return  false
  }
});


// Quel est livre le plus emprunté ?
console.log("\nQuel est livre le plus emprunté ?")
array = []
books.forEach(item => {
  array.push(item.rented)
  array.sort()
});

let a = array[0]
let x = a.toString();

let most_rended = books.find(book => book.rented == x);
console.log(most_rended.title)


// Quel est le livre le moins emprunté ?
console.log("\nQuel est livre le moins emprunté ?")
array2 = []
books.forEach(item => {
  array2.push(item.rented)
  array2.sort()
});

let b = array2[array2.length - 1]
let c = b.toString();

let less_rended = books.find(book => book.rented == c);
console.log(less_rended.title)



// Trouve le livre avec l'ID: 873495 ;
console.log("\nTrouve le livre avec l'ID: 873495" )
let id_to_find = books.find(book => book.id === 873495);
console.log(id_to_find.title)

  

// Supprime le livre avec l'ID: 133712 ;
console.log("\nSupprime le livre avec l'ID: 133712")
books.shift(books.id == 133712)
console.log(books)




// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("\nTrie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")
books.shift(books.id == 133712)

array3 = []
books.forEach(book => {
  array3.push(book.title)
});

console.log(array3.sort())
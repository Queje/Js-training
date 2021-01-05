console.log("le deuxième exo de Js!");

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

//question: afficher les titres:
let bookstitle = books.map(({title, id, rented})=>({title}));
console.log(bookstitle); 

// Est-ce que tous les livres ont été empruntés au moins une fois ?
function filterbyrented() {
  return books.rented == 0
};

let booksfiltered = books.filter(filterbyrented);
console.log(booksfiltered);

// Quel est le livre le plus emprunté ?
function getrented() {
	return books.map( r => r.rented);
};

console.log(books.find(element => element.rented == Math.max(...getrented(books))));

// Quel est le livre le moins emprunté ?
console.log(books.find(element => element.rented == Math.min(...getrented(books))));

//Supprime le livre avec l'ID 133712
let bookstodelete = books.find(element => element.id == 133712);
let booksindextodelete = books.findIndex(element => element.id == 133712);
console.log("le livre a supprimer est: ")
console.log(bookstodelete);
console.log("son index est: ")
console.log(booksindextodelete);

let deletebookbyid = books.splice(booksindextodelete,1);
console.log("liste obtenue:")
console.log(books);
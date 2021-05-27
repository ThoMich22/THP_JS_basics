// program pour trouver le factoriel d'un chiffre

// Récupérer le nombre du user 
const number = prompt('Entre un chiffre positif: ');

// Vérifions si number est égal à 0
if (number < 0) {
    console.log('Erreur ! Il ne peux y avoir de factoriel pour un chiffre négatif.');
}

// Si number est égal à 0
else if (number === 0) {
    console.log(`Le factoriel de ${number} est 1.`);
}

// Si le chiffre est positif, alors on procède au calcul 
else {
    let factorial_number = 1;
    for (i = 1; i <= number; i++) {
        factorial_number *= i;
    }
    console.log(`The factorial of ${number} is ${factorial_number}.`);
}



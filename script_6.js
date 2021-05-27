arn = "CCGUCGUUGCGCUACAGC"
arn_2 = "CCUCGCCGGUACUUCUCG"

i = 1


function transformation(arn) { 

    let x = arn.match(/.{1,3}/g);

    x.forEach(element => {
        if (element === "UCU" || "UCC" || "UCA" || "UCG" || "AGU" || "AGC"){

            x.splice(x[i], 1, 'Sérine')

        } else if (element === "CCU" || "CCC" || "CCA" || "CCG"){

            x.splice(x[i], 1, 'Proline')

        } else if (element === "UUA" || "UUG"){

            x.splice(x[i], 1, 'Leucine')

        } else if (element === "UUU" || "UUC") {

            x.splice(x[i], 1, 'Phénylalanine')

        } else if (element === "CGU" || "CGC" || "CGA" || "CGG" || "AGA" || "AGG") {

            x.splice(x[i], 1, 'Arginine')

        } else if (element === "UAU" || "UAC" )

            x.splice(x[i], 1, 'Tyrosine')
    });
    i++
    return x 
};

console.log(transformation(arn));








// 6


// UCU || UCC || UCA || UCG || AGU || AGC == "Sérine"

// CCU || CCC || CCA || CCG == "Proline"

// UUA || UUG == "Leucine"

// UUU || UUC == "Phénylalanine"

// CGU || CGC || CGA || CGG || AGA || AGG = "Arginine"

// UAU || UAC == "Tyrosine"
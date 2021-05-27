arn = "CCGUCGUUGCGCUACAGC"
arn_2 = "CCUCGCCGGUACUUCUCG"




function transformation(arn) { 

    let x = arn.match(/.{1,3}/g);
    let i = 0;

    x.forEach(element => {
        if (element === "UCU" || element === "UCC" || element === "UCA" || element === "UCG" || element === "AGU" || element === "AGC"){

            x.splice(x[i], i, 'Sérine')

        } else if (element === "CCU" || element === "CCC" || element === "CCA" || element === "CCG"){

            x.splice(x[i], i, 'Proline')

        } else if (element === "UUA" || element === "UUG"){

            x.splice(x[i], i, 'Leucine')

        } else if (element === "UUU" || element === "UUC") {

            x.splice(x[i], i, 'Phénylalanine')

        } else if (element === "CGU" || element === "CGC" || element === "CGA" || element === "CGG" || element === "AGA" || element === "AGG") {

            x.splice(x[i], i, 'Arginine')

        } else if (element === "UAU" || element === "UAC" )

            x.splice(x[i], i, 'Tyrosine')
    });
    i++;
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
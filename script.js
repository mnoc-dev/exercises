console.log("EXO1")

let age = 35;
let typeCompte = 2;
let solde = 2000;
let nombreOperations = 30;
let carteVisa = true;
let frais = 0;

let carteVisaTxt;

// Invalide
if(age < 0 || age > 120){
    console.log("Âge invalide");
}
else if(typeCompte < 1 || typeCompte > 4){
    console.log("Type de compte invalide");
}
else if(solde < -5000){
    console.log("Découvert excessif - compte bloqué");
}
else if(nombreOperations < 0 || nombreOperations > 200){
    console.log("Nombre d'opérations invalide");
}
else if(typeCompte === 1 && (age < 12 || age > 25)){
    console.log("Type de compte incompatible avec l'âge");
} 
else if(typeCompte === 4 && (age < 60)){
    console.log("Type de compte incompatible avec l'âge");
}
else{
    // **Frais de base selon le type de compte :**
    let labelCompte = "";

    if(typeCompte === 1){
        labelCompte = "Compte jeune";
        frais = 0;
    }
    else if(typeCompte === 2){
        frais = 8;
        labelCompte = "Compte standard";
    }
    else if(typeCompte === 3){  
        frais = 15;
        labelCompte = "Compte premium";

    }
    else if(typeCompte === 4){
        frais = 3;
        labelCompte = "Compte senior";

    }


    // **Ajustements selon le solde (à appliquer APRÈS les frais de base) :**
    if(solde >= 10000){
        frais -= 5;
        // grand client
        // client privilégié
    }
    else if (solde >= 5000){
        frais -= 3;
        // client privilégié
    }
    else if (solde < -1000){
        frais += 12;
        // découvert important
    }
    else if (solde >= -1000 && solde < 0){
        frais += 5;
        // découvert autorisé
    }
 

    // **Ajustements selon les opérations (à appliquer APRÈS les ajustements de solde) :**
    if (typeCompte !== 3){
    if(nombreOperations > 100){
        frais += 12;
    }
    else if(nombreOperations > 50){
        frais += 4;
    }
    
}

    // **Frais de carte (à ajouter APRÈS tous les autres ajustements) :**

    if(carteVisa === true && typeCompte === 2){
        frais += 3;
                carteVisaTxt = "avec carte";
    }
    else if(carteVisa === true && typeCompte ===1){
        frais += 1;
                carteVisaTxt = "avec carte";


    }
    else if (carteVisa === false){
                carteVisaTxt = "sans carte";

    }


    if (frais < 0 ){
        frais = 0;
    }
    console.log( labelCompte + " "+ age + " ans"+ " solde : "+ solde+ "€"+ " "+nombreOperations+ " opérations " + carteVisaTxt + " : "+ frais+ "€");
}
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
console.log("EXO 2")

let typeChbre = 2;
let jourSemaine = 6;
let saison = 3;
let nombrePersonnes = 2;
let petitDejeuner = true;
let fidelite = false;
let prixTotal = 0;

let labelChbre = "";
let txtSaison = "";
let jour = "";
let personnesSupplementaires = 1;
let txtPetitDejeuner = "";
let txtFidelite ="";

// **Cas invalides :**
if (typeChbre < 1 || typeChbre > 4){
    console.log("Type de chambre invalide");
}
else if (jourSemaine < 1 || jourSemaine > 7){
    console.log("Jour invalide");
}
else if (saison < 1 || saison > 3){
    console.log("Saison invalide");
}
else if (nombrePersonnes < 1 || nombrePersonnes > 4){
    console.log("Nombre de personnes invalide");
}
// **Règles de capacité :**
else if((typeChbre === 1 || typeChbre === 2 ) && nombrePersonnes > 2){
    console.log("Nombre de personnes incompatible avec le type de chambre");
}
else if (typeChbre === 3 && nombrePersonnes > 3){
    console.log("Nombre de personnes incompatible avec le type de chambre");
}
else if (typeChbre === 4 && nombrePersonnes > 4){
    console.log("Nombre de personnes incompatible avec le type de chambre");
}

else{
   
// **Prix de base de la chambre selon le type (en basse saison) :**
    if (typeChbre === 1 ){
        labelChbre = "Economique";
        prixTotal = 50;
    }
    else if (typeChbre === 2 ){
        labelChbre = "Standard";
        prixTotal = 80;
    }
    else if (typeChbre === 3 ){
        labelChbre = "Supérieure";
        prixTotal = 120;
    }
    else if (typeChbre === 4 ){
        labelChbre = "Suite";
        prixTotal = 200;
    }
// **Majoration selon la saison (à appliquer sur le prix de base) :**

if (saison === 1){
    txtSaison = "basse saison";
}
else if(saison === 2){
    prixTotal *= 1.3;
    txtSaison = "moyenne saison";

}
else if (saison === 3){
    prixTotal *= 1.6;
    txtSaison = "haute saison";

}
// **Majoration week-end (à appliquer APRÈS la majoration de saison) :**
    
if (jourSemaine === 1){
    prixTotal;
    jour = "Lundi";
}
else if (jourSemaine === 2){
    prixTotal;
    jour = "Mardi";
}
else if (jourSemaine === 3){
    prixTotal;
    jour = "Mercredi";
}
else if (jourSemaine === 4){
    prixTotal;
    jour = "Jeudi";
}
else if (jourSemaine === 5){
    prixTotal;
    jour = "Vendredi";
}
else if (jourSemaine === 6){
    prixTotal += 25;
    jour = "Samedi";
}
else if (jourSemaine === 7){
    prixTotal += 25;
    jour = "Dimanche";
}

// **Supplément personnes supplémentaires (à ajouter APRÈS les majorations) :**


if (nombrePersonnes > 2){
    personnesSupplementaires = nombrePersonnes - 2;
    prixTotal += (personnesSupplementaires * 15);
}

// **Prix du petit-déjeuner (à ajouter à la fin) :**

if (petitDejeuner === true){
    prixTotal = 12 * nombrePersonnes;
    txtPetitDejeuner = "avec petit-déjeuner";
}
else{
    txtPetitDejeuner = "sans petit-déjeuner";
}
// **Réduction fidélité (à appliquer sur le prix FINAL) :**

if ( fidelite === true){
    prixTotal *= 0.85;
    txtFidelite = "avec fidélité";
}
else{
    txtFidelite = "sans fidélité";
}

if (jourSemaine === 2 && saison === 1){
    prixTotal -= 20;
    
}

else if (prixTotal % 10 === 0){
    prixTotal -= 5;
}

if (prixTotal < 30){
    prixTotal = 30;
}

console.log( labelChbre + ", " + jour +  ", " + txtSaison +  ", " + nombrePersonnes +  " pax "  + txtPetitDejeuner +  ", " + txtFidelite + " : " + prixTotal + "€.");
console.log(`${labelChbre}, ${jour}, ${txtSaison}, ${nombrePersonnes} pax ${txtPetitDejeuner}, ${txtFidelite} : ${prixTotal}€. `)

}
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
console.log("EXO 3");
console.log("Calcul impôt sur le Revenu");

let revenuAnnuel = 30000;
let situationFamiliale = 1;
let nombreEnfants = 0;
let montantDons = 0;
let fraisSante = 0;
let travailleurHandicape = false;
let nombreDeParts = 0;
let impot = 0;


// CAS INVALIDES

if (revenuAnnuel < 0 || revenuAnnuel > 50000){
    console.log(`"Revenu invalide"`);
}
else if (situationFamiliale < 1 || situationFamiliale > 5){
    console.log(`"Situation familiale invalide"`);
}
else if (nombreEnfants < 0 || nombreEnfants > 10){
    console.log(`"Nombre d'enfants invalide"`);
}
else if (montantDons < 0 || montantDons > 50000){
    console.log(`"Montant des dons invalide"`);
}
else if (fraisSante < 0 || fraisSante > 20000){
    console.log(`"Frais de santé invalides"`);
}
else {
    // **Parts de base selon la situation :**
    let txtSituationFamiliale = " ";
    if(situationFamiliale === 1){
       txtSituationFamiliale = "Célibataire";
    }
    if(situationFamiliale === 2){
        txtSituationFamiliale = "Marié";
    }
    if(situationFamiliale === 3){
        txtSituationFamiliale = "Divorcé";
    }
    if(situationFamiliale === 4){
        txtSituationFamiliale = "Veuf";
    }
    if(situationFamiliale === 5){
        txtSituationFamiliale = "Pacsé";
    }
    // célibataire ou divorcé
    if (situationFamiliale === 1 || situationFamiliale === 3){
        nombreDeParts = 1;
        
        if (nombreEnfants >= 1){
            nombreDeParts += 1;
        }
        if (nombreEnfants >= 2 ){
            nombreDeParts += (nombreEnfants - 1) * 0.5;
        }
    }
    // marié ou pacsé
    else if (situationFamiliale === 2 || situationFamiliale === 5){
        nombreDeParts = 2;
        if (nombreEnfants <= 2){
            nombreDeParts += nombreEnfants * 0.5;
        }
        else {
            nombreDeParts += 1 +(nombreEnfants - 2) *1;
        }
        
      
    }
    // veuf
    else if (situationFamiliale === 4){
        nombreDeParts = 1.5;
            if (nombreEnfants >= 1){
                nombreDeParts = 2;
            }
                if (nombreEnfants >= 1){
            nombreDeParts += 1;
            }
            if (nombreEnfants >= 2){
            nombreDeParts += (nombreEnfants -1) * 0.5;
            }
    }
// **ÉTAPE 2 : Calcul du revenu imposable**
// frais de santé
let deductionSante = 0;
let revenuImposable = revenuAnnuel - deductionSante;
let txtHandicape = " ";
    if (fraisSante > 3000){
        deductionSante = fraisSante - 3000;
    }
    if (travailleurHandicape){
        deductionSante += 5000;
        txtHandicape = "handicapé";
    }
// **ÉTAPE 3 : Calcul du quotient familial**

// Quotient familial = `revenuImposable / nombreDeParts`

// C'est sur ce montant que s'applique le barème progressif.
let quotientFamilial = revenuImposable / nombreDeParts;
// **ÉTAPE 4 : Calcul de l'impôt par tranches progressives**
let impotParTranche = 0;
if (quotientFamilial > 10000){
    let tranche2 = Math.min (quotientFamilial - 10000, 15000);
    // Math.min prends le plus petit. le quotient - les 10000 de la tranche précédente.
    //  15000 correspond à la quantité de cette tranche (25000 - 10000 = 15000) 
    impotParTranche += tranche2 * 0.1;
    // le calcul est impotParTranche + (le résultat qu'il y a dans la tranche 2
    //  si ca passe a la tranche 3, c'est 15000
    // sinon c'est ce qu'il reste apres la tranche 1
    if ( quotientFamilial > 25000){
        let tranche3 = Math.min (quotientFamilial - 25000, 25000);
        impotParTranche += tranche3 * 0.2;
        if (quotientFamilial > 50000){
            let tranche4 = Math.min (quotientFamilial - 50000, 50000);
            impotParTranche += tranche4 * 0.3;
            if (quotientFamilial > 100000){
                impotParTranche += (quotientFamilial - 100000) * 0.4;
            }
        }
    }
}
// **ÉTAPE 5 : Calcul de l'impôt brut total**
let impotBrut = impotParTranche * nombreDeParts;
// **ÉTAPE 6 : Réduction pour dons aux associations**
let reductionDons = 0;
    if (montantDons > 0){
// Don if montant dans le film La folie des grandeurs: pouet pouet! C'est bien trop difficile cet exercice! Aahhhhouuu!
        let reduction = montantDons * 0.66;
        let plafond = impotBrut * 0.20;
    if ( reduction > plafond){
        reductionDons = plafond;
    }
    else {
        reductionDons = reduction;
    }   
    }
let impotApresDons = impotBrut - reductionDons;
// **ÉTAPE 7 : Crédit d'impôt pour personne en situation de handicap**
let impotApresCredit = 0;
    if (travailleurHandicape && revenuAnnuel < 50000){
        let creditImpot = 500;
        impotApresCredit = impotApresDons - creditImpot;
    }
// **ÉTAPE 8 : Plafonnement et vérifications finales**
// **Réduction familles nombreuses 

    if (nombreEnfants >= 3 && impotApresCredit > 3000){
        impotApresCredit *= 0.90;
    }
    if (impot < 0 && !travailleurHandicape){
        impotApresCredit = 0;
        
    }
impotNet = impotApresCredit;
console.log(`.${txtSituationFamiliale}, ${nombreEnfants} enfant, ${revenuAnnuel} de revenu, ${montantDons} don, ${fraisSante} frais santé, ${txtHandicape}`)
console.log(`.${nombreDeParts} part. quotient ${quotientFamilial}€.  ${impotApresCredit}€ d'impôt`)

}

// ================================================================
// ## Exercice 1 : Calcul de Frais Bancaires Mensuels
// ================================================================

// ----------------------------------------------------------------
// 📝 TON CODE ORIGINAL (conservé tel quel)
// ----------------------------------------------------------------
//
// // ## Exercice 1 : Calcul de Frais Bancaires Mensuels
// console.log("Exercice 1: BANQUE");
//
// let age = 10;
// let typeCompte = 1;
// let solde = 6000 ;
// let nombreOperations =0;
//
// // Invalide
//
// if(age < 0  || age >= 120){
//     console.log("Age invalide");
// }
//
// if(typeCompte <= 1 || typeCompte >= 4){
//     console.log("Type de compte invalide");
// }
//
// if(solde <= - 5000){
//     console.log("Découvert excessif - compte bloqué");
// }
//
// if(nombreOperations <= 0 || nombreOperations >= 200){
//     console.log("ERREUR : Nombre d'opérations invalide");
// }
// // Fin invalide
//
// // Age
// if(age >= 12 && age <= 25){
//     typeCompte = 1;
// }
// else if(age >= 60){
//     typeCompte = 4;
// }
// else{
//     console.log("Type de compte incompatible avec l'âge");
// }
//
// // Frais de base
//
// let fraisTypeCompte = 0;
// let labelCompte = "";
//
// if(typeCompte === 1){
//     labelCompte = "Compte jeune";
//     fraisTypeCompte = 0;
// }
// else if(typeCompte === 2){
//     labelCompte = "Compte standard";
//     fraisTypeCompte = 8;
// }
// else if(typeCompte === 3){
//     labelCompte = "Compte premium";
//     fraisTypeCompte = 15;
// }
// else if(typeCompte === 4){
//     labelCompte = "Compte senior";
//     fraisTypeCompte = 3;
// }
//
// // Selon le solde
//
// let typeClient = "pas de frais supplémentaires selon le solde";
// let fraisTypeClient = -3;
//
// if(solde >= 5000 && solde < 10000){
//     typeClient = "client privilégié";
//     fraisTypeClient = -3;
// }
// else if(solde >= 10000){
//     typeClient = "grand client";
//     fraisTypeClient = -5
// }
// else if(solde <= 0 && solde >= -1000){
//     typeClient = "découvert autorisé";
//     fraisTypeClient = 5;
// }
// else if(solde < -1000){
//     typeClient = "découvert important";
//     fraisTypeClient = 12;
// }
// console.log(fraisTypeCompte, "+" , fraisTypeClient)
//
// // Ajustements selon les opérations
//
// let fraisTypeOperations = 4;
//
// if(nombreOperations>50 && nombreOperations <=100 && typeCompte !==3){
//     fraisTypeOperations = 4;
// }
// else if(nombreOperations>100 && typeCompte !==3){
//     fraisTypeOperations = 8;
// }
// else{
//     fraisTypeOperations = 0
// }
//
// console.log(fraisTypeCompte, "+" , fraisTypeClient, "+" , fraisTypeOperations)
//
// // Frais de carte
//
// let carteVisa = true;
// let fraisCarte = 1;
// let avecCarte = "avec carte";
// let sansCarte = "sans carte";
//
// if(carteVisa = true && typeCompte === 2){
//     fraisCarte = 3;
// }
// else if(carteVisa = true && typeCompte === 1){
//     fraisCarte = 1;
// }
// else{
//     fraisCarte = 0;
// }
//
// console.log(fraisTypeCompte, "+" , fraisTypeClient, "+" , fraisTypeOperations, "+" , fraisCarte)
//
// // Frais final
// fraisFinal= fraisTypeCompte + (fraisTypeClient) +(fraisTypeOperations) + (fraisCarte)
//
// if(fraisFinal < 0 ){
//     fraisFinal = 0;
// }
//
// console.log(fraisFinal)
// console.log(labelCompte , ", ", age, "ans", "solde de ", solde, "€.",nombreOperations, " opérations, ", avecCarte, fraisCarte, "€ +", fraisTypeClient
// , "(", typeClient,")+", fraisTypeOperations, "€(opérations) " + fraisCarte, "€(carte) =", fraisFinal, "€." )

// ----------------------------------------------------------------
// ✅ CODE CORRIGÉ
// ----------------------------------------------------------------
console.log("=== Exercice 1: BANQUE ===");

let age = 18;
let typeCompte = 1;       // 1=jeune, 2=standard, 3=premium, 4=senior
let solde = -200;
let nombreOperations = 60;
let carteVisa = true;

let frais = 0;

// === VALIDATION DES DONNÉES ===
// ⚠️ ERREUR : Tu avais mis des if séparés, ce qui veut dire que TOUTES les validations
// s'exécutaient en même temps, même si une erreur avait déjà été trouvée.
// Il faut CHAÎNER les validations avec else if : dès qu'une erreur est détectée,
// les suivantes sont ignorées et le calcul ne se lance pas.

if (age < 0 || age > 120) {
    // ⚠️ ERREUR : Tu utilisais age >= 120, ce qui rendait 120 invalide
    // alors que c'est la valeur limite haute autorisée.
    // La borne basse (< 0) était déjà correcte dans ton code.
    // Règle : "supérieur à 120" s'écrit > 120 (pas >= 120).
    console.log("Âge invalide");
}
else if (typeCompte < 1 || typeCompte > 4) {
    // ⚠️ ERREUR : Tu utilisais <= 1 et >= 4, ce qui rendait typeCompte 1 et 4 invalides !
    // Résultat : les comptes jeune (1) et senior (4) étaient toujours refusés.
    // Règle : les bornes valides sont incluses, donc on teste strictement en dehors : < 1 || > 4.
    console.log("Type de compte invalide");
}
else if (solde < -5000) {
    console.log("Découvert excessif - compte bloqué");
}
else if (nombreOperations < 0 || nombreOperations > 200) {
    // ⚠️ ERREUR : Tu utilisais <= 0 et >= 200, ce qui rendait 0 et 200 opérations invalides
    // alors que 0 opération (aucun mouvement) et 200 sont des valeurs autorisées par l'énoncé.
    console.log("Nombre d'opérations invalide");
}

// === COMPATIBILITÉ ÂGE / TYPE DE COMPTE ===
// ⚠️ ERREUR LOGIQUE IMPORTANTE : Tu modifiais typeCompte en fonction de l'âge
// (ex : si 12-25 ans → typeCompte = 1). Ce n'est pas ce que demande l'énoncé !
// L'énoncé dit : si le typeCompte choisi est incompatible avec l'âge, afficher une erreur.
// Il faut donc VÉRIFIER la compatibilité entre l'âge et le typeCompte qu'on a reçu,
// sans jamais modifier typeCompte.

else if (typeCompte === 1 && (age < 12 || age > 25)) {
    console.log("Type de compte incompatible avec l'âge");
}
else if (typeCompte === 4 && age < 60) {
    console.log("Type de compte incompatible avec l'âge");
}

// === CALCUL DES FRAIS ===
else {
    let labelCompte = "";

    // Frais de base selon le type de compte
    if (typeCompte === 1) {
        labelCompte = "Compte jeune";
        frais = 0;
    }
    else if (typeCompte === 2) {
        labelCompte = "Compte standard";
        frais = 8;
    }
    else if (typeCompte === 3) {
        labelCompte = "Compte premium";
        frais = 15;
    }
    else if (typeCompte === 4) {
        labelCompte = "Compte senior";
        frais = 3;
    }

    // Ajustements selon le solde
    // 💡 ORDRE IMPORTANT : toujours tester la condition la plus restrictive EN PREMIER.
    // Si on testait solde >= 5000 avant solde >= 10000, un solde de 12000€ tomberait
    // dans le premier else if et n'atteindrait jamais la réduction grand client.
    // Ici : on teste >= 10000 d'abord, puis >= 5000, puis les découverts.
    if (solde >= 10000) {
        frais = frais - 5;  // Grand client
    }
    else if (solde >= 5000) {
        frais = frais - 3;  // Client privilégié
    }
    else if (solde < -1000) {
        frais = frais + 12; // Découvert important
    }
    else if (solde >= -1000 && solde < 0) {
        frais = frais + 5;  // Découvert autorisé
    }

    // Ajustements selon les opérations (sauf compte premium)
    if (typeCompte !== 3) {
        if (nombreOperations > 100) {
            frais = frais + 12; // +4€ pour >50, puis +8€ supplémentaires pour >100 = +12€ au total
        }
        else if (nombreOperations > 50) {
            frais = frais + 4;
        }
    }

    // Frais de carte Visa
    // ⚠️ ERREUR CRITIQUE : Tu écrivais "if (carteVisa = true)" avec un seul "=".
    // En JavaScript, = est une AFFECTATION : ça ne compare pas, ça remplace la valeur !
    // "carteVisa = true" met carteVisa à true peu importe ce qu'il valait avant,
    // donc la condition était toujours vraie. Il faut TOUJOURS === pour comparer.
    if (carteVisa === true && typeCompte === 2) {
        frais = frais + 3;
    }
    else if (carteVisa === true && typeCompte === 1) {
        frais = frais + 1;
    }
    // Pas de frais carte pour premium (type 3) et senior (type 4)

    // Les frais ne peuvent pas être négatifs
    if (frais < 0) {
        frais = 0;
    }

    // Affichage du résultat
    console.log(labelCompte + ", " + age + " ans, solde : " + solde + "€, " + nombreOperations + " opérations" + (carteVisa ? ", avec carte Visa" : "") + " → Frais : " + frais + "€");
}

// ================================================================
// 📊 NOTE EXERCICE 1 : 8 / 20
// ----------------------------------------------------------------
// ✅ Points obtenus (8 pts) :
//
// ✅ +2 pts  Frais de base corrects selon le type de compte
//           Les 4 types (jeune/standard/premium/senior) sont traités avec
//           les bons montants (0 / 8 / 15 / 3€).
//
// ✅ +2 pts  Ajustements selon le solde présents
//           Les 4 tranches (grand client, privilégié, découvert autorisé,
//           découvert important) sont identifiées avec les bonnes valeurs.
//
// ✅ +1 pt   Ajustements selon les opérations partiellement corrects
//           La logique (paliers >50 et >100, exclusion premium) est présente.
//
// ✅ +1 pt   Minimum 0€ présent
//           if (fraisFinal < 0) fraisFinal = 0 est bien écrit.
//
// ✅ +1 pt   Code lisible avec labels et commentaires
//           Variables labelCompte, typeClient bien utilisées, code commenté.
//
// ✅ +1 pt   Structure des blocs (frais base, solde, opérations, carte) bien séparée
//           Tu as clairement découpé le problème en étapes distinctes.
//
// ----------------------------------------------------------------
// ❌ Points retirés (-12 pts) :
//
// ❌ -3 pts  Structure des validations incorrecte
//           Tu as utilisé des if séparés au lieu d'une chaîne if / else if.
//           Conséquence : même si l'âge était invalide, le code continuait
//           à vérifier le solde, les opérations ET à calculer les frais.
//
// ❌ -2 pts  Bornes incorrectes sur plusieurs variables
//           • age >= 120 → rend l'âge 120 invalide (devrait être > 120)
//           • typeCompte <= 1 || >= 4 → bloque complètement les types 1 et 4 !
//             Tout compte jeune et tout compte senior étaient refusés.
//           • solde <= -5000 → rend le solde exact de -5000€ invalide (devrait être < -5000).
//           • nombreOperations <= 0 || >= 200 → rend 0 et 200 invalides.
//
// ❌ -2 pts  Logique compatibilité âge / type de compte inversée
//           Tu modifiais typeCompte en fonction de l'âge au lieu de vérifier
//           si le typeCompte fourni était compatible avec l'âge donné.
//
// ❌ -1 pt   fraisTypeClient initialisé à -3 par défaut → BUG SILENCIEUX
//           Pour un solde entre 0€ et 5000€, aucune condition ne matche.
//           fraisTypeClient reste à -3 (sa valeur initiale) sans raison.
//           Résultat : tous les comptes "normaux" reçoivent une réduction de -3€.
//           Exemple : compte standard, solde 2000€, 30 opérations, sans carte
//           → devrait donner 8€, mais ton code donne 8 + (-3) = 5€.
//
// ❌ -1 pt   fraisTypeOperations = 8 pour >100 opérations (devrait être 12)
//           L'énoncé dit : +4€ pour >50, puis +8€ SUPPLÉMENTAIRES pour >100 = 12€ total.
//           Ton code met fraisTypeOperations = 8, donc le résultat est faux de 4€.
//
// ❌ -3 pts  Affectation = au lieu de comparaison === pour carteVisa
//           "if (carteVisa = true)" affecte toujours true à carteVisa,
//           donc la condition était toujours vraie → frais carte appliqués
//           même si carteVisa était false.
// ================================================================

// ================================================================
// ## Exercice 2 : Tarification Hôtel - Chambre et Petit-Déjeuner
// ================================================================

// ----------------------------------------------------------------
// 📝 TON CODE ORIGINAL (conservé tel quel)
// ----------------------------------------------------------------
//
// console.log("EXERCICE 2: TARIFICATION HOTEL-CHAMBRE PETIT DEJ");
//
// // pilote
//
// let typeChbre = 1;
// let jourSemaine = 3;
// let saison = 1;
// let nombrePersonne = 1;
// let nombrePersonneSupp = 0;
// let petitDejeuner = false;
// let fidelite = false;
//
// let prix = 50;
// let prixInitial = 50;
// let majorationPrixStandard = 30;
// let majorationPrixSup = 70;
// let majorationPrixSuite = 150;
//
// let txtTypeChbre = "";
// let majorationWeekend = 0;
// let txtJour = "";
// let prixParSaison = 0;
// let basseSaison = prix;
// let moyenneSaison = prix * 1.3;
// let hauteSaison = prix * 1.6;
// let txtSaison = "";
// let supplémentParPersonne = 15 * nombrePersonneSupp;
// let txtPersonneSupp = "";
// let prixPetitDejeuner = 0;
// let txtPetitDejeuner = "";
// let remiseFidelite = 1;
// let txtFidelite = "";
// let montantOffre = 0;
// let prixFinal = (prixParSaison + majorationWeekend + supplémentParPersonne + prixPetitDejeuner) * remiseFidelite;
//
// // Invalide
// if (typeChbre < 1 || typeChbre > 4) { console.log("Type de chambre invalide"); }
// if (jourSemaine < 1 || jourSemaine > 7) { console.log("Jour invalide"); }
// if (saison < 1 || saison > 3) { console.log("Saison invalide"); }
// if (nombrePersonne < 1 || nombrePersonne > 4) { console.log("ERREUR : Nombre de personnes invalide"); }
//
// if (typeChbre === 1) {
//     txtTypeChbre = "Economique";
//     if (nombrePersonne === 1 || nombrePersonne === 2) { prixInitial = 50; }
//     else { console.log("ERREUR : Nombre de personnes incompatible avec le type de chambre"); }
// }
// else if (typeChbre === 2) {
//     txtTypeChbre = "Standard";
//     if (nombrePersonne === 1 || nombrePersonne === 2) { prixInitial = prix + majorationPrixStandard; }
//     else { console.log("ERREUR : Nombre de personnes incompatible avec le type de chambre"); }
// }
// else if (typeChbre === 3) {
//     txtTypeChbre = "Supérieur";
//     if (nombrePersonne === 1 || nombrePersonne === 2) {
//         prixInitial = prix + majorationPrixSup;
//         if (nombrePersonneSupp === 1) { txtPersonneSupp = "pers. supp."; supplémentParPersonne; }
//     } else { console.log("ERREUR : Nombre de personnes incompatible avec le type de chambre"); }
// }
// else if (typeChbre === 4) {
//     txtTypeChbre = "Suite";
//     if (nombrePersonne>=1 || nombrePersonne <= 4) {
//         prixInitial = prix + majorationPrixSuite;
//         if (nombrePersonneSupp === 1 || nombrePersonneSupp === 2) { txtPersonneSupp = "pers. supp."; supplémentParPersonne; }
//     }
// }
//
// if (saison === 1) { prixParSaison = prixInitial; txtSaison = "basse saison"; }
// else if (saison === 2) { prixParSaison = prixInitial * 1.3; txtSaison = "moyenne saison"; }
// else { prixParSaison = prixInitial * 1.6; txtSaison = "haute saison"; }
//
// if (jourSemaine === 1) { txtJour = "lundi"; }
// else if (jourSemaine === 2) { txtJour = "mardi"; }
// else if (jourSemaine === 3) { txtJour = "mercredi"; }
// else if (jourSemaine === 4) { txtJour = "jeudi"; }
// else if (jourSemaine === 5) { txtJour = "vendredi"; }
// else if (jourSemaine === 6) { txtJour = "samedi"; majorationWeekend = 25; }
// else if (jourSemaine === 7) { txtJour = "dimanche"; majorationWeekend = 25; }
//
// if (petitDejeuner === true) { txtPetitDejeuner = "avec petit-déj"; prixPetitDejeuner = 12 * (nombrePersonne + nombrePersonneSupp); }
// else if (petitDejeuner === false) { txtPetitDejeuner = "sans petit-déj"; prixPetitDejeuner = 0; }
//
// if (fidelite === true) { remiseFidelite = 0.85; txtFidelite = "avec fidélité"; }
// else { txtFidelite = "sans fidélité"; }
//
// if (jourSemaine === 2 && saison === 1) { montantOffre = -20; }
// else if (prixFinal % 10 === 0 && jourSemaine !== 2) { montantOffre = -5; }
// else { montantOffre = 0; }
//
// if (prixFinal <= 30) { prixFinal === 30; }
//
// console.log(prixFinal + montantOffre);
// console.log(`Chambre ${txtTypeChbre}, ${txtJour} en ${txtSaison} pour ${nombrePersonne} pers. et ${nombrePersonneSupp} ${txtPersonneSupp}, ${txtPetitDejeuner}, ${txtFidelite}.`)
// console.log("Prix final:", ((prixParSaison + majorationWeekend + supplémentParPersonne + prixPetitDejeuner) * remiseFidelite)+(montantOffre));
// console.log("(",prixParSaison,"+", majorationWeekend, "+",supplémentParPersonne, "+",prixPetitDejeuner,")*", remiseFidelite, "offre :",montantOffre);

// ----------------------------------------------------------------
// ✅ CODE CORRIGÉ
// ----------------------------------------------------------------
console.log("\n=== Exercice 2: TARIFICATION HÔTEL ===");

let typeChbre = 2;       // 1=économique, 2=standard, 3=supérieure, 4=suite
let jourSemaine = 6;     // 1=lundi … 7=dimanche
let saison = 3;          // 1=basse, 2=moyenne, 3=haute
let nombrePersonnes = 2; // 💡 Tu avais créé deux variables séparées : "nombrePersonne" et "nombrePersonneSupp".
// C'est inutile : le supplément n'est pas une donnée d'entrée, c'est un calcul.
// Il suffit d'une seule variable nombrePersonnes, et on calculera le supplément plus tard.
let petitDejeuner = true;
let fidelite = false;

// ⚠️ ERREUR : Tu avais calculé prixFinal DÈS SA DÉCLARATION, en haut du code,
// avant que les variables (saison, majoration, petit-déjeuner…) aient été calculées.
// À ce stade, toutes ces variables valaient 0 ou leurs valeurs par défaut,
// donc prixFinal était toujours 0, peu importe les données.
// Règle : on déclare d'abord à 0, et on calcule APRÈS avoir tout traité.
let prixTotal = 0;

let txtTypeChbre = "";
let txtJour = "";
let txtSaison = "";
let txtPetitDejeuner = "";
let txtFidelite = "";

// === VALIDATION DES DONNÉES ===
// Même principe que l'exercice 1 : on chaîne avec else if pour stopper
// le calcul dès la première donnée invalide trouvée.

if (typeChbre < 1 || typeChbre > 4) {
    console.log("Type de chambre invalide");
}
else if (jourSemaine < 1 || jourSemaine > 7) {
    console.log("Jour invalide");
}
else if (saison < 1 || saison > 3) {
    console.log("Saison invalide");
}
else if (nombrePersonnes < 1 || nombrePersonnes > 4) {
    console.log("Nombre de personnes invalide");
}

// === COMPATIBILITÉ CAPACITÉ / TYPE DE CHAMBRE ===

else if ((typeChbre === 1 || typeChbre === 2) && nombrePersonnes > 2) {
    console.log("Nombre de personnes incompatible avec le type de chambre");
}
else if (typeChbre === 3 && nombrePersonnes > 3) {
    console.log("Nombre de personnes incompatible avec le type de chambre");
}
// 💡 Tu avais ajouté une vérification pour la suite (type 4) avec :
// "if (nombrePersonne >= 1 || nombrePersonne <= 4)"
// Mais avec || (OU), cette condition est TOUJOURS vraie (tout nombre est >= 1 OU <= 4).
// La bonne logique serait && (ET), mais c'est déjà couvert par la validation >= 1 et <= 4 au-dessus.
// Pour la suite, qui accepte 1 à 4 personnes, aucune vérification supplémentaire n'est nécessaire.

// === CALCUL DU PRIX ===
else {

    // Prix de base selon le type de chambre
    if (typeChbre === 1) {
        txtTypeChbre = "Economique";
        prixTotal = 50;
    }
    else if (typeChbre === 2) {
        txtTypeChbre = "Standard";
        prixTotal = 80;
    }
    else if (typeChbre === 3) {
        txtTypeChbre = "Supérieure";
        prixTotal = 120;
    }
    else if (typeChbre === 4) {
        txtTypeChbre = "Suite";
        prixTotal = 200;
    }

    // Majoration selon la saison (appliquée sur le prix de base)
    if (saison === 1) {
        txtSaison = "basse saison";
        // pas de majoration
    }
    else if (saison === 2) {
        txtSaison = "moyenne saison";
        prixTotal = prixTotal * 1.30; // +30%
    }
    else if (saison === 3) {
        txtSaison = "haute saison";
        prixTotal = prixTotal * 1.60; // +60%
    }

    // Majoration week-end (ajoutée APRÈS la majoration de saison)
    if (jourSemaine === 1) {
        txtJour = "lundi";
    }
    else if (jourSemaine === 2) {
        txtJour = "mardi";
    }
    else if (jourSemaine === 3) {
        txtJour = "mercredi";
    }
    else if (jourSemaine === 4) {
        txtJour = "jeudi";
    }
    else if (jourSemaine === 5) {
        txtJour = "vendredi";
    }
    else if (jourSemaine === 6) {
        txtJour = "samedi";
        prixTotal = prixTotal + 25;
    }
    else if (jourSemaine === 7) {
        txtJour = "dimanche";
        prixTotal = prixTotal + 25;
    }

    // Supplément personnes supplémentaires (au-delà de 2 personnes)
    // ⚠️ ERREUR : Tu avais déclaré "supplémentParPersonne = 15 * nombrePersonneSupp" en haut du code,
    // mais nombrePersonneSupp valait 0 à ce moment-là, donc le supplément était toujours 0.
    // De plus, tu écrivais juste "supplémentParPersonne;" sans l'ajouter à prixInitial,
    // donc même si la valeur avait été correcte, elle n'aurait jamais été utilisée.
    // La bonne façon : calculer le supplément ICI, au bon moment, et l'additionner directement.
    if (nombrePersonnes > 2) {
        let personnesSupplementaires = nombrePersonnes - 2;
        prixTotal = prixTotal + (personnesSupplementaires * 15);
    }

    // Prix du petit-déjeuner (+12€ par personne)
    if (petitDejeuner === true) {
        txtPetitDejeuner = "avec petit-déj";
        prixTotal = prixTotal + (nombrePersonnes * 12);
    }
    else {
        txtPetitDejeuner = "sans petit-déj";
    }

    // Réduction fidélité -15% (s'applique sur TOUT : chambre + petit-déj)
    if (fidelite === true) {
        txtFidelite = "avec fidélité";
        prixTotal = prixTotal * 0.85;
    }
    else {
        txtFidelite = "sans fidélité";
    }

    // Offres spéciales (ne se cumulent pas entre elles)
    // 💡 Ce bloc doit venir APRÈS la réduction fidélité, car l'offre "multiple de 10"
    // s'applique sur le prix final après toutes les réductions.
    // ⚠️ ERREUR liée : tu référençais prixFinal qui valait 0 à ce stade (voir explication au début).
    // Maintenant qu'on utilise prixTotal calculé au fur et à mesure, la condition fonctionne correctement.
    if (jourSemaine === 2 && saison === 1) {
        prixTotal = prixTotal - 20; // Promo mardi basse saison
    }
    else if (prixTotal % 10 === 0) {
        prixTotal = prixTotal - 5;  // Bonus multiple de 10
    }

    // Prix minimum à 30€ (vérifié EN DERNIER, après toutes les offres)
    // ⚠️ ERREUR : Tu avais écrit "prixFinal === 30" avec trois "=".
    // Comme pour carteVisa, === est une COMPARAISON : ça compare sans rien modifier.
    // Pour AFFECTER une valeur, il faut un seul = : prixTotal = 30.
    if (prixTotal < 30) {
        prixTotal = 30;
    }

    // Affichage du résultat
    console.log(`Chambre ${txtTypeChbre}, ${txtJour} en ${txtSaison} pour ${nombrePersonnes} pers., ${txtPetitDejeuner}, ${txtFidelite}.`);
    console.log("Prix final : " + prixTotal + "€");
}

// ================================================================
// 📊 NOTE EXERCICE 2 : 9 / 20
// ----------------------------------------------------------------
// ✅ Points obtenus (9 pts) :
//
// ✅ +2 pts  Validations présentes et cohérentes
//           Les 4 contrôles (typeChbre, jourSemaine, saison, nombrePersonnes)
//           sont bien identifiés avec les bons opérateurs.
//
// ✅ +2 pts  Labels des jours et majoration week-end corrects
//           Tous les jours sont nommés, samedi et dimanche reçoivent bien +25€.
//
// ✅ +2 pts  Multiplicateurs de saison corrects
//           ×1,3 en moyenne saison et ×1,6 en haute saison bien appliqués.
//
// ✅ +2 pts  Logique petit-déjeuner correcte
//           12€ par personne, texte avec/sans, condition booléen bien écrite.
//
// ✅ +1 pt   Réduction fidélité correcte
//           ×0,85 (-15%) appliqué au bon moment avec le bon multiplicateur.
//
// ----------------------------------------------------------------
// ❌ Points retirés (-11 pts) :
//
// ❌ -3 pts  prixFinal calculé dès sa déclaration, avant toutes les variables
//           Tu avais écrit let prixFinal = (prixParSaison + majorationWeekend + ...)
//           tout en haut, au moment où ces variables valaient toutes 0.
//           Résultat : prixFinal était toujours 0, peu importe les données.
//
// ❌ -2 pts  Minimum 30€ non appliqué : "prixFinal === 30" est une comparaison,
//           pas une affectation. La valeur de prixFinal ne changeait jamais.
//           Il fallait écrire prixTotal = 30 (un seul =).
//
// ❌ -2 pts  Supplément personnes supplémentaires jamais calculé
//           Tu avais "supplémentParPersonne = 15 * nombrePersonneSupp" déclaré
//           en haut avec nombrePersonneSupp = 0, et tu écrivais juste
//           "supplémentParPersonne;" dans les conditions sans l'additionner.
//
// ❌ -2 pts  Capacité chambre supérieure trop restrictive
//           Tu vérifiais "nombrePersonne === 1 || nombrePersonne === 2",
//           ce qui n'accepte que 1 ou 2 personnes. Mais l'énoncé autorise
//           jusqu'à 3 personnes dans une chambre supérieure.
//           Résultat : 3 personnes en chambre supérieure affichait une erreur.
//
// ❌ -1 pt   Condition capacité de la suite toujours vraie
//           "nombrePersonne >= 1 || nombrePersonne <= 4" est vrai pour n'importe
//           quel nombre entier. Il fallait && (ET), mais c'est de toute façon
//           déjà couvert par la validation en amont.
//
// ❌ -1 pt   Offres spéciales référençaient prixFinal = 0
//           La condition "prixFinal % 10 === 0" était toujours vraie car
//           prixFinal valait 0 (0 est un multiple de 10).
// ================================================================

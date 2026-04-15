# Points à retravailler — JS Conditions

Ce fichier reprend chaque erreur identifiée dans tes exercices, avec une explication claire et des exemples à retenir.

---

## Point 1 — `=` vs `===` : affecter ou comparer ?

### 💡 Pour comprendre simplement
Imagine une étiquette sur un tiroir.
- `=` c'est **coller une nouvelle étiquette** : tu remplaces ce qui était écrit dessus.
- `===` c'est **lire l'étiquette** et demander : "est-ce qu'il y a bien écrit ce que j'attends ?"

Si dans ta condition tu écris `carteVisa = true`, c'est comme coller "VRAI" sur le tiroir sans regarder ce qu'il y avait avant. Après ça, le tiroir dit forcément "VRAI" — la comparaison est inutile, elle sera toujours vraie.
Il faut `===` pour **poser la question** sans rien modifier.

### Le problème
En JavaScript, le signe `=` ne **compare** pas — il **écrase** la valeur d'une variable. C'est une erreur très fréquente que même les développeurs expérimentés font parfois.

| Signe | Ce que ça fait | Utilisé dans |
|---|---|---|
| `=` | **Affecte** une valeur (remplace) | Déclarations, calculs |
| `==` | Compare avec conversion de type | À éviter |
| `===` | **Compare** sans conversion (strict) | Toujours dans les `if` |

### Ton erreur (Exercice 1)
```javascript
// ❌ FAUX — carteVisa est mis à true peu importe sa valeur réelle
if (carteVisa = true && typeCompte === 2) { ... }

// Résultat : la condition est toujours vraie, même si carteVisa était false
```

```javascript
// ✅ CORRECT — on compare carteVisa à true sans la modifier
if (carteVisa === true && typeCompte === 2) { ... }
// Ou plus simplement, puisque carteVisa est déjà un booléen :
if (carteVisa && typeCompte === 2) { ... }
```

### Ton erreur (Exercice 2)
```javascript
// ❌ FAUX — ce n'est pas une affectation, c'est une comparaison qui ne fait rien
if (prixFinal <= 30) { prixFinal === 30; }

// "prixFinal === 30" est une expression qui vaut true ou false,
// mais son résultat est ignoré. prixFinal ne change jamais.
```

```javascript
// ✅ CORRECT — un seul = pour affecter la valeur minimum
if (prixFinal < 30) { prixFinal = 30; }
```

### La règle à retenir
> **Dans un `if` → toujours `===`**
> **Pour modifier une variable → toujours `=`**
> Si tu vois `= true` ou `= false` dans une condition, c'est presque toujours une erreur.

---

## Point 2 — Chaîner les validations avec `else if`

### 💡 Pour comprendre simplement
Imagine un agent de sécurité à l'entrée d'un concert avec une checklist.
Avec des `if` séparés, il vérifie **toutes les cases même si la première est déjà ratée** : ticket invalide ? Il note. Pas la bonne salle ? Il note aussi. Mineur ? Il note encore. Et à la fin il te laisse quand même entrer car personne n'a dit "stop".

Avec `else if`, dès qu'il voit que le ticket est invalide, **il s'arrête là** et te renvoie chez toi. Les autres vérifications ne servent à rien si la première a déjà échoué.

### Le problème
Quand tu écris plusieurs `if` séparés, **ils s'exécutent tous dans l'ordre**, quoi qu'il arrive. Si le premier détecte une erreur, les suivants continuent quand même — et le calcul se lance malgré tout.

### Ton erreur (Exercice 1)
```javascript
// ❌ FAUX — 4 if séparés, tous exécutés en même temps
if (age < 0 || age > 120) {
    console.log("Âge invalide");
}
if (typeCompte < 1 || typeCompte > 4) {
    console.log("Type de compte invalide");
}
if (solde < -5000) {
    console.log("Découvert excessif");
}
// Si l'âge est invalide, les 3 autres if sont quand même évalués
// et le calcul des frais se lance quand même plus bas dans le code.
```

```javascript
// ✅ CORRECT — chaîne if / else if : dès qu'une erreur est trouvée, on s'arrête
if (age < 0 || age > 120) {
    console.log("Âge invalide");
}
else if (typeCompte < 1 || typeCompte > 4) {
    console.log("Type de compte invalide");
}
else if (solde < -5000) {
    console.log("Découvert excessif");
}
else {
    // Tout est valide → on calcule
}
```

### La règle à retenir
> Utilise `if` / `else if` / `else` quand les cas sont **mutuellement exclusifs** ou quand tu veux **stopper l'exécution** dès la première condition vraie.
> Utilise des `if` séparés uniquement quand chaque condition est **totalement indépendante** et doit être vérifiée dans tous les cas.

---

## Point 3 — Bornes inclusives et exclusives (`>` vs `>=`)

### 💡 Pour comprendre simplement
Sur l'autoroute, la limite est **130 km/h**. À exactement 130, tu es en règle. À 131, tu es en infraction.

Si le radar était programmé avec `>= 130`, il flasherait **dès 130 km/h**, alors que c'est autorisé. C'est exactement l'erreur que tu as faite : `age >= 120` flashe à 120 ans, qui est pourtant une valeur valide selon l'énoncé.

Avant d'écrire une borne, pose-toi la question : **"à la limite exacte, suis-je en faute ou pas ?"**

### Le problème
`>= 120` veut dire "supérieur OU ÉGAL à 120". Si la valeur limite autorisée est 120, alors `>= 120` exclut cette valeur par erreur. Il faut `> 120`.

### Tes erreurs (Exercice 1)

| Ta condition | Problème | Correction |
|---|---|---|
| `age >= 120` | Rejette l'âge 120 qui est valide | `age > 120` |
| `typeCompte <= 1` | Rejette le type 1 (compte jeune) ! | `typeCompte < 1` |
| `typeCompte >= 4` | Rejette le type 4 (compte senior) ! | `typeCompte > 4` |
| `solde <= -5000` | Rejette exactement -5000€ | `solde < -5000` |
| `solde <= 0` (découvert) | Inclut 0€ dans les découverts — un solde nul n'est pas un découvert | `solde < 0` |
| `nombreOperations <= 0` | Rejette 0 opération qui est valide | `nombreOperations < 0` |
| `nombreOperations >= 200` | Rejette exactement 200 opérations | `nombreOperations > 200` |

### La règle à retenir
> Avant d'écrire une borne, pose-toi la question :
> **"La valeur limite elle-même est-elle valide ?"**
> - OUI → utilise `<` ou `>` (strict, elle ne déclenche pas l'erreur)
> - NON → utilise `<=` ou `>=` (elle déclenche bien l'erreur)

```javascript
// Exemple : âge valide entre 0 et 120 inclus
// → erreur si STRICTEMENT en dehors de [0, 120]
if (age < 0 || age > 120) { console.log("invalide"); }
```

---

## Point 4 — Ne jamais calculer trop tôt

### 💡 Pour comprendre simplement
Imagine un serveur au restaurant qui calcule **l'addition dès que tu t'assieds**, avant même que tu commandes quoi que ce soit. Les plats valent 0€ à ce stade, donc l'addition est à 0€. Ensuite, peu importe ce que tu commandes, le total ne change pas — il a déjà été "figé" au moment où tu es arrivé.

C'est exactement ce que faisait ton code : `prixFinal` était calculé à la déclaration, quand toutes les variables valaient encore 0. Ensuite, même quand tu modifiais `prixParSaison` ou `majorationWeekend`, `prixFinal` s'en fichait complètement.

### Le problème
En JavaScript, le code s'exécute **ligne par ligne, de haut en bas**. Si tu calcules une valeur au moment de sa déclaration, elle utilise les valeurs des autres variables **au moment de cette ligne**, pas à la fin du programme.

### Ton erreur (Exercice 2)
```javascript
// ❌ FAUX — toutes ces variables valent 0 au moment où prixFinal est calculé
let prixParSaison     = 0;
let majorationWeekend = 0;
let supplémentPers    = 0;
let prixPetitDejeuner = 0;
let remiseFidelite    = 1;

// À cette ligne, le calcul donne : (0 + 0 + 0 + 0) * 1 = 0
let prixFinal = (prixParSaison + majorationWeekend + supplémentPers + prixPetitDejeuner) * remiseFidelite;

// Ensuite, même si tu modifies prixParSaison, ça ne change pas prixFinal.
// prixFinal reste 0 pour toujours.
if (saison === 2) { prixParSaison = 104; }  // Trop tard !
```

```javascript
// ✅ CORRECT — on déclare à 0, on modifie au fur et à mesure, on lit à la fin
let prixTotal = 0;

if (typeChbre === 2) { prixTotal = 80; }
if (saison === 3)    { prixTotal = prixTotal * 1.60; }
if (jourSemaine === 6) { prixTotal = prixTotal + 25; }
// prixTotal est correct à chaque étape car on le construit progressivement
```

### La règle à retenir
> **Déclare à 0 (ou à une valeur neutre), puis modifie au bon moment.**
> Ne jamais écrire `let x = a + b + c` si `a`, `b`, `c` seront calculés plus tard.

---

## Point 5 — Utiliser le résultat d'un calcul

### 💡 Pour comprendre simplement
Imagine que tu calcules le montant d'une remise dans ta tête, tu arrives au bon chiffre… mais tu ne le notes nulle part et tu reposes la calculatrice. Le calcul a bien eu lieu, mais le résultat est perdu.

C'est ce que faisait `supplémentParPersonne;` : JavaScript évalue la variable (il "regarde" sa valeur), mais comme personne ne lui dit quoi en faire, il la jette immédiatement. Pour que le calcul ait un effet, il faut explicitement dire **"ajoute ça au total"**.

### Le problème
Écrire le nom d'une variable seule sur une ligne **ne fait rien**. Une expression comme `supplémentParPersonne;` est évaluée puis oubliée — elle n'est ni affichée, ni ajoutée à quoi que ce soit.

### Ton erreur (Exercice 2)
```javascript
// ❌ FAUX — cette ligne ne fait rien du tout
if (nombrePersonneSupp === 1) {
    supplémentParPersonne;  // ← évalué, puis jeté. Aucun effet.
}
```

```javascript
// ✅ CORRECT — on additionne explicitement le supplément au prix total
if (nombrePersonnes > 2) {
    prixTotal = prixTotal + ((nombrePersonnes - 2) * 15);
}
```

### La règle à retenir
> Pour qu'un calcul ait un effet, il faut **l'assigner** à une variable ou **l'utiliser** dans une expression.
> `variableSeule;` → ne fait rien.
> `total = total + variableSeule;` → ajoute la valeur au total.

---

## Point 6 — Vérifier la compatibilité, pas modifier la donnée

### 💡 Pour comprendre simplement
Un douanier à la frontière **vérifie** ton passeport : il regarde si l'âge correspond au visa. Si ça ne correspond pas, il te renvoie. Il ne se met pas à **réécrire ton passeport** pour que ça corresponde.

Dans ton code, tu faisais l'équivalent du douanier qui recolle une nouvelle date sur le passeport : tu modifiais `typeCompte` pour le faire coller avec l'âge, au lieu de détecter l'incompatibilité et d'afficher une erreur. Le résultat ? L'erreur n'était jamais signalée, et le typeCompte original de l'utilisateur était silencieusement écrasé.

### Le problème
L'énoncé dit : "si le type de compte est incompatible avec l'âge, afficher une erreur". Il ne dit pas "changer le type de compte selon l'âge". Ces deux actions sont très différentes.

### Ton erreur (Exercice 1)
```javascript
// ❌ FAUX — tu MODIFIES typeCompte au lieu de VÉRIFIER sa compatibilité
if (age >= 12 && age <= 25) {
    typeCompte = 1;  // ← tu écrases la valeur saisie par l'utilisateur !
}
else if (age >= 60) {
    typeCompte = 4;  // ← pareil
}
else {
    console.log("Type de compte incompatible avec l'âge");
    // Ce message ne s'affiche que si l'âge n'est ni dans [12-25] ni >= 60
    // Et même quand il s'affiche, le calcul continue car il n'y a pas de else global
}
```

```javascript
// ✅ CORRECT — tu VÉRIFIES si le typeCompte reçu est compatible avec l'âge
else if (typeCompte === 1 && (age < 12 || age > 25)) {
    console.log("Type de compte incompatible avec l'âge");
    // Compte jeune demandé, mais l'âge n'est pas dans [12-25]
}
else if (typeCompte === 4 && age < 60) {
    console.log("Type de compte incompatible avec l'âge");
    // Compte senior demandé, mais l'âge est < 60
}
```

### La règle à retenir
> Avant d'écrire une condition, relis l'énoncé mot par mot.
> **"Vérifier si X est compatible avec Y"** → lire et comparer, ne pas modifier.
> **"Calculer X en fonction de Y"** → modifier, mettre à jour.
> La différence change complètement la logique du code.

---

## Point 7 — Attention aux valeurs initiales des variables

### 💡 Pour comprendre simplement
Imagine un caissier qui commence sa journée avec **-3€ dans la caisse** par habitude, "parce que c'est souvent ce qu'il y a". Si aucun client ne passe et qu'on ne remet jamais la caisse à zéro, elle affiche -3€ à la fin — un résultat faux sorti de nulle part.

C'est ce qui se passait avec `fraisTypeClient = -3` : pour un client avec un solde entre 0€ et 5000€ (ni privilégié ni découvert), aucune condition ne venait écraser ce -3. Résultat : une réduction de 3€ appliquée sans aucune raison, invisible dans le code à première lecture.

### Le problème
Quand tu initialises une variable avec une valeur non nulle, et que cette valeur n'est remplacée par aucune condition, elle "fuit" dans le calcul final sans que tu t'en rendes compte.

### Ton erreur (Exercice 1)
```javascript
// ❌ FAUX — fraisTypeClient est initialisé à -3
let fraisTypeClient = -3;  // ← valeur par défaut "accidentelle"

if (solde >= 5000 && solde < 10000) {
    fraisTypeClient = -3;  // client privilégié
}
else if (solde >= 10000) {
    fraisTypeClient = -5;  // grand client
}
else if (solde <= 0 && solde >= -1000) {
    fraisTypeClient = 5;   // découvert autorisé
}
else if (solde < -1000) {
    fraisTypeClient = 12;  // découvert important
}

// Problème : si le solde est entre 0€ et 5000€ (client "normal"),
// AUCUNE condition ne matche → fraisTypeClient reste à -3 !
// → tous les comptes normaux reçoivent une réduction de -3€ sans raison.
```

```javascript
// ✅ CORRECT — initialiser à 0 (valeur neutre) quand aucune condition = pas de frais
let fraisTypeClient = 0;  // par défaut : pas de frais supplémentaires

if (solde >= 10000)              { fraisTypeClient = -5; }
else if (solde >= 5000)          { fraisTypeClient = -3; }
else if (solde >= -1000 && solde < 0) { fraisTypeClient = 5; }
else if (solde < -1000)          { fraisTypeClient = 12; }
// Si solde entre 0 et 5000 : aucune condition → reste à 0. Correct !
```

### La règle à retenir
> **Initialise toujours les variables à leur valeur "neutre"** : `0` pour un nombre, `""` pour du texte, `false` pour un booléen.
> N'initialise à autre chose que si tu es **certain** que toutes les conditions possibles réaffectent la valeur.
> Demande-toi toujours : "et si aucune condition ne matche, que se passe-t-il ?"

---

## Point 8 — Lire l'énoncé attentivement : les paliers cumulatifs

### 💡 Pour comprendre simplement
Pense à l'impôt sur le revenu : si tu gagnes plus de 28 000€, tu paies 11%. Si tu gagnes plus de 75 000€, tu paies 11% **plus** 30% sur la tranche suivante — les deux s'appliquent, ils ne se remplacent pas.

Dans l'exercice, l'énoncé dit "+4€ pour >50 opérations, **puis** +8€ supplémentaires pour >100". Le mot "puis" et "supplémentaires" sont des signaux clairs : c'est cumulatif. Quelqu'un qui fait 120 opérations doit payer **12€** (les 4€ du premier palier + les 8€ du second), pas 8€.

### Le problème
Certains énoncés décrivent des frais **qui s'ajoutent** aux précédents (paliers cumulatifs), pas qui les **remplacent**. Il faut lire "puis" ou "en plus" comme un signal d'addition, pas de remplacement.

### Ton erreur (Exercice 1)
L'énoncé dit :
> "+4€ pour plus de 50 opérations, **puis** +8€ supplémentaires pour plus de 100 opérations"

Ce que ça veut dire :
- Entre 51 et 100 opérations : **+4€**
- Plus de 100 opérations : **+4€ + 8€ = +12€ au total**

```javascript
// ❌ FAUX — tu remplaces 4 par 8, au lieu d'ajouter 8 à 4
if (nombreOperations > 100) {
    fraisTypeOperations = 8;  // ← devrait être 12 (4 + 8)
}
else if (nombreOperations > 50) {
    fraisTypeOperations = 4;
}
```

```javascript
// ✅ CORRECT — on ajoute 12 pour > 100 (palier 1 + palier 2 cumulés)
if (nombreOperations > 100) {
    frais = frais + 12;  // +4 (palier >50) + +8 (palier >100)
}
else if (nombreOperations > 50) {
    frais = frais + 4;   // seulement le premier palier
}
```

### La règle à retenir
> À chaque palier de l'énoncé, demande-toi : **"ce montant s'ajoute-t-il ou remplace-t-il le précédent ?"**
> Les mots clés qui signifient "cumulatif" : *puis*, *en plus*, *supplémentaire*, *au-delà*.
> Dans ce cas, **additionne tous les paliers** atteints.

---

## Point 9 — `||` vs `&&` dans les conditions de fourchette

### 💡 Pour comprendre simplement
Pour entrer dans une boîte de nuit, le videur vérifie que tu as entre 18 et 35 ans (limite fictive). Il dit : **"tu dois avoir AU MOINS 18 ans ET AU PLUS 35 ans"** → les deux conditions avec **ET**.

Si par erreur il disait **"au moins 18 ans OU au plus 35 ans"**, tout le monde entrerait : un enfant de 8 ans passerait car il a ≤ 35 ans. Un centenaire passerait car il a ≥ 18 ans. Il n'existe personne qui ne soit ni l'un ni l'autre.

C'est exactement le bug de `nombrePersonne >= 1 || nombrePersonne <= 4` : avec `||`, **toute valeur** satisfait au moins une des deux conditions, donc la vérification ne filtre rien du tout.

### Le problème
Pour vérifier qu'une valeur est **dans** un intervalle, il faut `&&` (ET).
Pour vérifier qu'elle est **hors** d'un intervalle, il faut `||` (OU).

### Ton erreur (Exercice 2)
```javascript
// ❌ FAUX — cette condition est TOUJOURS vraie
if (nombrePersonne >= 1 || nombrePersonne <= 4) {
    // Quel nombre entier n'est pas >= 1 OU pas <= 4 ?
    // Un nombre négatif est <= 4. Un grand nombre est >= 1.
    // Il n'existe aucune valeur pour laquelle les DEUX sont faux en même temps.
    // → la condition est toujours vraie pour n'importe quelle valeur entière.
}
```

```javascript
// ✅ CORRECT — pour vérifier qu'on EST dans l'intervalle [1, 4] :
if (nombrePersonne >= 1 && nombrePersonne <= 4) { ... }  // dans l'intervalle

// ✅ CORRECT — pour vérifier qu'on EST HORS de l'intervalle [1, 4] :
if (nombrePersonne < 1 || nombrePersonne > 4) { ... }    // hors de l'intervalle
```

### La règle à retenir

| Objectif | Opérateur | Exemple |
|---|---|---|
| Vérifier qu'on est **dans** [a, b] | `&&` | `x >= a && x <= b` |
| Vérifier qu'on est **hors** de [a, b] | `\|\|` | `x < a \|\| x > b` |

> **Astuce mnémotechnique** :
> - `&&` (ET) → les DEUX conditions doivent être vraies → utile pour un intervalle
> - `||` (OU) → au moins l'une est vraie → utile pour détecter une sortie de bornes

---

## Point 10 — Énumérer les valeurs valides vs utiliser une borne

### 💡 Pour comprendre simplement
Tu fais une liste de courses : "pain, lait, beurre". Tu oublies les œufs. Résultat : tu rentres sans œufs alors que tu en avais besoin.

À l'inverse, si tu dis à quelqu'un **"achète tout, sauf les bonbons"**, et que tu oublies de mentionner les œufs dans ta liste d'exceptions, il les achète quand même — car tout ce qui n'est pas interdit est autorisé.

En code, lister `=== 1 || === 2` pour autoriser est comme la liste de courses : fragile, tu peux oublier une valeur. Tester `> 3` pour bloquer les invalides est comme la règle d'exception : robuste, les valeurs valides non citées passent automatiquement.

### Le problème
Quand un type accepte un nombre de personnes **jusqu'à N**, il est tentant de lister chaque valeur valide une par une. Mais si tu en oublies une, elle devient invalide sans raison. Une borne (`<= N` ou `> N`) est plus sûre et plus lisible.

### Ton erreur (Exercice 2 — chambre supérieure)
L'énoncé dit : la chambre supérieure accepte **1, 2 ou 3 personnes**.

```javascript
// ❌ FAUX — tu listes seulement 1 et 2, 3 personnes déclenche une erreur
if (nombrePersonne === 1 || nombrePersonne === 2) {
    prixInitial = prix + majorationPrixSup;
} else {
    console.log("ERREUR : Nombre de personnes incompatible");
    // → une réservation pour 3 personnes affiche une erreur à tort
}
```

```javascript
// ✅ CORRECT — on vérifie la condition INVALIDE avec une borne
else if (typeChbre === 3 && nombrePersonnes > 3) {
    console.log("Nombre de personnes incompatible avec le type de chambre");
    // → 1, 2 et 3 personnes passent, 4 et plus déclenchent l'erreur
}
```

### Comparer les deux approches

| Approche | Code | Risque |
|---|---|---|
| Énumération des valeurs valides | `=== 1 \|\| === 2` | Oubli d'une valeur → refus à tort |
| Borne sur la valeur invalide | `> 3` | Aucune valeur valide ne peut être oubliée |

### La règle à retenir
> Quand l'énoncé dit **"de 1 à N personnes"**, traduis-le par `> N` pour détecter l'erreur — ne liste pas chaque valeur valide.
> **Lister les cas valides** est fragile : tu risques d'en oublier un.
> **Tester le cas invalide** avec une borne est robuste : tout ce qui n'est pas interdit est autorisé.

---

## Résumé des points à retravailler

| # | Concept | Erreur type | Exercice |
|---|---|---|---|
| 1 | `=` vs `===` | Affectation dans un `if` | Ex1 + Ex2 |
| 2 | `if` vs `else if` | Validations non stoppées | Ex1 + Ex2 |
| 3 | Bornes inclusives/exclusives | `>=` au lieu de `>` | Ex1 |
| 4 | Ordre de calcul | Calcul trop tôt (valeurs à 0) | Ex2 |
| 5 | Utiliser un résultat | Expression évaluée mais jamais utilisée | Ex2 |
| 6 | Vérifier vs modifier | Logique inversée (âge/typeCompte) | Ex1 |
| 7 | Valeur initiale | Défaut non neutre → fuite dans le calcul | Ex1 |
| 8 | Paliers cumulatifs | Remplacement au lieu d'addition | Ex1 |
| 9 | `\|\|` vs `&&` | Condition de fourchette toujours vraie | Ex2 |
| 10 | Énumération vs borne | Whitelist incomplète → valeur valide rejetée | Ex2 |

---

## Un mot pour finir

Sérieux, **chapeau d'être allé jusqu'au bout.** Un exercice de frais bancaires avec des types de comptes, des tranches de solde, des paliers d'opérations et une carte Visa. Et dans la foulée, un exercice de tarification hôtel avec des saisons, une majoration week-end, un supplément par personne, un petit-déjeuner, une remise fidélité et des offres spéciales. T'as pas regardé ça et laissé tomber. T'as ouvert un fichier, t'as écrit du code, t'as essayé. C'est déjà une vraie qualité.

**8/20 et 9/20**, ouais. Je sais ce que ça fait à lire. Mais avant de te braquer là-dessus, regarde ce que ces notes représentent vraiment. T'avais les bons blocs dans le bon ordre : la validation des données en premier, la compatibilité âge/compte ensuite, puis les frais de base, puis les ajustements. T'avais compris qu'il fallait séparer la logique proprement. C'est exactement ce qu'on te demande de faire. T'avais les bons labels (`labelCompte`, `typeClient`), les bons commentaires pour marquer les sections, les bonnes variables pour chaque étape. La structure était là. Ce qui a coûté des points, c'est pas une incompréhension du problème. C'est des erreurs de précision sur les détails.

Et ces détails, regardons-les en face. `carteVisa = true` dans un `if` au lieu de `carteVisa === true` : un seul caractère de différence, et pourtant la condition était toujours vraie, peu importe ce que valait la carte. `prixFinal === 30` au lieu de `prixFinal = 30` : même principe, sens complètement inversé, tu comparais au lieu d'affecter alors le minimum ne s'appliquait jamais. `fraisTypeClient` initialisé à `-3` alors que pour un client avec un solde entre 0€ et 5000€, aucune condition ne le réécrasait. Résultat : une réduction fantôme de 3€ sur tous les comptes normaux. `prixFinal` calculé dès sa déclaration alors que toutes les variables valaient encore 0. `supplémentParPersonne;` écrit seul sur une ligne, évalué puis jeté dans le vide. `fraisTypeOperations = 8` pour plus de 100 opérations, alors que l'énoncé disait "+4€ puis +8€ supplémentaires", soit 12€ au total.

Ce que ces erreurs ont en commun ? Elles sont **toutes logiques**. Chacune fait sens dans la tête de celui qui les écrit. Le `=` dans une condition, c'est intuitif : on a l'habitude que `=` ça relie une valeur à quelque chose. Initialiser une variable à la valeur qu'elle aura "souvent", ça paraît raisonnable. Calculer un total dès la déclaration, ça ressemble à quelque chose de propre. C'est JavaScript qui a ses propres règles, et tu es en train de les apprendre. C'est exactement ça, apprendre à coder.

Ce qui compte maintenant, c'est de pas laisser ces 10 points prendre la poussière. Relis-les régulièrement, même vite. Et surtout : **refais ces deux exercices depuis zéro sans regarder la correction.** La deuxième fois, tu vas voir ce que ça fait quand les réflexes commencent à se mettre en place, quand tu écris `if (carteVisa` et que tu t'arrêtes automatiquement pour vérifier que tu mets bien `===`. Ce moment-là, c'est le début de quelque chose.

Parce que coder, c'est exactement ça : accumuler des petits réflexes jusqu'à ce qu'ils deviennent automatiques. T'as déjà la façon de penser, t'as déjà la structure. Il reste à polir les détails, ça se polit avec la pratique.

**Lâche pas. T'es clairement sur la bonne voie.**

Et une dernière chose : ouais, j'ai trouvé un poste. Mais ça veut pas dire que je te laisse tomber, pas du tout. On va continuer à avancer ensemble, différemment de ces deux-trois premiers mois, mais on va continuer. T'es pas tout seul là-dedans. On va y arriver.

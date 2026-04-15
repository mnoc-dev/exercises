# Exercices JavaScript - Conditions Complexes

## Notions nécessaires pour ces exercices

### Notions de base
Pour réaliser ces exercices, vous devez maîtriser les notions suivantes :
- Les variables (`let`)
- Les booléens (`true`/`false`)
- Les opérateurs de comparaison (`<`, `>`, `<=`, `>=`, `===`, `!==`)
- Les opérateurs logiques (`&&`, `||`)
- Les conditions (`if`, `else if`, `else`)
- L'opérateur modulo (`%`)
- Les opérations mathématiques (addition, soustraction, multiplication, division)
- La concaténation de texte (`+`)
- L'affichage dans la console (`console.log()`)

**📖 Référez-vous au fichier ["Exercices JS 2ème Vague.md"](Exercices%20JS%202ème%20Vague.md) pour les explications détaillées de ces notions.**

---

### Notions supplémentaires

#### 1. Les calculs de pourcentages
**Utilisé dans :** Exercices 2 et 3

**Ajouter un pourcentage :**
```javascript
let prix = 100;
let prixAvecMajoration = prix + (prix * 0.30);  // +30% → 100 + 30 = 130
// Ou plus simplement :
let prixAvecMajoration = prix * 1.30;  // prix × 1.30 = 130
```

**Retirer un pourcentage :**
```javascript
let prix = 100;
let prixAvecReduction = prix - (prix * 0.15);  // -15% → 100 - 15 = 85
// Ou plus simplement :
let prixAvecReduction = prix * 0.85;  // prix × 0.85 = 85
```

**Tableau de correspondance :**
| Opération | Calcul détaillé | Formule simplifiée |
|-----------|----------------|-------------------|
| +10% | `prix + (prix * 0.10)` | `prix * 1.10` |
| +25% | `prix + (prix * 0.25)` | `prix * 1.25` |
| +30% | `prix + (prix * 0.30)` | `prix * 1.30` |
| +60% | `prix + (prix * 0.60)` | `prix * 1.60` |
| -15% | `prix - (prix * 0.15)` | `prix * 0.85` |
| -20% | `prix - (prix * 0.20)` | `prix * 0.80` |

---

#### 2. Les nombres décimaux
**Utilisé dans :** Exercice 3

JavaScript peut travailler avec des nombres décimaux (nombres à virgule flottante) :
```javascript
let parts = 1.5;
let taux = 0.66;
let resultat = 10 / 3;  // = 3.3333333...
```

**⚠️ Attention :** En JavaScript, on utilise le **point** (`.`) et non la virgule (`,`) pour les décimales.

---

#### 3. L'ordre des opérations mathématiques
**Utilisé dans :** Exercice 3

Comme en mathématiques, JavaScript respecte l'ordre des opérations :
1. **Parenthèses** `()` en premier
2. **Multiplication** `*` et **Division** `/`
3. **Addition** `+` et **Soustraction** `-`

```javascript
let a = 10 + 5 * 2;        // = 20 (pas 30 !)
let b = (10 + 5) * 2;      // = 30 (les parenthèses d'abord)
let c = 100 - 50 / 2;      // = 75 (pas 25 !)
let d = (100 - 50) / 2;    // = 25
```

**💡 Conseil :** Utilisez des parenthèses pour rendre vos calculs plus clairs, même si ce n'est pas obligatoire.

---

#### 4. Méthodologie : Variables intermédiaires
**Utilisé dans :** Tous les exercices (essentiel pour l'exercice 3)

Pour les calculs complexes en plusieurs étapes, **créez une variable pour chaque étape** :

```javascript
// ❌ Difficile à lire et à débugger :
let resultat = ((100 - 20) / 4) * 0.15 * 4 + (50 * 0.30);

// ✅ Clair et facile à suivre :
let montantInitial = 100 - 20;  // = 80
let nombreParts = 4;
let quotient = montantInitial / nombreParts;  // = 20
let tauxApplique = quotient * 0.15;  // = 3
let montantBase = tauxApplique * nombreParts;  // = 12
let supplement = 50 * 0.30;  // = 15
let resultat = montantBase + supplement;  // = 27
```

**Avantages :**
- ✅ Plus facile à comprendre
- ✅ Plus facile à débugger (vous pouvez afficher chaque variable avec `console.log()`)
- ✅ Moins d'erreurs de calcul

---

#### 5. Les nombres négatifs
**Utilisé dans :** Exercices 1 et 3

JavaScript peut travailler avec des nombres négatifs (précédés du signe `-`) :
```javascript
let temperature = -15;  // 15 degrés sous zéro
let altitude = -200;    // 200 mètres sous le niveau de la mer
let difference = -50;   // Une perte de 50 points
```

**Comparaison de nombres négatifs :**
```javascript
-10 > -20     // true (car -10 est plus proche de zéro)
-50 < 0       // true (les négatifs sont inférieurs à zéro)
-100 < -50    // true (-100 est "plus négatif")
```

**⚠️ Attention :** Plus un nombre négatif est "grand" en valeur absolue, plus il est petit !
- `-100` est **plus petit** que `-50`
- `-50` est **plus petit** que `-10`
- Tous les nombres négatifs sont **plus petits** que zéro

**Opérations avec des négatifs :**
```javascript
let valeur = -50;
let ajout = 20;
let nouvelleValeur = valeur + ajout;  // -50 + 20 = -30

let montant = -30;
let retrait = 15;
let resultat = montant - retrait;     // -30 - 15 = -45
```

**Exemples de comparaisons pratiques :**
```javascript
let nombre = -75;

if (nombre < -100) {
    console.log("Très négatif");
} else if (nombre < 0) {
    console.log("Négatif modéré");
} else {
    console.log("Positif ou zéro");
}
// Affiche : "Négatif modéré"
```

---

#### 6. Les conditions imbriquées (if dans if)
**Utilisé dans :** Tous les exercices (essentiel !)

Une condition imbriquée, c'est une condition **à l'intérieur** d'une autre condition :

```javascript
let age = 20;
let statut = "etudiant";

// D'abord on vérifie le statut
if (statut === "etudiant") {
    // PUIS à l'intérieur, on vérifie l'âge
    if (age >= 18 && age <= 25) {
        console.log("Tarif étudiant applicable");
    } else {
        console.log("Âge non compatible avec le statut étudiant");
    }
}
```

**Pourquoi imbriquer ?**
- Pour vérifier des conditions **dans un contexte spécifique**
- Pour appliquer des règles qui **dépendent d'autres règles**

**Exemple complexe avec plusieurs niveaux :**
```javascript
let categorie = "A";
let points = 85;
let bonus = false;

if (categorie === "A") {
    // Niveau 1 : Catégorie A
    if (points >= 80) {
        // Niveau 2 : Points suffisants
        if (bonus) {
            // Niveau 3 : Avec bonus
            console.log("Niveau Expert");
        } else {
            // Niveau 3 : Sans bonus
            console.log("Niveau Avancé");
        }
    } else {
        console.log("Points insuffisants");
    }
}
```

**💡 Conseil :** Pour ne pas se perdre :
1. Commentez chaque niveau d'imbrication
2. Indentez correctement votre code (utilisez la touche Tab)
3. Utilisez des variables intermédiaires pour simplifier

**Exemple avec variable intermédiaire pour éviter trop d'imbrication :**
```javascript
let note = 15;
let niveau = 3;
let assiduite = true;

// ❌ Trop imbriqué, difficile à lire :
if (niveau === 3) {
    if (note >= 12) {
        if (assiduite) {
            console.log("Admis avec mention");
        }
    }
}

// ✅ Meilleur : on calcule d'abord les conditions combinées
let niveauReussi = (niveau === 3) && (note >= 12);
if (niveauReussi && assiduite) {
    console.log("Admis avec mention");
}
```

---

## Exercice 1 : Calcul de Frais Bancaires Mensuels

### Conseil
Procédez étape par étape : vérifiez d'abord les cas invalides, puis calculez les frais de base selon le type de compte, et enfin appliquez les réductions ou majorations dans le bon ordre. Utilisez des conditions imbriquées et combinez les opérateurs `&&` et `||`.
con
### Énoncé
Vous devez calculer les frais bancaires mensuels d'un compte selon plusieurs critères. Vous avez les variables suivantes :
- `age` : l'âge du titulaire du compte
- `typeCompte` : un nombre de 1 à 4 (1 = compte jeune, 2 = compte standard, 3 = compte premium, 4 = compte senior)
- `solde` : le solde du compte en euros
- `nombreOperations` : le nombre d'opérations effectuées dans le mois (entre 0 et 200)
- `carteVisa` : `true` si le client a une carte Visa, `false` sinon

Créez une variable `frais` qui contiendra le montant des frais mensuels selon ces règles :

**Cas invalides :**
- Si l'âge est inférieur à 0 ou supérieur à 120 : afficher `"Âge invalide"` et ne pas calculer de frais
- Si le typeCompte n'est pas entre 1 et 4 : afficher `"Type de compte invalide"` et ne pas calculer de frais
- Si le solde est inférieur à -5000 : afficher `"Découvert excessif - compte bloqué"` et ne pas calculer de frais
- Si le nombreOperations est inférieur à 0 ou supérieur à 200 : afficher `"Nombre d'opérations invalide"` et ne pas calculer de frais

**Frais de base selon le type de compte :**
- Compte jeune (typeCompte === 1) : 0€
- Compte standard (typeCompte === 2) : 8€
- Compte premium (typeCompte === 3) : 15€
- Compte senior (typeCompte === 4) : 3€

**Règles de compatibilité âge/type de compte :**
- Le compte jeune (type 1) n'est accessible QUE si l'âge est entre 12 et 25 ans (inclus)
- Le compte senior (type 4) n'est accessible QUE si l'âge est 60 ans ou plus
- Si ces règles ne sont pas respectées : afficher `"Type de compte incompatible avec l'âge"` et ne pas calculer de frais

**Ajustements selon le solde (à appliquer APRÈS les frais de base) :**
1. Si le solde est supérieur ou égal à 5000€ : -3€ sur les frais (client privilégié)
2. Si le solde est supérieur ou égal à 10000€ : -5€ sur les frais au lieu de -3€ (grand client)
3. Si le solde est entre -1000€ et 0€ (découvert autorisé) : +5€ sur les frais
4. Si le solde est inférieur à -1000€ (découvert important) : +12€ sur les frais

**Ajustements selon les opérations (à appliquer APRÈS les ajustements de solde) :**
1. Si nombreOperations est supérieur à 50 ET que le compte n'est pas premium (type 3) : +4€ (frais pour opérations nombreuses)
2. Si nombreOperations est supérieur à 100 ET que le compte n'est pas premium : +8€ supplémentaires (donc +12€ au total par rapport à la base)

**Frais de carte (à ajouter APRÈS tous les autres ajustements) :**
- Si carteVisa est `true` ET que le compte est standard (type 2) : +3€
- Si carteVisa est `true` ET que le compte est jeune (type 1) : +1€
- Les comptes premium et senior ont la carte Visa incluse (pas de frais supplémentaires)

**Règles importantes :**

- Les réductions pour solde élevé ne sont pas cumulables (on prend la meilleure)
- Les majorations pour découvert ne sont pas cumulables (on prend celle qui correspond)
- Les frais ne peuvent jamais être inférieurs à 0€ (pas de frais négatifs)
- Pour le compte jeune (type 1) : les frais de base sont à 0€, mais les majorations (découvert, opérations) et les frais de carte s'ajoutent normalement

À la fin, affichez les frais avec `console.log()` (ou le message d'erreur si les données sont invalides).

**Exemples de calculs :**
- Compte jeune, 20 ans, solde 500€, 10 opérations, sans carte : 0€
- Compte standard, 35 ans, solde 2000€, 30 opérations, avec carte : 8€ + 3€ = 11€
- Compte premium, 40 ans, solde 8000€, 80 opérations : 15€ - 3€ = 12€
- Compte standard, 45 ans, solde -500€, 60 opérations, sans carte : 8€ + 5€ + 4€ = 17€
- Compte senior, 68 ans, solde 12000€, 20 opérations, avec carte : 3€ - 5€ = 0€ (minimum 0€)
- Compte jeune, 18 ans, solde -200€, 60 opérations, avec carte : 0€ + 5€ (découvert) + 4€ (opérations) + 1€ (carte) = 10€
 
---

## Exercice 2 : Tarification Hôtel - Chambre et Petit-Déjeuner

### Conseil
Commencez par valider les données

, puis calculez le prix de base de la chambre,

ensuite ajoutez les suppléments, 

appliquez les réductions,

et enfin 

vérifiez le prix minimum.

Pensez à l'ordre des opérations 

pour que les
pourcentages soient appliqués au bon moment.

### Énoncé
Vous devez calculer le prix total d'une nuitée d'hôtel 
avec petit-déjeuner
selon plusieurs critères.

Vous avez les variables suivantes :

- `typeChbre` : un nombre de 1 à 4 (1 = économique, 2 = standard, 3 = supérieure, 4 = suite)
- `jourSemaine` : un nombre de 1 à 7 (1 = lundi, 2 = mardi, ..., 7 = dimanche)
- `saison` : un nombre de 1 à 3 (1 = basse saison, 2 = moyenne saison, 3 = haute saison)
- `nombrePersonnes` : le nombre de personnes dans la chambre (entre 1 et 4)
- `petitDejeuner` : `true` si les clients souhaitent le petit-déjeuner, `false` sinon
- `fidelite` : `true` si le client a la carte de fidélité, `false` sinon

Créez une variable `prixTotal
` qui contiendra le prix final 

selon ces règles :

**Cas invalides :**
- Si typeChbre n'est pas entre 1 et 4 : afficher `"Type de chambre invalide"` et ne pas calculer de prix
- Si jourSemaine n'est pas entre 1 et 7 : afficher `"Jour invalide"` et ne pas calculer de prix
- Si saison n'est pas entre 1 et 3 : afficher `"Saison invalide"` et ne pas calculer de prix
- Si nombrePersonnes est inférieur à 1 ou supérieur à 4 : afficher `"Nombre de personnes invalide"` et ne pas calculer de prix

**Prix de base de la chambre selon le type (en basse saison) :**
- Économique (type 1) : 50€
- Standard (type 2) : 80€
- Supérieure (type 3) : 120€
- Suite (type 4) : 200€

**Règles de capacité :**
- Les chambres économiques (type 1) acceptent UNIQUEMENT 1 ou 2 personnes
- Les chambres standard (type 2) acceptent UNIQUEMENT 1 ou 2 personnes
- Les chambres supérieures (type 3) acceptent de 1 à 3 personnes
- Les suites (type 4) acceptent de 1 à 4 personnes
- Si ces règles ne sont pas respectées : afficher `"Nombre de personnes incompatible avec le type de chambre"` et ne pas calculer de prix

**Majoration selon la saison (à appliquer sur le prix de base) :**
- Basse saison (saison === 1) : pas de majoration
- Moyenne saison (saison === 2) : +30% sur le prix de base
- Haute saison (saison === 3) : +60% sur le prix de base

**Majoration week-end (à appliquer APRÈS la majoration de saison) :**
- Si jourSemaine est 6 (samedi) OU 7 (dimanche) : +25€ supplémentaires sur le prix

**Supplément personnes supplémentaires (à ajouter APRÈS les majorations) :**
- Si nombrePersonnes est supérieur à 2 : +15€ par personne supplémentaire
  - Exemple : 3 personnes = +15€, 4 personnes = +30€

**Prix du petit-déjeuner (à ajouter à la fin) :**
- Si petitDejeuner est `true` : +12€ par personne
  - Exemple : 3 personnes avec petit-déjeuner = +36€

**Réduction fidélité (à appliquer sur le prix FINAL) :**
- Si fidelite est `true` : -15% sur le prix total final
- Cette réduction s'applique sur le prix de la chambre ET le prix du petit-déjeuner

**Offres spéciales (à appliquer APRÈS la réduction fidélité) :**
- Si c'est un mardi (jour === 2) ET que c'est la basse saison (saison === 1) : -20€ sur le prix final (promotion jour calme)
- Si le prix final (après toutes réductions) est un multiple de 10 : -5€ supplémentaires (petit bonus)

**Prix minimum (à vérifier EN DERNIER) :**
- Si le prix final (après toutes majorations, réductions et offres) est inférieur à 30€ : le prix devient 30€

**Règles importantes :**
- Les majorations de saison se calculent en pourcentage du prix de base
- La réduction fidélité s'applique sur le prix total incluant tous les suppléments
- Les offres spéciales ne se cumulent pas entre elles
- Le prix minimum de 30€ s'applique EN DERNIER, après toutes les autres règles

À la fin, affichez le prix total avec `console.log()` (ou le message d'erreur si les données sont invalides).

**Exemples de calculs :**
- Chambre économique, jeudi, basse saison, 2 personnes, sans petit-déj, sans fidélité : 50€
- Chambre standard, samedi, haute saison, 2 personnes, avec petit-déj, sans fidélité : 80€ + 60% = 128€, +25€ (we) = 153€, +24€ (pdj) = 177€
- Chambre supérieure, lundi, moyenne saison, 3 personnes, sans petit-déj, avec fidélité : 120€ + 30% = 156€, +15€ (3e pers.) = 171€, -15% = 145,35€
- Suite, dimanche, haute saison, 4 personnes, avec petit-déj, avec fidélité : 200€ + 60% = 320€, +25€ (we) = 345€, +30€ (4 pers.) = 375€, +48€ (pdj) = 423€, -15% = 359,55€
- Chambre économique, mardi, basse saison, 1 personne, sans petit-déj, sans fidélité : 50€ - 20€ (promo) = 30€

---

## Exercice 3 : Calcul d'Impôt sur le Revenu (Barème Progressif)

### Conseil
Cet exercice est le plus complexe ! Procédez méthodiquement : validez les données, calculez le nombre de parts fiscales, déterminez le revenu imposable par part, calculez l'impôt par tranches progressives, multipliez par le nombre de parts, appliquez les réductions/crédits d'impôt, et enfin les plafonnements. **Utilisez des variables intermédiaires pour chaque étape !**

### Énoncé
Vous devez calculer l'impôt sur le revenu d'un contribuable selon le système de barème progressif. Vous avez les variables suivantes :
- `revenuAnnuel` : le revenu annuel brut du contribuable en euros (entre 0 et 500000)
- `situationFamiliale` : un nombre de 1 à 5 (1 = célibataire, 2 = marié, 3 = divorcé, 4 = veuf, 5 = pacsé)
- `nombreEnfants` : le nombre d'enfants à charge (entre 0 et 10)
- `montantDons` : le montant des dons aux associations en euros (entre 0 et 50000)
- `fraisSante` : les frais de santé non remboursés en euros (entre 0 et 20000)
- `travailleurHandicape` : `true` si le contribuable est en situation de handicap, `false` sinon

Créez une variable `impot` qui contiendra le montant de l'impôt final selon ces règles :

**Cas invalides :**
- Si le revenuAnnuel est inférieur à 0 ou supérieur à 500000 : afficher `"Revenu invalide"` et ne pas calculer d'impôt
- Si situationFamiliale n'est pas entre 1 et 5 : afficher `"Situation familiale invalide"` et ne pas calculer d'impôt
- Si nombreEnfants est inférieur à 0 ou supérieur à 10 : afficher `"Nombre d'enfants invalide"` et ne pas calculer d'impôt
- Si montantDons est inférieur à 0 ou supérieur à 50000 : afficher `"Montant des dons invalide"` et ne pas calculer d'impôt
- Si fraisSante est inférieur à 0 ou supérieur à 20000 : afficher `"Frais de santé invalides"` et ne pas calculer d'impôt

**ÉTAPE 1 : Calcul du nombre de parts fiscales**

Le nombre de parts dépend de la situation familiale et du nombre d'enfants :

**Parts de base selon la situation :**
- Célibataire (1), Divorcé (3) : 1 part
- Marié (2), Pacsé (5) : 2 parts
- Veuf (4) : 1,5 part (sauf s'il a des enfants, alors 2 parts)

**Parts supplémentaires pour les enfants :**
- 1er enfant : +0,5 part
- 2ème enfant : +0,5 part (total avec 2 enfants = +1 part)
- 3ème enfant et suivants : +1 part par enfant

**Attention :** Pour un célibataire1, divorcé3 ou veuf4 avec enfant(s) :
- Premier enfant : +1 part (au lieu de 0,5)
- Deuxième enfant et suivants : +0,5 part par enfant

**ÉTAPE 2 : Calcul du revenu imposable**

Le revenu imposable = `revenuAnnuel` MOINS les déductions suivantes :
- Si fraisSante est supérieur à 3000€ : déduire `(fraisSante - 3000)` du revenu (uniquement la partie au-dessus de 3000€)
- Si le contribuable est travailleurHandicape : déduire 5000€ du revenu (abattement handicap)

**ÉTAPE 3 : Calcul du quotient familial**

Quotient familial = `revenuImposable / nombreDeParts`

C'est sur ce montant que s'applique le barème progressif.

**ÉTAPE 4 : Calcul de l'impôt par tranches progressives**

Le barème progressif s'applique tranche par tranche sur le quotient familial :

| Tranche | Revenu du quotient | Taux |
|---------|-------------------|------|
| 1 | De 0€ à 10000€ | 0% |
| 2 | De 10001€ à 25000€ | 10% |
| 3 | De 25001€ à 50000€ | 20% |
| 4 | De 50001€ à 100000€ | 30% |
| 5 | Au-dessus de 100000€ | 40% |

**Comment calculer par tranches :**
- Si quotient = 15000€ : 
  - 0% sur les 10000 premiers = 0€
  - 10% sur les 5000 suivants (10001 à 15000) = 500€
  - Total = 500€

- Si quotient = 60000€ :
  - 0% sur 10000 = 0€
  - 10% sur 15000 (10001 à 25000) = 1500€
  - 20% sur 25000 (25001 à 50000) = 5000€
  - 30% sur 10000 (50001 à 60000) = 3000€
  - Total = 9500€

**ÉTAPE 5 : Calcul de l'impôt brut total**

Impôt brut = `impôtParTranche × nombreDeParts`

**ÉTAPE 6 : Réduction pour dons aux associations**

Si montantDons est supérieur à 0 :
- Réduction = 66% du montant des dons
- Cette réduction est plafonnée à 20% de l'impôt brut
- Déduire cette réduction de l'impôt brut

**ÉTAPE 7 : Crédit d'impôt pour personne en situation de handicap**

Si travailleurHandicape est `true` ET que le revenuAnnuel est inférieur à 50000€ :
- Crédit d'impôt = 500€
- Déduire ce crédit de l'impôt (après la réduction pour dons)

**ÉTAPE 8 : Plafonnement et vérifications finales**

Appliquez ces vérifications dans l'ordre suivant :

1. **Réduction familles nombreuses :** Si nombreEnfants >= 3 ET que l'impôt (après étape 7) est supérieur à 3000€ : réduction supplémentaire de 10%

2. **Vérification impôt négatif :** Si l'impôt est négatif :
   - Si travailleurHandicape est `true` : le crédit d'impôt est remboursable, l'impôt peut rester négatif
   - Sinon : l'impôt = 0€ (pas d'impôt négatif sans crédit remboursable)

**Règles importantes :**
- Le calcul par tranches est cumulatif : on ne paie PAS le taux maximum sur tout le revenu
- Les déductions s'appliquent AVANT le calcul des tranches
- Les réductions s'appliquent APRÈS le calcul de l'impôt brut
- L'ordre des étapes est CRUCIAL pour arriver au bon résultat
- Utilisez des variables intermédiaires pour ne pas vous perdre !

À la fin, affichez l'impôt avec `console.log()` (ou le message d'erreur si les données sont invalides).

**Exemples de calculs simplifiés :**
- Célibataire, 0 enfant, 8000€ de revenu, 0 don, 0 frais santé, non handicapé : 
  - 1 part → quotient 8000€ → tranche 1 uniquement → 0€ d'impôt
  
- Célibataire, 0 enfant, 30000€ de revenu, 0 don, 0 frais santé, non handicapé :
  - 1 part → quotient 30000€
  - 0€ sur 10000 + 1500€ sur 15000 (tranche 2) + 1000€ sur 5000 (tranche 3) = 2500€
  
- Marié, 2 enfants, 80000€ de revenu, 1000€ de dons, 0 frais santé, non handicapé :
  - 2 parts + 1 part (2 enfants) = 3 parts → quotient 26666€
  - 0€ + 1500€ + 333€ = 1833€ par part → 1833 × 3 = 5499€
  - Réduction dons = 660€ (plafonnée à 20% de 5499 = 1099€) → 660€
  - Impôt final = 5499€ - 660€ = 4839€

**Note :** Les calculs peuvent donner des décimales, arrondissez au centime près si nécessaire.

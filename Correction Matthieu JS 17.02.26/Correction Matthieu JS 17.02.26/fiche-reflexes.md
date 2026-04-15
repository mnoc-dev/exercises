# Fiche réflexes — À garder sous la main quand tu refais les exos
---

## Les 10 points à checker en écrivant

**1. `=` vs `===`**
Dans un `if`, c'est toujours `===`. Jamais `=`.

**2. Validations : `if` séparés ou chaîne ?**
Si une erreur doit stopper le reste → chaîne `if / else if / else`.

**3. Bornes : la valeur limite est-elle valide ?**
OUI → `<` ou `>` (strict). NON → `<=` ou `>=`.

**4. Calculer au bon moment**
Ne jamais `let x = a + b` si `a` et `b` sont calculés plus tard. Déclare à `0`, modifie ensuite.

**5. Utiliser le résultat**
`maVariable;` seul sur une ligne ne fait rien. Il faut `total = total + maVariable;`.

**6. Vérifier ≠ modifier**
Si l'énoncé dit "vérifier la compatibilité" → comparer, pas écraser la variable.

**7. Valeur initiale neutre**
Initialise à `0`, `""` ou `false`. Demande-toi : "si aucune condition ne matche, que vaut la variable ?"

**8. Paliers cumulatifs**
"puis +X€ supplémentaires" → ils s'additionnent, ils ne se remplacent pas.

**9. `||` vs `&&` dans une fourchette**
Dans un intervalle → `&&`. Hors d'un intervalle → `||`.

**10. Lister les valeurs valides vs borne**
Préfère tester le cas invalide avec une borne (`> N`) plutôt que lister chaque valeur autorisée.

---
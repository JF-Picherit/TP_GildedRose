# Smells code

Problème n°1:
Le test attendait un nom différent de celui qui était affecté à notre shop.

Résolution n°1:
Modification de fixme par foo dans le rendu test.

---

Problème n°2:
Dupplication de condition "this.items[i]".

Résolution n°2 (commit 1):
Création d'une variable a appeler.

---

Problème n°3:
Dupplication des noms des items.

Résolution n°3 (commit 2):
Création d'une varibale pour chaque nom + création d'un tableau pour l'appel groupé des noms.

---

Problème n°4:
Trop de conditions if imbriquée.

Résolution n°4:
(commit 3)

- Regroupement de tous les nombres dans de nouvelles variables.
- Factorisation des conditions 'if' par '&&'.

(commit 4)

- Remplacement de la boucle for par map.
- Refacto code classique.

---

Problème n°5:
Condition pas facile à maintenire.

Résolution n°5:

- Utilisation de l'Open/Close.
- Répartition des types de conditions par classe.

---

Problème n°6:
Identification de code au résultat similaire qui pourrait être une seule et même fonction.

Résolution n°6 (commit "Début de répartition du code en différentes méthodes.")

---

# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

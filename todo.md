# fichier TODO.md

Les améliorations et les raccourcis pris à cause du temps 
imparti (2 heures).

### Todo

- [ ] Développement des tests unitaires
- [ ] Améliorer le design de la page (design tres minimaliste a cause du temps)
- [ ] S'assurer de la continuité des valeurs
- [ ] Ajouter un champ permettant de fixer (force) un taux de change
- [ ] Désactiver le taux de change fixe (si actif) lors d'une variation de plus de 2% avec le taux réel.
- [ ] Ajouter un tableau d’historique des 5 dernières demandes de conversion calculées.

### In Progress

- [ ] Ajouter un bouton switch permettant de saisir un montant en USD à la place du montant en EUR, on peut faire la conversion Euro to Dollar et Dollar to Euro mais sans le bouton juste on entre la valeur dans le champs et on click sur Entrer
- [ ] Améliorer le design de la page (design trés minimaliste a cause du temps) 
- [ ] Mettre en place un polling régulier permettant la mise à jour de la partie USD en fonction de 
l’actualisation du taux de change 

### Done ✓

- [x] Afficher une valeur qui représentera le taux de change EUR / USD. Elle sera initialisée à 1.1
- [x] Toutes les 3 secondes, une valeur aléatoire entre -0.05 et +0.05 sera ajoutée ou soustraite à la 
valeur initiale. 
- [x] Réaliser un front permettant de saisir un montant en EUR et affichant sa valeur en USD sur la 
base du taux de change
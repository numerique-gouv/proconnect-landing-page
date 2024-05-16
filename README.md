# ProConnect BONJOUR

## Lancer en prod

```
npm start
```

Ce repo contient tout ce qu'il faut pour tourner sur Scalingo. Il suffit de déployer la branche main sur votre instance Scalingo.


## Tester que le HTML d'un site est valide
```
npm run checkHTML --  <url du site à tester>
```
Si on veut checker pour une PR donnée, utiliser l'url de la review app de la PR (voir les checks dans la PR).


## Lancer ce site localement
Vous devez avoir npm installé sur votre machine.

```
git clone https://github.com/betagouv/proconnect-landing-page
cd proconnect-landing-page
npm install
npm run dev
```

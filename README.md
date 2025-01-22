# ProConnect BONJOUR

## 1. Lancer ce site localement

Vous devez avoir npm installés sur votre machine.

### 1.1. Télécharger le repo

```sh
git clone https://github.com/betagouv/proconnect-landing-page
cd proconnect-landing-page
```

### 1.2. Créer un `.env`

Il faut un fichier `.env` (gitignoré) pour rendre le répo fonctionnel :

```sh
cp .env.example .env
```

### 1.3. Faire les NPM installations

```sh
npm install
npm run build
```

### 1.4. Lancer les serveurs

Dans une fenêtre :

```sh
npm run dev
```

Dans une autre fenêtre :

```sh
npm run start:front
```

Welcome on localhost server :
http://localhost:3001

Welcome on localhost client :
http://localhost:5173

## 2. Package Scripts

| Command               | Description                  |
| :-------------------- | :--------------------------- |
| `npm run dev`         | Starts local dev server      |
| `npm run start:front` | Starts local client          |
| `npm run format`      | Run prettier on all the code |

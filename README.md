# alpha-beta

Application d'apprentissage de l'alphabet grec ancien.

## Installer Make sur son OS préféré

```bash
# linux
sudo apt-get install build-essential

# mac
brew install make

```

La commande `make help` permet de lister les commandes existantes.

## Préparer le projet

Installe les packages

`make install`

## Lancer l'application en local

`make up`

## Lancer les tests

`make test`

## Compiler

`make build`

## Déployer sur GCP

Le déploiement est automatisé avec CircleCI, avec une étape de validation manuelle dans l'interface de CircleCI. Le déploiement est possible lors de mises à jour de la branche main.

## Se connecter avec DBeaver à la BDD PostgresQL hébergée sur GCP

- créer des certificats SSL Client (console google cloud - projet - SQL - Connexions - Sécurité)
- réduire les droits `chmod 0600 client-key.pem`
- dans dbeaver, créer une connexion postgres, tab SSL, cocher Utiliser SSL, ajouter les trois fichiers, dans SSL Mode, sélectionner verify-ca
- dans dbeaver, onglet Général: host = ip publique de l'instance cloud sql, port 5432, saisir le nom de la db, de l'utilisateur et le password (authentification Database Native)
- dans google cloud console Cloud SQL, page de l'instance, Connexions, onglet Mise en réseau, avoir Adresse IP publique cochée et ajouter un réseau dans les réseaux autorisés : cliquer sur Ajouter un réseau. Dans le champ Réseau, saisir l'adresse IP externe de la machine depuis laquelle on veut pouvoir se connecter (taper what is my ip sur google). Cliquer sur ENREGISTRER en bas de page

## TODO

Résoudre le déploiement du backend (erreur 503).
Pistes:

- commande start dans les scripts de package.json?
- quelque chose avec la Cloud Build API de GCP?
- spécifier une commande de démarrage dans le fichier backend.yaml?

Workflow CI:

- supprimer pour le moment la limite de 5 apps déployées dans l'historique
- refaire du service frontend le service default?
- mutualiser certains jobs?
- avoir un unique workflow pour fronted et backend?

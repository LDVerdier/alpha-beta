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

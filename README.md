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

Prérequis :
- avoir un compte GCP
- avoir créé un projet
- avoir installé google cloud cli en local
- avoir compilé le projet

Se placer dans le répertoire `frontend` et lancer la commande `gcloud app deploy`.
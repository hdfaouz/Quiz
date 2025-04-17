# QuizApp - Application Web de Quiz Dynamique

## Description

QuizApp est une application web interactive développée avec **Angular**. Elle permet aux utilisateurs de jouer à des quiz personnalisés en choisissant leur pseudo, une catégorie, et un niveau de difficulté. Les questions sont récupérées via l'API **Open Trivia DB** et les utilisateurs gagnent des points en fonction de leurs réponses. L'application permet également d'enregistrer les scores dans le **local storage** et de consulter un historique des scores précédents.

## Fonctionnalités

### User Stories

- **Page d'accueil** : L'utilisateur peut voir les catégories de quiz disponibles.
- **Sélection du quiz** : L'utilisateur peut choisir une catégorie, un niveau de difficulté et démarrer un quiz.
- **Questions et réponses** : Les questions s'affichent une par une avec un système de validation instantanée des réponses.
- **Score final** : À la fin du quiz, le score est affiché et l'utilisateur peut le sauvegarder avec son nom dans le local storage.
- **Historique des scores** : L'utilisateur peut consulter un historique de ses scores passés.
- **Rejouer** : Après avoir terminé un quiz, l'utilisateur peut rejouer en conservant son nom d'utilisateur.

## Technologies Utilisées

- **Framework** : Angular 16+
- **Langages** : TypeScript, HTML, CSS
- **UI Framework** : Tailwind CSS / Bootstrap
- **Gestion d'État** : RxJS pour la gestion des flux de données
- **API Externe** : Open Trivia DB pour récupérer les questions de quiz
- **Stockage** : LocalStorage pour enregistrer les scores des utilisateurs






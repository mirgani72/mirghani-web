# MIRGHANI — Manuel du site web

Ce document explique comment fonctionne le site **mirghani.fr**, comment le modifier, et comment publier des changements. Il est écrit pour Khalid, pas pour un développeur — aucune connaissance en programmation n'est nécessaire pour les sections « Modifier » ci-dessous.

---

## 1. Vue d'ensemble

Le site mirghani.fr est un site vitrine de cinq pages : Accueil, Mon Approche, Services, À propos, Contact. Il est hébergé sur Cloudflare Pages et se met à jour uniquement quand quelqu'un publie une nouvelle version — il ne change jamais tout seul.

Deux adresses pointent vers le même site :
- **mirghani.fr** (le domaine officiel)
- **mirghani-website.pages.dev** (l'adresse technique Cloudflare, toujours active en secours)

---

## 2. Où se trouvent les choses

| Élément | Emplacement |
|---|---|
| Textes du site (les 3 langues) | `src/data/translations.ts` |
| Coordonnées (téléphone, email, adresse) | `src/data/content.ts` |
| Photos utilisées sur le site | `public/images/` |
| Brochure PDF téléchargeable | `public/documents/MIRGHANI-Brochure.pdf` |
| Les 5 pages | `src/pages/` (Accueil, Approche, Services, APropos, Contact) |

---

## 3. Modifier les textes du site

Tous les textes affichés sur le site (titres, paragraphes, boutons) sont regroupés dans **un seul fichier** : `src/data/translations.ts`.

Ils existent en trois langues (français, anglais, italien), organisées par page. Par exemple, le texte principal de la page d'accueil se trouve sous la clé `accueil.heroTitle`. Modifier le texte français suffit pour la majorité des visiteurs (le français est la langue par défaut) ; les versions anglaise et italienne peuvent être mises à jour séparément si besoin.

**Ce fichier ne doit être modifié que par quelqu'un à l'aise avec le code** (une virgule ou un guillemet mal placé peut empêcher le site de fonctionner). Le plus sûr est de me transmettre le nouveau texte et de me demander de faire la modification.

---

## 4. Modifier ou ajouter une photo

Les photos vivent dans `public/images/`. Chaque page fait référence à une photo par son nom dans `src/data/content.ts` (exemple : `entrance.jpg`, `pathway.jpg`).

Points importants avant d'ajouter une photo :
- **Format portrait** de préférence (les photos du site sont recadrées dans des cadres verticaux à côté du texte).
- **JPG**, pas HEIC (le format par défaut des iPhone) — un fichier `.heic` ne s'affichera pas dans un navigateur.
- Un filtre chromatique léger (teinte chaude, sépia discret) est appliqué automatiquement à toutes les photos du site pour garder une ambiance homogène — inutile de le faire à la main.

Pour remplacer une photo, le plus simple est de m'envoyer le fichier et de me dire quelle photo elle doit remplacer.

---

## 5. Remplacer la brochure PDF

Le bouton « Télécharger la brochure » sur la page À propos pointe vers `public/documents/MIRGHANI-Brochure.pdf`. Pour la mettre à jour, il suffit de remplacer ce fichier par la nouvelle version (même nom de fichier) et de publier (voir section 7).

---

## 6. Voir les changements avant de les publier (aperçu local)

Avant de publier quoi que ce soit en ligne, on peut prévisualiser le site sur son propre ordinateur :

```bash
npm install
npm run dev
```

Le site s'ouvre alors en local (généralement `http://localhost:5173`), avec les changements visibles immédiatement — sans que rien ne soit visible pour les visiteurs du vrai site.

---

## 7. Publier les changements en ligne (déploiement)

Une fois les changements vérifiés en local, voici les trois étapes pour les rendre visibles sur mirghani.fr :

```bash
npm run build
npx wrangler pages deploy dist --project-name=mirghani-fr
git add -A && git commit -m "description du changement" && git push
```

- La première commande prépare une version optimisée du site (dossier `dist/`).
- La deuxième l'envoie sur Cloudflare — c'est cette étape qui rend les changements visibles sur mirghani.fr, généralement en quelques secondes.
- La troisième sauvegarde le changement dans l'historique du projet (GitHub), pour garder une trace et pouvoir revenir en arrière si besoin.

**Après un déploiement**, si le site affiché semble ne pas avoir changé, il s'agit presque toujours d'une mise en cache du navigateur : un rechargement forcé (Cmd+Shift+R) résout le problème dans la grande majorité des cas.

---

## 8. Le formulaire de contact

Depuis la mise à jour du 3 août 2026, le formulaire de la page Contact n'ouvre plus une messagerie — il envoie directement le message vers la plateforme MIRGHANI MOS, où il est enregistré dans la base de données.

**Point de vigilance actuel :** il n'existe pas encore d'écran dans MOS pour consulter ces messages reçus. Ils sont bien enregistrés, mais leur lecture nécessite aujourd'hui une intervention technique. C'est un point à corriger en priorité si le formulaire commence à recevoir du trafic réel — voir le manuel MOS, section « Limites actuelles ».

---

## 9. Hébergement et domaines

Le site est hébergé sur **Cloudflare Pages**, projet nommé `mirghani-fr`. Le code source est conservé sur GitHub (`github.com/mirgani72/mirghani-web`), ce qui sert de sauvegarde complète et d'historique de toutes les versions passées du site.

---

## 10. En cas de problème

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le site affiche une page blanche juste après une publication | Le navigateur a gardé en mémoire l'ancienne version | Recharger avec Cmd+Shift+R, ou attendre 1–2 minutes |
| Une photo ne s'affiche pas | Le nom du fichier ne correspond pas exactement à ce qui est écrit dans `content.ts` | Vérifier l'orthographe exacte du nom de fichier (majuscules/minuscules comprises) |
| Le formulaire de contact ne semble rien faire | Vérifier la connexion internet ; en dernier recours, le téléphone et l'email restent affichés sur la page | Me contacter pour vérifier le service côté serveur |

---

*Document à jour au 4 août 2026. Pour toute modification de fond (structure des pages, nouvelle fonctionnalité), il est recommandé de passer par un développeur plutôt que de modifier directement le code.*

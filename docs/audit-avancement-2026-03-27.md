# Audit d'avancement du site Ty Bat

Date: 2026-03-27  
Contexte: audit manuel du site Astro en local, complete par une revue design specialisee.

## Resume executif

Le site est bien avance et la base est saine. La structure, les pages clefs, les CTAs, la navigation, le sitemap et la couche SEO de base sont deja en place. En revanche, le projet n'est pas encore pret pour une mise en ligne finale premium.

Estimation d'avancement:

- Base technique et structure: 85%
- Parcours et contenu principal: 75%
- Finition design premium: 60%
- SEO/social: 70%
- Conformite legale / pre-prod: 45%
- Pret pour mise en ligne finale: environ 65%

Verdict:

- Le site est en bonne phase de pre-production.
- Il reste des bloqueurs P0 avant publication.
- La page d'accueil est la partie la plus aboutie.
- Les pages internes et la couche legale/editoriale ont encore besoin d'une passe de finition.

## Methode

Audit realise avec:

- `npm run check`: OK
- `npm run build`: OK
- `npm audit --omit=dev`: 0 vulnerabilite
- revue manuelle du code source
- revue visuelle desktop/mobile sur build local
- revue design croisee par un agent specialise

Limites de l'audit:

- pas de scan automatique `squirrel` car l'outil n'est pas installe dans cet environnement
- pas de scan `axe` automatise car le setup local du skill n'est pas disponible ici
- l'audit accessibilite ci-dessous reste donc manuel et non exhaustif

## Ce qui est deja solide

- Architecture Astro propre et lisible.
- Pages essentielles presentes: accueil, realisations, services, contact, mentions legales, confidentialite, cookies.
- `robots.txt` et sitemap generes correctement dans `dist/`.
- CTAs telephone / WhatsApp coherents et repetes aux bons endroits.
- La home a une vraie direction visuelle et une promesse metier claire.
- Le concept "chantier raconte par sequence" est differentiant et exploitable commercialement.
- Les fondations accessibilite sont bonnes: skip link, focus visibles, alt text, labels de navigation.
- La base analytics Plausible est deja preparee.

## Bloqueurs P0 avant mise en ligne

### 1. Informations legales et administratives encore en mode placeholder

Constat:

- `src/data/site.ts:49` laisse `cookieBannerEnabled` a `false`
- `src/data/site.ts:60-66` contient encore plusieurs champs `A confirmer avant mise en ligne`
- `src/data/site.ts:128` affiche encore une note de zone d'intervention a preciser
- ces placeholders sont deja visibles dans `dist/mentions-legales/index.html` et `dist/confidentialite/index.html`

Impact:

- risque legal et manque de credibilite immediate
- impression de site non finalise
- impossible de considerer la publication comme terminee

Action recommandee:

- renseigner les vraies informations administratives, RGPD et hebergeur
- decider explicitement la position cookies / consentement / analytics
- remplacer la note de zone provisoire par un texte final

### 2. Les images Open Graph / Twitter ne sont pas en URL absolue

Constat:

- `src/components/SeoMeta.astro:47-48` injecte `og:image` et `twitter:image` tels quels
- `src/pages/index.astro:60` passe `leadProject.data.heroImage.src`
- `src/pages/realisations/[slug].astro:71` et `src/pages/realisations/[slug].astro:84` reutilisent aussi un chemin relatif
- dans `dist/index.html`, `og:image` sort en `/_astro/...jpg` au lieu d'une URL absolue

Impact:

- partages sociaux fragiles ou incomplets
- perte de qualite SEO/social
- schema image de projet moins robuste

Action recommandee:

- convertir toutes les images SEO/schema en URL absolue a partir de l'origine du site

### 3. La publication premium est bloquee par la finition editoriale et media

Constat:

- qualite et cadrage des images encore heterogenes selon les cartes et pages
- plusieurs textes restent en version de travail, sans niveau de finition commercial homogene
- la revue design externe classe ce point en severite haute pour l'image de marque

Impact:

- la promesse premium de la home n'est pas encore tenue partout
- perception artisan/propre presente, mais pas encore totalement haut de gamme

Action recommandee:

- definir une selection media stricte par projet
- harmoniser titres, resumes, categories et ton de toutes les cartes

## Priorites P1

### 1. Header mobile et navigation encore trop "fonctionnels"

Constat:

- `src/components/Header.astro:15-28` garde la meme logique de navigation desktop sur mobile
- `src/styles/global.css:1198-1208` passe le header en colonne, mais sans vrai composant mobile intentionnel

Impact:

- rendu serre sur petit ecran
- manque de signature et de confort de lecture

Action recommandee:

- creer une navigation mobile plus nette: menu compact, actions mieux hierarchisees, respiration plus franche

### 2. Import Google Fonts externe a reevaluer

Constat:

- `src/styles/global.css:1` charge les polices depuis `fonts.googleapis.com`

Impact:

- dependance externe inutile
- question privacy/performance a regler avant une publication sereine

Action recommandee:

- auto-heberger les polices ou basculer sur une pile locale maitrisee

### 3. Cohesion cookies / contact a clarifier

Constat:

- `src/pages/cookies.astro:43` mentionne `click_email`
- `src/data/site.ts:26` laisse `email` vide
- `src/pages/contact.astro:72` prevoit bien l'event, mais l'email public n'est pas encore actif

Impact:

- documentation de tracking plus avancee que l'etat reel du site
- petite incoherence produit / legal / contenu

Action recommandee:

- soit activer une vraie adresse email et l'exposer proprement
- soit simplifier la politique cookies et les evenements declares

## Priorites P2

### 1. Trop de surfaces visuellement proches

Constat:

- plusieurs cartes reprennent les memes volumes, ombres et rayons dans `src/styles/global.css`

Impact:

- bon niveau de coherence
- mais sensation legere de repetition sur les pages internes

Action recommandee:

- definir 3 familles nettes de cartes
- distinguer clairement une carte preuve/projet
- distinguer clairement une carte explication/process
- distinguer clairement une carte CTA ou contact

### 2. Pages internes moins memorables que la home

Constat:

- `src/pages/services.astro` et `src/pages/realisations/[slug].astro` sont propres mais plus standards

Impact:

- baisse de singularite entre la premiere impression et la suite du parcours

Action recommandee:

- ajouter un ou deux modules signatures sur les pages internes
- raccourcir les blocs texte trop denses

### 3. Niveau editorial encore trop "pre-prod"

Constat:

- plusieurs textes gardent un style un peu brut
- l'absence d'accents et certaines formulations de travail reduisent la sensation de finition

Impact:

- le site parait avance, mais pas tout a fait final

Action recommandee:

- faire une passe editoriale globale page par page
- verrouiller un ton uniforme, simple, net et rassurant

## Audit par categorie

### Design / UX

Points forts:

- la home a une identite claire, artisanale et premium
- bonne hierarchie visuelle globale
- les cartes chantier rendent bien le savoir-faire

Points a corriger:

- trop d'homogeneite entre certaines cartes
- la navigation mobile manque de desirabilite
- les pages internes doivent avoir plus de caractere propre

### Contenu / message

Points forts:

- le positionnement "renovation interieure soignee" est clair
- les categories cuisine / salle de bain / finitions sont bien comprises

Points a corriger:

- uniformiser tous les textes de cartes et projets
- passer tout le site au meme niveau de finition redactionnelle
- verifier une derniere fois toutes les formulations legales et commerciales

### SEO / social

Points forts:

- balises titre/description presentes
- canonical en place
- sitemap et robots valides

Points a corriger:

- images sociales en relatif au lieu d'absolu
- verifier ensuite les apercus de partage page par page

### Technique

Points forts:

- build OK
- check OK
- dependances prod sans vulnerabilite detectee

Points a corriger:

- rien de critique au niveau build
- priorite plutot sur finition publication, SEO social et UX mobile

### Conformite

Points forts:

- les pages legales existent deja
- une structure de politique cookies et confidentialite est en place

Points a corriger:

- placeholders a remplacer
- hebergeur et contact RGPD a finaliser
- trancher clairement la logique consentement / analytics / fonts

### Accessibilite

Points forts:

- skip link present dans le layout
- focus visibles
- navigation et CTAs assez lisibles

Points a corriger:

- faire un vrai scan axe ou Lighthouse accessibilite apres la prochaine passe UI
- verifier les contrastes, le menu mobile et l'ordre de tabulation sur toutes les pages

### Mobile / responsive

Points forts:

- la structure reste globalement utilisable

Points a corriger:

- header et navigation trop compacts
- certains equilibres de cartes et de textes peuvent encore etre resserres
- a valider a nouveau apres la prochaine passe design

## Ordre recommande pour la suite

### Passe 1 - publication sure

Objectif:

- lever tous les P0

Actions:

- remplir les vraies donnees legales dans `src/data/site.ts`
- fixer les URLs absolues pour `og:image`, `twitter:image` et les images schema
- finaliser la position cookies / Plausible / contact RGPD
- remplacer les derniers textes provisoires

### Passe 2 - design premium

Objectif:

- rendre le niveau de finition coherent sur tout le site

Actions:

- refaire le header mobile
- definir 3 familles de cartes plus distinctes
- harmoniser les visuels projet
- raccourcir les textes qui alourdissent les pages internes

### Passe 3 - QA finale

Objectif:

- valider la mise en ligne sans zone grise

Actions:

- test visuel desktop/mobile sur toutes les pages
- verification SEO partage social
- scan accessibilite automatise
- verification du contenu legal final

## Instruction prete pour la prochaine session

Si on reprend le projet dans une prochaine passe, l'instruction la plus utile sera:

> Lever tous les P0 du site Ty Bat avant mise en ligne: remplacer les placeholders legaux dans `src/data/site.ts`, corriger les images SEO/social pour qu'elles soient en URL absolue, clarifier la logique cookies/analytics/fonts, puis faire une passe design mobile sur le header et uniformiser les cartes et les textes des pages internes. Verifier ensuite avec `npm run check`, `npm run build` et une revue visuelle desktop/mobile.

## Conclusion

Le projet est sur une bonne trajectoire. La base est deja suffisamment propre pour avancer vite, mais la mise en ligne doit passer par une courte phase de consolidation: conformite reelle, SEO social propre, header mobile mieux dessine, et finition editoriale/media plus stricte.

En l'etat:

- bon site en pre-prod
- pas encore version finale a publier
- tres bon potentiel une fois les P0 et P1 leves

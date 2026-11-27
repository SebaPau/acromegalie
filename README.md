# Site Acromégalie

Site d’information clair et accessible pour les patients et leurs proches sur l’**acromégalie** et les pathologies associées aux adénomes hypophysaires.

**Version actuelle : V1.15**  
**Auteur :** Sébastien P. — expérience personnelle (~25 ans d’acromégalie), ancienne association Assomégalie (contribution Orphanet / Somavert France 2004). Projet indépendant, non sponsorisé.

## Structure

| Élément | Rôle |
|--------|------|
| `index.html` | Accueil |
| `pages/` | Contenu (symptômes, diagnostic, traitements, alimentation, mon parcours, info santé…) |
| `css/style.css` | Styles responsive + mode sombre |
| `js/site.js` | Mode sombre + traduction |
| `assets/` | Logo et illustrations |
| `CHANGELOG.md` | Journal des versions |
| `SEO-MOTS-CLES.md` | Référentiel SEO |
| `robots.txt` / `sitemap.xml` | Référencement (adapter le domaine) |

## Mise en ligne avec GitHub Pages

1. Créer un dépôt GitHub (public recommandé pour Pages gratuit).
2. Pousser ce dossier (voir instructions ci-dessous).
3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch** → branche `main`, dossier `/ (root)`.
4. L’URL sera du type : `https://VOTRE_COMPTE.github.io/NOM_DU_DEPOT/`

Si le site est dans un sous-chemin (`/NOM_DU_DEPOT/`), les liens relatifs actuels fonctionnent. Pour un domaine personnalisé, ajouter un fichier `CNAME` et mettre à jour `sitemap.xml`.

## Ancienne version

L’ancien site (frameset Assomegalie) est conservé en fichiers `b_*.htm` / `_b_*.htm` pour archive. Le site moderne à publier est centré sur `index.html`, `pages/`, `css/`, `js/`, `assets/`.

## Licence / usage

Contenu informatif destiné aux patients et proches. Ne remplace pas un avis médical.

# MIRGHANI — Project Reference (Source of Truth)

This file documents the current, approved truth of the MIRGHANI marketing site. Update this file whenever the live site changes, so printed or exported materials stay aligned with what is actually published.

## Voice and Tone
- Voice is first-person: “je / mon / ma”.
- Copy stays concrete and service-oriented; avoid product claims unless the feature is live.

## Services List (Do Not Remove Items)
- The services list is considered approved as-is.
- The item “Accueil des livraisons et gestion des accès” must remain present and should not be removed or merged away.

## Photos and Assets
- Property photos used by the site are served from `public/images/`.
- The `public/images/` assets are sourced from the raw photo set in `public/new images/` (including subfolders) and then selected/converted for web use.
- The site must not reference `.heic` files in `<img src="...">` paths.

## Global Photo Filter Rule
- Any property photo rendered inside the site’s `<main>` content must keep the existing global filter rule:
  - `sepia(15%) saturate(88%) brightness(1.03) contrast(1.04)`
- Brand logo images must not be affected by that filter.

## Legal Copy Guardrails
- Legal notice SIRET and full address remain bracketed placeholders until the business owner confirms the final values.

## Change Discipline
- When any live-site copy, services, photo selection, legal text, or portal wording changes, update this file in the same change set.

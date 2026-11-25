# Die Wichtelwerkstatt

Der Adventskalender besteht aus einer Startseite und 24 eigenen Tagesseiten. Er braucht keinen Build und kein Backend.

## Vorschau

Öffne `index.html` direkt im Browser. In dieser lokalen Dateivorschau sind alle Türchen geöffnet, damit du die Texte prüfen kannst. Über HTTP und auf GitHub Pages öffnet sich jedes Türchen ab seinem jeweiligen Dezembertag 2026 um Mitternacht deutscher Zeit. Auch nach Weihnachten bleiben die Türchen dieses Kalenders verfügbar.

## Texte ändern

Öffne für den gewünschten Tag die zugehörige Datei, zum Beispiel `Tag-1/index.html`. Tausche den Text im Absatz innerhalb von `<template id="day-text">` aus. Die vorzeitige Sperre betrifft die Anzeige im Browser. Der HTML-Quelltext ist bei GitHub Pages öffentlich abrufbar.

## Auf GitHub Pages veröffentlichen

1. Erstelle auf GitHub ein öffentliches Repository namens `kalender` oder verwende ein vorhandenes Repository mit GitHub Pages.
2. Lade den **Inhalt** dieses Ordners in die oberste Ebene des Repositories. `index.html`, `.nojekyll`, `assets` und die Ordner `Tag-1` bis `Tag-24` liegen auf derselben Ebene.
3. Öffne im Repository **Settings → Pages**. Wähle **Deploy from a branch**, den Branch **main** und den Ordner **/(root)**. Speichere die Einstellung.
4. Sobald GitHub die Veröffentlichung anzeigt, findest du den Link unter **Settings → Pages**. Für ein Repository namens `kalender` lauten die Adressen `https://DEIN-NAME.github.io/kalender/` und `https://DEIN-NAME.github.io/kalender/Tag-1/`.

[Offizielle Anleitung zu GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

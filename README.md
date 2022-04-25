# Duolingo Extension

This started because I noticed while you can see all the words you have learned on Duolingo, they provided no translation. This tool provides a way to show all the translations and a download button for a .csv file. Currently this is a snippet you can run in dev tools.

## Instructions (Chromium based browsers)

- Open a desktop web browser and sign in to Duolingo.
- Navigate to [Duolingo Words](https://www.duolingo.com/words).
- Open Developer Tools in your browser by right-clicking and clicking "Inspect" or the keyboard short cut Command+Option-I.
- Click on the "Sources" tab.
- In the sub-tab, click on "Snippets".
- Click the "New Snippet" link. (I renamed mine as "DuoLingo".)
- Copy the code from index.js.
- Paste the code into your new snippet.
- Right-click on your snippet and click "Run"

## TODO

- fix accents
- add error handling
- only add if not added
- turn this into a chrome extension where you can customize languages
- Wire up index.html to test easier.

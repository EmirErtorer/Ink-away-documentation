<p><img src="public/assets/ink-away-title.svg" width="45%" alt="Ink Away"><br>
<img src="public/assets/readme-divider.svg" width="100%" alt=""></p>

The source of [Ink Away](https://github.com/EmirErtorer/ink-away.koplugin)'s documentation site: **https://ink-away-three.vercel.app**

For now it covers the **integration API**, which lets another KOReader plugin work with Ink Away:

* **Get told** when annotation mode opens and closes.
* **Let readers annotate your own view.** A plugin that shows a book's pages its own way, such as [Panels+](https://github.com/KristanLaimon/PanelsPlus), can have Ink Away's annotation mode open over it, with the ink kept as on the book's own pages.

The API ships with Ink Away 4.4.3 and newer, and is experimental until 5.0.

## Run it

You need [Bun](https://bun.sh). In this folder:

1. Install the packages: `bun install --frozen-lockfile`
2. Start the live preview: `bun run dev`, then open http://localhost:3000
3. Before a commit, check the types and build the site: `bun run types:check`, then `bun run build`. A good build ends with a list of routes, the static site is in `out/`, and `bun run start` serves it.

## Where things are

- `content/docs/`: the pages, one `.mdx` file each. `meta.json` in each folder sets the order in the sidebar.
- `public/examples/`: the Lua examples the pages offer as downloads.
- `app/(home)/page.tsx`: the home page.

## Writing the pages

The source of truth is [docs/INTEGRATION.md](https://github.com/EmirErtorer/ink-away.koplugin/blob/main/docs/INTEGRATION.md) in the Ink Away repository. When the API changes there, change these pages too.

Write for someone who knows Lua and has a KOReader plugin, but has never used Ink Away. Say what a name means before using it, show a small working step, then link to the details. Leave Ink Away's internals and history out.

## Credits

The integration API and the first version of this site were made by [Kristan Laimon](https://github.com/KristanLaimon).

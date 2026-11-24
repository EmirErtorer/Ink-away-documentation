<p><img src="public/assets/ink-away-title.svg" width="45%" alt="Ink Away"><br>
<img src="public/assets/readme-divider.svg" width="100%" alt=""></p>

The source of [Ink Away](https://github.com/EmirErtorer/ink-away.koplugin)'s documentation site: **https://ink-away-docs.vercel.app**

It is the user guide: installing, drawing, notebooks, writing on books, export and sync, reader notes and troubleshooting. Developers find the **integration API** there too, which lets another KOReader plugin work with Ink Away.

## Run it

You need [Bun](https://bun.sh). In this folder:

1. Install the packages: `bun install --frozen-lockfile`
2. Start the live preview: `bun run dev`, then open http://localhost:3000
3. Before a commit, check the types and build the site: `bun run types:check`, then `bun run build`. A good build ends with a list of routes, the static site is in `out/`, and `bun run start` serves it.

## Where things are

- `content/docs/`: the pages, one `.mdx` file each, in a folder per section (`start`, `draw`, `notebooks`, `books`, `share`, `devices`, `developers`). `meta.json` in each folder sets the order in the sidebar.
- `public/screenshots/`: screenshots and GIFs, copied from the Ink Away repository's `assets/screenshots`.
- `public/examples/`: the Lua examples the developer pages offer as downloads.
- `app/(home)/page.tsx`: the home page.

## Writing the pages

- **Write for someone who just installed Ink Away.** Short sentences, numbered steps, the exact names of buttons and settings in bold, as they read on the reader.
- **Keep it true to the current release.** Feature facts come from the Ink Away repository's `docs/FEATURES.md` and `CHANGELOG.md`; the developer pages follow its [docs/INTEGRATION.md](https://github.com/EmirErtorer/ink-away.koplugin/blob/main/docs/INTEGRATION.md). When those change, change these pages too.
- **Developer pages** are for someone who knows Lua and has a KOReader plugin, but has never used Ink Away. Say what a name means before using it, show a small working step, then link to the details.

## Credits

The integration API and the first version of this site, its look and animations included, were made by [Kristan Laimon](https://github.com/KristanLaimon).

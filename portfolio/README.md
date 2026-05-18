# Portfolio

Interactive visualisation of the Life Itself strategy portfolio. The indented tree is the primary overview; the map is kept as a secondary link.

## Visualisations

<div class="my-6 max-w-2xl">
  <div class="border rounded-xl overflow-hidden shadow-sm">
    <div class="px-4 py-3 border-b bg-gray-50 font-semibold">
      <a href="portfolio-indented.html" class="text-blue-600 hover:underline">Portfolio Tree →</a>
    </div>
    <a href="portfolio-indented.html">
      <iframe src="portfolio-indented.html" class="w-full h-64 pointer-events-none" scrolling="no"></iframe>
    </a>
    <p class="px-4 py-3 text-sm text-gray-600">Hierarchical outline of the portfolio data snapshot. Use <em>View</em> to open an item page.</p>
  </div>
</div>

Secondary view: [Portfolio Map](portfolio-map.html).

Draws from `index.js`.

## Data Snapshot

`index.js` is the local portfolio snapshot used by the visualisations. It is maintained directly rather than reconstructed from markdown in this repo.

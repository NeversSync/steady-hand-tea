// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-price-list-js": () => import("../src/pages/price-list.js" /* webpackChunkName: "component---src-pages-price-list-js" */),
  "component---src-pages-thanks-js": () => import("../src/pages/thanks.js" /* webpackChunkName: "component---src-pages-thanks-js" */)
}


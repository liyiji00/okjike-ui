export const CONFIG = {
  matches: ["https://web.okjike.com/*"],
  default_icon: {
    16: "images/icon-176.png",
    32: "images/icon-176.png",
    48: "images/icon-176.png",
    96: "images/icon-176.png",
    128: "images/icon-176.png",
    176: "images/icon-176.png",
  },
} as const

export const MANIFEST = {
  name: "okjike-ui",
  short_name: "okjike-ui",
  description: "Refine and declutter the 'web.okjike.com' web experience.",
  version: "0.0.1",
  icons: CONFIG.default_icon,
  permissions: ["storage"],
  options_ui: {
    page: "index.html",
    open_in_tab: true,
  },
} as const

export const MANIFEST_CHROME = {
  ...MANIFEST,
  manifest_version: 3,
  background: {
    service_worker: "background.js",
    type: "module",
  },
  content_scripts: [
    {
      run_at: "document_end",
      matches: CONFIG.matches,
      js: ["dist/main.js"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "css/main.css",
        "css/typefully.css",
        "fonts/inter-subset.woff2",
      ],
      matches: CONFIG.matches,
    },
  ],
  action: {
    default_icon: CONFIG.default_icon,
    default_title: "okjike-ui",
    default_popup: "index.html",
  },
} as const

export const MANIFEST_FIREFOX = {
  ...MANIFEST,
  manifest_version: 2,
  browser_specific_settings: {
    gecko: {
      id: "{e7476172-097c-4b77-b56e-f56a894adca9}",
    },
  },
  background: {
    scripts: ["background.js"],
    persistent: false,
  },
  content_scripts: [
    {
      run_at: "document_idle",
      matches: CONFIG.matches,
      js: ["dist/main.js"],
    },
  ],
  web_accessible_resources: [
    "css/main.css",
    "css/typefully.css",
    "fonts/inter-subset.woff2",
  ],
  browser_action: {
    default_icon: CONFIG.default_icon,
    default_title: "okjike popup",
    default_popup: "index.html",
  },
} as const
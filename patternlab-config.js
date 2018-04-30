module.exports = {
  paths: {
    source: {
      root: './source/',
      app: './source/_app',
      patterns: './source/_patterns/',
      data: './source/_data/',
      meta: './source/_meta/',
      annotations: './source/_annotations/',
      styleguide: './node_modules/styleguidekit-assets-default/dist/',
      patternlabFiles: './node_modules/styleguidekit-mustache-default/views/',
      js: './source/js/',
      images: './source/images/',
      fonts: './source/fonts/',
      css: './source/css/'
    },
    public: {
      root: './public/',
      patterns: './public/patterns/',
      data: './public/styleguide/data/',
      annotations: './public/annotations/',
      styleguide: './public/styleguide/',
      js: './public/js/',
      images: './public/images/',
      fonts: './public/fonts/',
      css: './public/css/'
    }
  },
  server: {
    url: 'http://localhost',
    port: process.env.PORT || 3000
  },
  webpackMerge: {
    entry : 'replace'
  },
  styleGuideExcludes: [
  ],
  defaultPattern: 'all',
  defaultShowPatternInfo: false,
  cleanPublic : true,
  patternExtension: 'mustache',
  debug: false,
  ishControlsHide: {
    s: false,
    m: false,
    l: false,
    full: false,
    random: false,
    disco: false,
    hay: true,
    mqs: false,
    find: false,
    'views-all': false,
    'views-annotations': false,
    'views-code': false,
    'views-new': false,
    'tools-all': false,
    'tools-docs': false
  },
  ishViewportRange: {
    s: [240, 500],
    m: [768, 768],
    l: [800, 2600]
  },
  patternStateCascade: ['inprogress', 'inreview', 'complete'],
  patternStates: {
  },
  patternExportPatternPartials: [],
  patternExportDirectory: './pattern_exports/',
  cacheBust: true,
  starterkitSubDir: 'dist',
  starterkitPostInstallClean: false,
  outputFileSuffixes: {
    rendered: '.rendered',
    rawTemplate: '',
    markupOnly: '.markup-only'
  },
  cleanOutputHtml: true,
  exportToGraphViz: false
}

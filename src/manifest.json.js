const manifest = {
  background: {
    persistent: true,
    scripts: ['js/background.js'],
  },
  browser_action: {
    default_icon: {
      19: 'img/icon-grey-19.png',
      38: 'img/icon-grey-38.png',
    },
    default_popup: 'popup.html',
  },
  // #if BROWSER === 'firefox'
  browser_specific_settings: {
    gecko: {
      id: '@ublacklist',
      strict_min_version: '63.0', // Shadow DOM is required.
    },
  },
  // #endif
  default_locale: 'en',
  description: '__MSG_extensionDescription__',
  icons: {
    16: 'img/icon-16.png',
    48: 'img/icon-48.png',
    128: 'img/icon-128.png',
  },
  // #if BROWSER === 'chrome'
  key:
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm+2y1Q2VH/S9rGxa/2kzRRspyxcA8R5QBa49JK/wca2kqyfpI/traqNnNY8SfRzOugtVP+8/WbyOY44wgr427VYws6thZ//cV2NDadEMqUF5dba9LR26QHXPFUWdbUyCtNHNVP4keG/OeGJ6thOrKUlxYorK9JAmdG1szucyOKt8+k8HNVfZFTi2UHGLn1ANLAsu6f4ykb6Z0QNNCysWuNHqtFEy4j0B4T+h5VZ+Il2l3yf8uGk/zAbJE7x0C7SIscBrWQ9jcliS/e25C6mEr5lrMhQ+VpVVsRVGg7PwY7xLywKHZM8z1nzLdpMs7egEqV25HiA/PEcaQRWwDKDqwQIDAQAB',
  // #endif
  manifest_version: 2,
  name: '__MSG_extensionName__',
  // #if BROWSER === 'chrome'
  oauth2: {
    client_id: '304167046827-ordtvt68qt83fabg1k7blqeagicu68du.apps.googleusercontent.com',
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  },
  // #endif
  optional_permissions: ['*://*/*'],
  options_ui: {
    // #if BROWSER === 'firefox'
    browser_style: false,
    // #endif
    // #if BROWSER === 'chrome'
    chrome_style: false,
    // #endif
    page: 'options.html',
  },
  permissions: ['activeTab', 'identity', 'storage'],
  version: '3.1.2',
  content_scripts: [
    {
      css: ['css/content.css'],
      js: ['js/content.js'],
      run_at: 'document_start',
      matches: [
        'https://www.google.com/search?*',
        'https://www.google.ad/search?*',
        'https://www.google.ae/search?*',
        'https://www.google.com.af/search?*',
        'https://www.google.com.ag/search?*',
        'https://www.google.com.ai/search?*',
        'https://www.google.al/search?*',
        'https://www.google.am/search?*',
        'https://www.google.co.ao/search?*',
        'https://www.google.com.ar/search?*',
        'https://www.google.as/search?*',
        'https://www.google.at/search?*',
        'https://www.google.com.au/search?*',
        'https://www.google.az/search?*',
        'https://www.google.ba/search?*',
        'https://www.google.com.bd/search?*',
        'https://www.google.be/search?*',
        'https://www.google.bf/search?*',
        'https://www.google.bg/search?*',
        'https://www.google.com.bh/search?*',
        'https://www.google.bi/search?*',
        'https://www.google.bj/search?*',
        'https://www.google.com.bn/search?*',
        'https://www.google.com.bo/search?*',
        'https://www.google.com.br/search?*',
        'https://www.google.bs/search?*',
        'https://www.google.bt/search?*',
        'https://www.google.co.bw/search?*',
        'https://www.google.by/search?*',
        'https://www.google.com.bz/search?*',
        'https://www.google.ca/search?*',
        'https://www.google.cd/search?*',
        'https://www.google.cf/search?*',
        'https://www.google.cg/search?*',
        'https://www.google.ch/search?*',
        'https://www.google.ci/search?*',
        'https://www.google.co.ck/search?*',
        'https://www.google.cl/search?*',
        'https://www.google.cm/search?*',
        'https://www.google.cn/search?*',
        'https://www.google.com.co/search?*',
        'https://www.google.co.cr/search?*',
        'https://www.google.com.cu/search?*',
        'https://www.google.cv/search?*',
        'https://www.google.com.cy/search?*',
        'https://www.google.cz/search?*',
        'https://www.google.de/search?*',
        'https://www.google.dj/search?*',
        'https://www.google.dk/search?*',
        'https://www.google.dm/search?*',
        'https://www.google.com.do/search?*',
        'https://www.google.dz/search?*',
        'https://www.google.com.ec/search?*',
        'https://www.google.ee/search?*',
        'https://www.google.com.eg/search?*',
        'https://www.google.es/search?*',
        'https://www.google.com.et/search?*',
        'https://www.google.fi/search?*',
        'https://www.google.com.fj/search?*',
        'https://www.google.fm/search?*',
        'https://www.google.fr/search?*',
        'https://www.google.ga/search?*',
        'https://www.google.ge/search?*',
        'https://www.google.gg/search?*',
        'https://www.google.com.gh/search?*',
        'https://www.google.com.gi/search?*',
        'https://www.google.gl/search?*',
        'https://www.google.gm/search?*',
        'https://www.google.gp/search?*',
        'https://www.google.gr/search?*',
        'https://www.google.com.gt/search?*',
        'https://www.google.gy/search?*',
        'https://www.google.com.hk/search?*',
        'https://www.google.hn/search?*',
        'https://www.google.hr/search?*',
        'https://www.google.ht/search?*',
        'https://www.google.hu/search?*',
        'https://www.google.co.id/search?*',
        'https://www.google.ie/search?*',
        'https://www.google.co.il/search?*',
        'https://www.google.im/search?*',
        'https://www.google.co.in/search?*',
        'https://www.google.iq/search?*',
        'https://www.google.is/search?*',
        'https://www.google.it/search?*',
        'https://www.google.je/search?*',
        'https://www.google.com.jm/search?*',
        'https://www.google.jo/search?*',
        'https://www.google.co.jp/search?*',
        'https://www.google.co.ke/search?*',
        'https://www.google.com.kh/search?*',
        'https://www.google.ki/search?*',
        'https://www.google.kg/search?*',
        'https://www.google.co.kr/search?*',
        'https://www.google.com.kw/search?*',
        'https://www.google.kz/search?*',
        'https://www.google.la/search?*',
        'https://www.google.com.lb/search?*',
        'https://www.google.li/search?*',
        'https://www.google.lk/search?*',
        'https://www.google.co.ls/search?*',
        'https://www.google.lt/search?*',
        'https://www.google.lu/search?*',
        'https://www.google.lv/search?*',
        'https://www.google.com.ly/search?*',
        'https://www.google.co.ma/search?*',
        'https://www.google.md/search?*',
        'https://www.google.me/search?*',
        'https://www.google.mg/search?*',
        'https://www.google.mk/search?*',
        'https://www.google.ml/search?*',
        'https://www.google.com.mm/search?*',
        'https://www.google.mn/search?*',
        'https://www.google.ms/search?*',
        'https://www.google.com.mt/search?*',
        'https://www.google.mu/search?*',
        'https://www.google.mv/search?*',
        'https://www.google.mw/search?*',
        'https://www.google.com.mx/search?*',
        'https://www.google.com.my/search?*',
        'https://www.google.co.mz/search?*',
        'https://www.google.com.na/search?*',
        'https://www.google.com.nf/search?*',
        'https://www.google.com.ng/search?*',
        'https://www.google.com.ni/search?*',
        'https://www.google.ne/search?*',
        'https://www.google.nl/search?*',
        'https://www.google.no/search?*',
        'https://www.google.com.np/search?*',
        'https://www.google.nr/search?*',
        'https://www.google.nu/search?*',
        'https://www.google.co.nz/search?*',
        'https://www.google.com.om/search?*',
        'https://www.google.com.pa/search?*',
        'https://www.google.com.pe/search?*',
        'https://www.google.com.pg/search?*',
        'https://www.google.com.ph/search?*',
        'https://www.google.com.pk/search?*',
        'https://www.google.pl/search?*',
        'https://www.google.pn/search?*',
        'https://www.google.com.pr/search?*',
        'https://www.google.ps/search?*',
        'https://www.google.pt/search?*',
        'https://www.google.com.py/search?*',
        'https://www.google.com.qa/search?*',
        'https://www.google.ro/search?*',
        'https://www.google.ru/search?*',
        'https://www.google.rw/search?*',
        'https://www.google.com.sa/search?*',
        'https://www.google.com.sb/search?*',
        'https://www.google.sc/search?*',
        'https://www.google.se/search?*',
        'https://www.google.com.sg/search?*',
        'https://www.google.sh/search?*',
        'https://www.google.si/search?*',
        'https://www.google.sk/search?*',
        'https://www.google.com.sl/search?*',
        'https://www.google.sn/search?*',
        'https://www.google.so/search?*',
        'https://www.google.sm/search?*',
        'https://www.google.sr/search?*',
        'https://www.google.st/search?*',
        'https://www.google.com.sv/search?*',
        'https://www.google.td/search?*',
        'https://www.google.tg/search?*',
        'https://www.google.co.th/search?*',
        'https://www.google.com.tj/search?*',
        'https://www.google.tk/search?*',
        'https://www.google.tl/search?*',
        'https://www.google.tm/search?*',
        'https://www.google.tn/search?*',
        'https://www.google.to/search?*',
        'https://www.google.com.tr/search?*',
        'https://www.google.tt/search?*',
        'https://www.google.com.tw/search?*',
        'https://www.google.co.tz/search?*',
        'https://www.google.com.ua/search?*',
        'https://www.google.co.ug/search?*',
        'https://www.google.co.uk/search?*',
        'https://www.google.com.uy/search?*',
        'https://www.google.co.uz/search?*',
        'https://www.google.com.vc/search?*',
        'https://www.google.co.ve/search?*',
        'https://www.google.vg/search?*',
        'https://www.google.co.vi/search?*',
        'https://www.google.com.vn/search?*',
        'https://www.google.vu/search?*',
        'https://www.google.ws/search?*',
        'https://www.google.rs/search?*',
        'https://www.google.co.za/search?*',
        'https://www.google.co.zm/search?*',
        'https://www.google.co.zw/search?*',
        'https://www.google.cat/search?*',
      ],
    },
  ],
};

module.exports = () => ({
  code: JSON.stringify(manifest, null, 2),
  cacheable: true,
});


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Deepak19787.github.io/angular-seo-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-seo-site"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/home"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/about"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/contact"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/blog"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/blog/post1"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/blog/post2"
  },
  {
    "renderMode": 2,
    "route": "/angular-seo-site/blog/post3"
  },
  {
    "renderMode": 2,
    "redirectTo": "/angular-seo-site",
    "route": "/angular-seo-site/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1055, hash: 'a87b884867b5fba1d1f63e7a37b70598fb38bf39dcb0454619f5e181ef04ed90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1057, hash: '9b9d80917020455921edb156bc35c89b4fac2a340fc56d817240166d6dbdff05', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog/post1/index.html': {size: 14507, hash: '607d695737bd1d7123f587725e36973e46d9995c19fa6cc6e6b2a9b6b56b59a3', text: () => import('./assets-chunks/blog_post1_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13823, hash: 'e859cb244f83575e692d66bd508d5dc6970becd38f633021256f141a8684462d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13832, hash: '09340d6ed3aa526d60dab56942bd1b560ed286f07fc729e7bfb6a26fa48a5c67', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 12727, hash: 'e71b784b5eaa3befe55abfb301f9eaa91285218dd82ec9f64e26ef5c4330e474', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13837, hash: '6c069e1480aba6ce51824298c0609235c7d522f8a3a5617c3cf25a950ff76d77', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 12004, hash: '8e5268c17e7effbc1046cac00889a14df6322cbd76a1551cae20a7a54c929f72', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'blog/post3/index.html': {size: 16197, hash: 'e246255a0085c6603d7396a9a5a3dd5aacc695ed553dc6f6445f0db593193a09', text: () => import('./assets-chunks/blog_post3_index_html.mjs').then(m => m.default)},
    'blog/post2/index.html': {size: 15400, hash: 'ceb09f8474de333d166c65ba75e5a6de00e5148bb79690ab8a0ea43e97350290', text: () => import('./assets-chunks/blog_post2_index_html.mjs').then(m => m.default)},
    'styles-EFGASKCL.css': {size: 1213, hash: '+LFcCkOKXeQ', text: () => import('./assets-chunks/styles-EFGASKCL_css.mjs').then(m => m.default)}
  },
};

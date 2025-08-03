
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/blog/post1"
  },
  {
    "renderMode": 2,
    "route": "/blog/post2"
  },
  {
    "renderMode": 2,
    "route": "/blog/post3"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1009, hash: 'ba190010d6956e0c08dd7d55235cc6d9c2a48f1d4b50ed5674e810b08d19b85c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '0cef5d0f354b44eb55a643be344b838b53895d48110abc9d01669fcdeaa500ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13556, hash: '65a1c36b0e24de0dd3fdbd1412be38a2f2deeeb6520e871b734948b423c9ca66', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11728, hash: '127589384f3b49aa32f6b1442b6700d57d90b5a03623c82e305a1a110ebfae08', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 12175, hash: '45203be6fd0641a9919ec7dc2792b5d4ff52185c5655afec91986803e271dfdf', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 13561, hash: '2619f554f09ab5c1a95d0733f55f49fa25e498ae2357ff9311db8b0ba317dda8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/post3/index.html': {size: 15921, hash: '648e91cf88a89523a21869262bffb1938df8e0cbc322d232136afb17d2dbc51a', text: () => import('./assets-chunks/blog_post3_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13547, hash: '82fb4b13f94df927c0a617651874d0bc2c395242849d608964632b4ed94911c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/post1/index.html': {size: 14231, hash: '7e0a0a88c4d9a941909afb7a895be11da5db0678d27885dd460db4f1f83e0579', text: () => import('./assets-chunks/blog_post1_index_html.mjs').then(m => m.default)},
    'blog/post2/index.html': {size: 15124, hash: '15effe2c45a1d94f0ee9ae2e434d64ebbf2605e2065bab1e8e100a00c2dbb7c0', text: () => import('./assets-chunks/blog_post2_index_html.mjs').then(m => m.default)},
    'styles-EFGASKCL.css': {size: 1213, hash: '+LFcCkOKXeQ', text: () => import('./assets-chunks/styles-EFGASKCL_css.mjs').then(m => m.default)}
  },
};

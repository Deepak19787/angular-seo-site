
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
    'index.csr.html': {size: 2071, hash: '32b692acf22d128da950b0e7321c113cee021b96006a6d5c6a03fb6a5884ab19', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2073, hash: '4bdea1519520cba3bb818de6d1fe56518c1e712bd00faa158ba6288e0296b6bf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 14618, hash: 'a3767128b50e20f00852b7deb2d70cb61aaf6f9e3c5346999fcbfe54cc998807', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 13315, hash: '50e13148bf8c02b588b79704aea2cd84540426a978cfb1704abf6d3f08f4e60a', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 14609, hash: '3c2320df2ee5787c4c26db6335bec11cfd4ce857cff408b5febacfaff8b177f1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/post2/index.html': {size: 16344, hash: '8d9ad0dfd4c0a88dcb68d3398cab2b2440c19dd6888ebe3dce0666e73acd5705', text: () => import('./assets-chunks/blog_post2_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 12803, hash: '57d3cad1030c0742018d3aa6bc69468ac3e50637ccb3014afb8d8cf74f6f85c0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'blog/post1/index.html': {size: 15519, hash: 'd75551070fa8f272239787389cc71acfa06d391fd2e8fb216ca01760590d2db2', text: () => import('./assets-chunks/blog_post1_index_html.mjs').then(m => m.default)},
    'blog/post3/index.html': {size: 17228, hash: '826c2668192b2b47a116652ee47e411f39bf3ecbdb99b386f4106306256e8f91', text: () => import('./assets-chunks/blog_post3_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14641, hash: '7b5c358574a9c19ab84a2866af28ce96296ebe94940de06f44ec41b463024147', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-EFGASKCL.css': {size: 1213, hash: '+LFcCkOKXeQ', text: () => import('./assets-chunks/styles-EFGASKCL_css.mjs').then(m => m.default)}
  },
};

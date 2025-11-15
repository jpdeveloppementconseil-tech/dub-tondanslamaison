const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({
  hostname: 'https://dubetondanslamaison.com',  // <-- Correct
});

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/a-propos', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 }
];

links.forEach(link => sitemap.write(link));
sitemap.end();

sitemap.pipe(createWriteStream('./public/sitemap.xml'));

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap généré dans public/sitemap.xml'))
  .catch(err => console.error('❌ Erreur lors de la génération du sitemap :', err));

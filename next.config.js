module.exports = {
  async redirects() {
    return [
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/404.html',
        destination: '/404',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

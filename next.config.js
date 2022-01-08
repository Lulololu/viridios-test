module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sustainable-development-goals",
        permanent: true,
      },
    ];
  },
};

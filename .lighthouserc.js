module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:3000/'],
        startServerCommand: 'node server.js',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };
  
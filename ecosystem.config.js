module.exports = {
  apps: [
    {
      name: 'app',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: "development",
        DATABASE_CLIENT: "sqlite",
      },
      env_test: {
        NODE_ENV: "test",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
        DATABASE_CLIENT: "mysql",
        DATABASE_HOST: "127.0.0.1",
        DATABASE_NAME: 'strapi',
        DATABASE_USERNAME: 'strapi',
        DATABASE_PASSWORD: 'strapi'
      }
    },
  ],
};

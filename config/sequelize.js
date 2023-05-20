module.exports = {
  "development": {
    "username": process.env.DB_USERNAME, // local PostgreSQL DB username
    "password": process.env.DB_PASSWORD, // local PostgreSQL DB password
    "host": "db.bit.io", // localhost
    "database": process.env.DB_NAME, // local PostgreSQL DB name
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true,
    },
  },
  "staging": {
    "use_env_variable": "DB_URL", // staging database connection string
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true,
    },
  },
  "production": {
    "use_env_variable": "DB_URL", // production database connection string
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true,
    },
  }
}

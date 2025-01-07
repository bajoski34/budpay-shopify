# Budpay Payment for Shopify

## Quick start

### Setup

Using npm:

```shell
nvm use && npm install
```

### Local Development

Using npm:

```shell
npm run dev
```

## Deployment

Make sure these environment variables are present on the machine hosting you app

```shell
SHOPIFY_APP_URL=your-app-url-with-https
PRODUCTION_API=https://api.budpay.com/api/v2
SANDBOX_API=https://api.budpay.com/api/v2
SHOPIFY_API_KEY=your-api-key
SHOPIFY_API_SECRET=your-api-secret-key
SCOPES=write_payment_gateways,write_payment_sessions
DATABASE_URL="file:prod.sqlite" (switch to "file:dev.sqlite" for local development)
```

### Application Storage

This template uses [Prisma](https://www.prisma.io/) to store session data, by default using an [SQLite](https://www.sqlite.org/index.html) database.
The database is defined as a Prisma schema in `prisma/schema.prisma`.

### Build

Remix handles building the app for you, by running the command below with the package manager of your choice:

Using npm:

```shell
npm run build
npm run start
```

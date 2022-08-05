# db-postgresql

## Requirements

- Node.js
- postgresql

## Config

- copy `.env.sample` to `.env`
- edit `.env` with your database connection details

## Build and Run

```bash
yarn
yarn start
```

- open http://localhost:3000/api/users

## Test

```bash
yarn test
```

## Reverse Models

```bash
npx sequelize-auto -o "./models" -h $DBHOST -d $DBNAME -u $DBUSER -x -p 5432 -e postgres
```

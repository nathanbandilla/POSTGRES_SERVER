tech stack is:

Runtime: Node.js
Language: TypeScript
Module style in package: CommonJS ("type": "commonjs")
Web framework: Express (v5)
Database: PostgreSQL
DB driver/client: pg
Environment config: dotenv (import 'dotenv/config')
Type packages: @types/express, @types/node, @types/pg


this is a REST API backend with:

a health endpoint (/health)
user routes (/users)
PostgreSQL connection pooling via Pool from pg.
# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Format basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [Unreleased]

### Added
- Structure monorepo : `services/api/` (NestJS) et `services/dsl/` (FastAPI + PLY)
- Docker multi-service : `compose.yml`, `compose.dev.yml`, `compose.prod.yml`
- Dockerfiles dédiés : `docker/api/`, `docker/dsl/`, `docker/postgres/`
- Extension `pg_uuidv7` pour PostgreSQL 17 (UUID v7 ordonnés chronologiquement)
- Micro-service DSL Python (lexer, parser, query_builder) pour requêtes MongoDB admin en lecture seule
- `.dockerignore` pour optimiser les builds Docker

### Changed
- PostgreSQL 16 → 17 (support pg_uuidv7)
- Restructuration du projet : code NestJS déplacé de la racine vers `services/api/`
- `docker-compose.yml` renommé en `compose.yml` (convention Docker Compose v2)

### Removed
- `docker-compose.yml` (remplacé par `compose.yml`)
- `test-chat.html` (fichier de test temporaire)

---

## [0.0.1] - 2026-03-19

### Added
- Projet NestJS initial avec auth (JWT + TOTP), users, quartiers, chat WebSocket
- Connexions PostgreSQL (TypeORM), MongoDB (Mongoose), Neo4j (Bolt), Redis (ioredis)
- Swagger/OpenAPI auto-généré
- Docker Compose basique (PostgreSQL 16, MongoDB 7, Neo4j 5, Redis 7)

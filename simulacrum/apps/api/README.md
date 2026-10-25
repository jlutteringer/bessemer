# Simulacrum API

## Running locally

Run these from the repo root.

1. Copy the env file and fill in the Cognito values from `terraform output` (in `simulacrum/infrastructure/prod`):

   ```sh
   cp simulacrum/apps/api/.env.example simulacrum/apps/api/.env
   ```

2. Start Postgres:

   ```sh
   yarn db:up
   ```

3. Apply database migrations (again whenever new ones are added):

   ```sh
   yarn db:deploy
   ```

4. Start the API (`yarn dev` also starts it, along with the app):

   ```sh
   yarn workspace @simulacrum/api dev
   ```

   The API runs on http://localhost:4001 and reloads when you edit code.

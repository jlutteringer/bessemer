# Simulacrum

## Running locally

Run these from the repo root.

1. Copy the env files and fill in the Cognito values from `terraform output` (in `simulacrum/infrastructure/prod`):

   ```sh
   cp simulacrum/apps/simulacrum/.env.example simulacrum/apps/simulacrum/.env.local
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

4. Start the app and the API:

   ```sh
   yarn dev
   ```

   Open http://localhost:4000. The API runs on http://localhost:4001.

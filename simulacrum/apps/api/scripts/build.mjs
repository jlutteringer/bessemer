import { build } from 'esbuild'
import { rm } from 'node:fs/promises'

// Bundles each entry with its dependencies into one file: dist/ for running the server with node, dist-lambda/ for the Lambda zip
const entries = [
  { entry: 'src/index.ts', outfile: 'dist/index.mjs' },
  { entry: 'src/lambda.ts', outfile: 'dist-lambda/index.mjs' },
]

await Promise.all(['dist', 'dist-lambda'].map((dir) => rm(dir, { recursive: true, force: true })))

await Promise.all(
  entries.map(({ entry, outfile }) =>
    build({
      entryPoints: [entry],
      outfile,
      bundle: true,
      platform: 'node',
      target: 'node24',
      format: 'esm',
      minify: true,
      sourcemap: true,
      // CommonJS dependencies still call require() inside the ESM bundle
      banner: { js: "import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);" },
    })
  )
)

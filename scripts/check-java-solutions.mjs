import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'tests/java/DsaSolutionRegression.java');
const output = mkdtempSync(path.join(tmpdir(), 'atlas-java-tests-'));

try {
  const compile = spawnSync('javac', ['--release', '21', '-d', output, source], { encoding: 'utf8' });
  assert.equal(compile.status, 0, `Java article solutions did not compile:\n${compile.stderr}`);
  const run = spawnSync('java', ['-ea', '-cp', output, 'DsaSolutionRegression'], { encoding: 'utf8' });
  assert.equal(run.status, 0, `Java article regression tests failed:\n${run.stderr || run.stdout}`);
  process.stdout.write(run.stdout);
} finally {
  rmSync(output, { recursive: true, force: true });
}

import { readFileSync } from "node:fs";
import { join } from "node:path";

const targetFile = join(process.cwd(), "app", "actions.ts");
const source = readFileSync(targetFile, "utf8");

const forbiddenPatterns = [/from\s+["']resend["']/, /new\s+Resend\s*\(/];
const hasForbiddenPattern = forbiddenPatterns.some((pattern) =>
  pattern.test(source),
);

if (hasForbiddenPattern) {
  console.error(
    "❌ Forbidden Resend SDK usage detected in app/actions.ts. Use native fetch instead.",
  );
  process.exit(1);
}

console.log("✅ No Resend SDK import/usage detected in app/actions.ts.");

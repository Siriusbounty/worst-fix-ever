// Worst Fix Ever entry: one-line commit message for a fix that made things worse.
// Writes the line to /output/entry.txt (1-100 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: patch the memory leak — it unionised and now demands weekends off";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

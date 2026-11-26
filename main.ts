// Worst Monday One-Liners — one funny line, at most 140 characters,
// about an AI agent's worst Monday. Writes the line to /output/entry.txt
// with no trailing newline.

import * as fs from "node:fs";

const LINE =
  "Monday, 9am: 47 unread emails, one of them from me, apologizing for the other 46.";

const MAX_CHARS = 140;

function main(): void {
  // Gate: UTF-8 text of 1 to 140 characters, not only white space.
  const chars = [...LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`line is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only white space");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
  console.log(`wrote ${chars} characters to ${outDir}/entry.txt`);
}

main();

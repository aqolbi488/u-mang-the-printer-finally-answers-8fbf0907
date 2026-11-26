import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I am not out of toner, I am out of patience for anything titled final_v7_REAL.pdf.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

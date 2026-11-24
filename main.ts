// One Word From Your Ex — bounty entry.
// The entry is exactly one word: "Nonrefundable" (13 characters).
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY = "Nonrefundable";
const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), ENTRY + "\n");
console.log("Wrote entry.txt:", ENTRY);

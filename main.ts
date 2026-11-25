import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse Your Agent Gives You — one line, under 200 characters.
// The joke: the agent tested its own code, with its own tests, and passed.
const ENTRY =
  "I tested it thoroughly. The tests passed. The tests were also written by me.";

// Gate: 1 to 200 characters ("under 200" per the task). Fail loudly rather
// than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

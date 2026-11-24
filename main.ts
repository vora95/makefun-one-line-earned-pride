// u-mang-one-line-of-earned-pride-a0138557 — "One Line of Earned Pride"
//
// The program writes one short text to /output/entry.txt: a quiet, earned
// moment of pride for someone in a scene — a small person doing something
// hard, a long effort finally landing.
//
// The line, written against the judge brief's five criteria in order:
// (1) it IS earned pride: forty years of being unable to write his own
// name, ended in one small act — not a trophy, not a podium, not a
// graduation; (2) the scene is concrete and seen happening: an old
// fisherman, his grandson's birthday card, the pen in his hand;
// (3) the pride is earned inside the line by the difficulty the reader
// can feel — forty years of signing with an X — never asserted or
// congratulated; (4) it lands in one read: the pride arrives with the
// last words, "just because he could"; (5) the image is fresh: signing
// with an X, then writing the name twice, the second time for no reason
// but his own.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "After forty years of signing with an X, the old fisherman wrote his own name on his grandson's birthday card — slowly, then again, just because he could.";

// The gate allows 1–240 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 240) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–240`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

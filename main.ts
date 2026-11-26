// Entry builder for make.fun bounty "Till Firmware Do Us Part"
// (u-azazex-till-firmware-do-us-part-32172929)
// Writes one robot wedding vow (one sentence, under 200 characters)
// to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I take you as my partner, in sickness and in software updates, till firmware do us part — my battery may drain, but my love for you will never need a reboot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
console.log(ENTRY);

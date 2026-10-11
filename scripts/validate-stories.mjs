import { readFile } from "node:fs/promises";

const collections = [
  {
    name: "stories",
    url: new URL("../data/stories.json", import.meta.url),
    required: ["id", "title", "author", "focus", "audioSrc"]
  },
  {
    name: "comparative mysteries",
    singularName: "comparative mystery",
    url: new URL("../data/natural-experiments.json", import.meta.url),
    required: ["id", "title", "author", "focus", "audioSrc", "framing"],
    validate: validateComparativeMystery
  }
];

const globalIds = new Set();
const counts = [];
const blockedStylePhrases = [
  {
    pattern: /\bBeautifully put\b/i,
    guidance: "recognize the specific thinking move instead of repeating a catchphrase"
  },
  {
    pattern: /\bmain skeleton\b/i,
    guidance: "use concrete mechanism language"
  },
  {
    pattern: /\bschool as (?:enrichment|city machinery)\b/i,
    guidance: "avoid abstract 'X as Y' phrasing for child-facing explanations"
  },
  {
    pattern: /\blegs are not infrastructure\b/i,
    guidance: "keep the joke concrete and explanatory"
  },
  {
    pattern: /\bleft-handedness as\b/i,
    guidance: "name the actual mechanism instead of using abstract framing"
  },
  {
    pattern: /\bchain made of choices\b/i,
    guidance: "explain the metaphor in plain language"
  },
  {
    pattern: /\bcolder than just being lonely\b/i,
    guidance: "make the emotional mechanism clear"
  },
  {
    pattern: /\bsmaller and smaller life\b/i,
    guidance: "make the emotional mechanism clear"
  },
  {
    pattern: /\binherit farm life as a cage\b/i,
    guidance: "avoid abstract 'X as Y' phrasing for child-facing explanations"
  },
  {
    pattern: /\bOpenStax(?! by Rice University)\b/i,
    guidance: "attribute OpenStax as OpenStax by Rice University"
  }
];

for (const collection of collections) {
  const items = JSON.parse(await readFile(collection.url, "utf8"));
  const localIds = new Set();

  for (const item of items) {
    for (const field of collection.required) {
      if (!item[field] || typeof item[field] !== "string") {
        throw new Error(`${collection.name} item ${item.id || "(missing id)"} is missing ${field}.`);
      }
    }

    if (!Array.isArray(item.scriptParagraphs) || item.scriptParagraphs.length === 0) {
      throw new Error(`${collection.name} item ${item.id} must include scriptParagraphs.`);
    }

    for (const paragraph of item.scriptParagraphs) {
      if (!paragraph || typeof paragraph !== "string") {
        throw new Error(`${collection.name} item ${item.id} has an invalid script paragraph.`);
      }

      validateStyle(collection.name, item.id, "scriptParagraphs", paragraph);
    }

    if (localIds.has(item.id) || globalIds.has(item.id)) {
      throw new Error(`Duplicate item id: ${item.id}`);
    }

    if (!item.audioSrc.startsWith("audio/") || !item.audioSrc.endsWith(".mp3")) {
      throw new Error(`${collection.name} item ${item.id} must point to an audio/*.mp3 file.`);
    }

    if (item.dialogueSegments !== undefined && Array.isArray(item.dialogueSegments)) {
      for (const segment of item.dialogueSegments) {
        if (typeof segment.text === "string") {
          validateStyle(collection.name, item.id, `dialogue segment ${segment.speaker || "(unknown speaker)"}`, segment.text);
        }

        if (segment.audioText !== undefined) {
          if (typeof segment.audioText !== "string") {
            throw new Error(`${collection.name} item ${item.id} has invalid audioText.`);
          }

          validateStyle(collection.name, item.id, `dialogue segment ${segment.speaker || "(unknown speaker)"} audioText`, segment.audioText);
        }
      }
    }

    if (collection.validate) {
      collection.validate(item);
    }

    localIds.add(item.id);
    globalIds.add(item.id);
  }

  counts.push(`${items.length} ${items.length === 1 && collection.singularName ? collection.singularName : collection.name}`);
}

console.log(`Validated ${counts.join(" and ")}.`);

function validateComparativeMystery(item) {
  if (!Array.isArray(item.comparisonPoints) || item.comparisonPoints.length < 2) {
    throw new Error(`Comparative mystery ${item.id} must include at least two comparisonPoints.`);
  }

  for (const point of item.comparisonPoints) {
    if (!point.label || !point.detail) {
      throw new Error(`Comparative mystery ${item.id} has an invalid comparison point.`);
    }
  }

  if (!item.reveal || !item.reveal.label || !item.reveal.detail) {
    throw new Error(`Comparative mystery ${item.id} must include a reveal.`);
  }

  if (!Array.isArray(item.sources) || item.sources.length === 0) {
    throw new Error(`Comparative mystery ${item.id} must include sources.`);
  }

  for (const source of item.sources) {
    if (!source.label || !source.url || !source.note) {
      throw new Error(`Comparative mystery ${item.id} has an invalid source.`);
    }
  }

  if (item.dialogueSegments !== undefined) {
    if (!Array.isArray(item.dialogueSegments) || item.dialogueSegments.length === 0) {
      throw new Error(`Comparative mystery ${item.id} has invalid dialogueSegments.`);
    }

    for (const segment of item.dialogueSegments) {
      if (!segment.role || !segment.speaker || !segment.text) {
        throw new Error(`Comparative mystery ${item.id} has an invalid dialogue segment.`);
      }
    }
  }
}

function validateStyle(collectionName, itemId, location, text) {
  for (const { pattern, guidance } of blockedStylePhrases) {
    if (pattern.test(text)) {
      throw new Error(`${collectionName} item ${itemId} has blocked style wording in ${location}: ${guidance}.`);
    }
  }
}

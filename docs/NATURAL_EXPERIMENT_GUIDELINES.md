# Comparative Mystery Guidelines

## Core Promise

Make a comparison feel like a mystery a kid would want to solve.

The public lane is called Comparative Mysteries. The internal data path is still
`data/natural-experiments.json` so existing links, scripts, and audio paths keep
working.

The pattern is:

1. Something looks meaningfully comparable, or one case defies the pattern.
2. One important outcome turns out surprisingly different.
3. Easy explanations are tested and narrowed.
4. Better clues reveal old choices, hidden variables, incentives, and habits.
5. The ending leaves the listener with a reusable way to ask why.

## Comparison Shapes

A comparative mystery can use any of these shapes:

- Natural or quasi-experiment: an outside rule or event creates unusually clean comparison groups.
- Most-similar systems comparison: cases match on many dimensions but differ on the outcome.
- Divergence study: cases start similarly, then travel different paths.
- Boundary comparison: neighboring places face different rules.
- Counterintuitive comparison: the obvious predictor points one way, but reality goes another.
- Base-rate mystery: one selected group looks very different from the wider population.
- Everyday measurement puzzle: a small daily comparison teaches proxies, noise, and hidden variables.

## Investigation Prompts

Use child-facing labels while quietly preserving the analytical ideas underneath:

- The Mystery: the research question.
- What Would We Expect?: the baseline or common guess.
- Compared With: the reference class or matched cases.
- What Looks Similar?: controls and matching variables.
- What's Different?: possible explanatory variables.
- The Surprise: the outcome variable.
- Our Suspects: rival hypotheses.
- Sneaky Variables: confounders, selection effects, and measurement problems.
- Which Came First?: timing and sequence.
- Check the Evidence: data quality, sample size, base rates, and sources.
- How Could It Work?: the causal mechanism.
- Best Explanation So Far: inference with honest uncertainty.
- What Would Change Our Minds?: the next test.

## Opening Shape

Begin with the puzzle, not the lecture.

For paired cases:

> Minneapolis and Milwaukee are cold Upper Midwest cities with lakes, snow,
> Germanic roots, industrial histories, and a friendly little rivalry.

For a single surprising pattern:

> Elite hockey players are not born evenly across the calendar. A strange
> number of them arrive early in the eligibility year.

Then give two or three concrete comparability facts. Use sourced facts whenever
possible:

- geography or shared region
- similar scale or role
- similar economic development
- similar rules, deadlines, or starting conditions
- similar climate, technology, education, or infrastructure
- shared cultural inheritance, when true

Do not overclaim similarity. If one case is larger, richer, older, denser, or
structured differently, say that plainly.

## The Reveal

The reveal is the first big turn.

Use one clear number pair or contrast when possible:

> The Census Bureau's five-year ACS estimates put bicycle commuting at about
> 2 percent in Minneapolis and about half a percent in Milwaukee.

This should feel like the moment the listener says: wait, why?

But do not force a headline. Sometimes the best lesson is that the comparison
does not produce a dramatic divergence. Say that plainly:

> This is a real signal, not a thunderclap.

Good comparative thinking includes restraint. If the evidence is modest, teach
the listener to say "interesting, but not case closed."

## False Suspects

List two or three tempting explanations, then show why they are incomplete.

Good false suspects:

- weather alone
- wealth alone
- geography alone
- one famous leader
- national personality
- culture as a vague catch-all
- technology by itself
- the first number that happens to be visible

The goal is not to mock the guesses. The goal is to teach better causal
thinking. A funny suspect is welcome if it is handled cleanly:

> We can inspect the tall-Midwestern-leg theory and then set it aside. Height is
> not a clean city-level measure here, and long legs do not build protected bike
> lanes.

## Grounded Clues

Move from guesses to evidence. When the evidence needs an unfamiliar term,
translate it immediately for a bright third grader.

Good:

> A feedback loop is a habit that starts feeding itself. More safe routes bring
> more ordinary riders. More ordinary riders make bike projects feel less odd.

Less good:

> Multimodal normalization emerges from recursive infrastructural reinforcement.

Look for:

- timing
- rules
- institutions
- infrastructure
- maps and networks
- incentives
- social status
- safety
- maintenance
- money
- measurement error
- feedback loops
- moments when one choice made the next choice easier

Keep adult concepts in the background until the pattern is clear. You can name
them near the end only if the listener has already felt the pattern:

- path dependence
- lock-in
- incentives
- selection effects
- base rates
- omitted variables
- causal mechanism

## Script Shape

The default spoken target is 500-750 words.

Use this structure:

1. Mystery doorway: 3-5 sentences.
2. Comparability facts: 2-4 sourced facts.
3. Reveal: 1 sharp number pair or contrast.
4. False suspects: 2-3 tempting explanations that do not fully work.
5. Better clues: 3-5 grounded historical, structural, or data clues.
6. Evidence strength: strong divergence, modest signal, or weak/no pattern?
7. Pattern name: what opened, what locked in, what habit grew?
8. Final question: something reusable, not just this case.

## Kid Voice and Pauses

Comparative mysteries can include two recurring kid interlocutors. They are not
there to be cute filler. They make the thinking audible.

Audrey is crisp, incredulous, and systems-minded. She is a little prim, a little
combative, and very interested in whether the explanation actually works.

- "Wait. What does that mean?"
- "So money and phones do not solve the mystery."
- "That is not a tiny difference."
- "I am arranging the evidence in a neat pile."

Paxten is softer, more open, and more contemplative. She adds space and wonder:

- "Could it really be like that?"
- "How uncanny."
- "You would not expect that."
- "Let me consider that a bit."

Use the kid voice to:

- slow down dense passages
- restate the hard point in plain words
- ask the obvious question
- challenge weak comparisons
- add a little silliness without breaking the investigation

When a big question lands, give it air.

Good:

> Wait. Two percent and half a percent?
>
> Yes. Hmm. Interesting.

Do not rush from a surprising number into an explanation. Let the listener feel
the puzzle first.

## Tone

Use a streamlined Radiolab-like feel:

- curious
- quick
- vivid
- conversational
- concrete
- lightly suspenseful

Avoid jargon-babble and painful college essay endings.

Good:

> The answer is not one big switch. It is a bundle of smaller switches, flipped
> at different times.

Less good:

> Divergent institutional matrices mediated behavioral uptake across
> post-industrial civic formations.

Good ending:

> When two places look alike today, what old habit has one of them been
> practicing longer?

Less good ending:

> What historical machine was each city sitting inside?

## Source Rules

Every comparative mystery should include repository-level sources in
`data/natural-experiments.json`.

Prefer:

- `.gov` for official diplomatic, historical, census, climate, or agency facts
- `.edu` for university scholarship
- `.org` for reputable research centers, museums, libraries, and educational
  organizations
- peer-reviewed books or articles when the explanation rests on scholarship

In the script, attribute the key numbers in plain language:

> According to the Census Bureau...

> PeopleForBikes' 2026 City Ratings...

Sources should support the comparison and the explanation. They should not sit
there decoratively.

## Data Fields

Each item in `data/natural-experiments.json` should include:

- `id`: short machine-readable name
- `title`: question-style title
- `author`: usually `Comparative mystery`
- `lengthLabel`: usually `investigation`
- `focus`: one-line teaser
- `framing`: the comparison in one sentence
- `comparisonPoints`: two or more sourced comparability points
- `reveal`: the surprising difference
- `audioSrc`: MP3 path
- `scriptParagraphs`: spoken script
- `dialogueSegments`: optional speaker turns for ElevenLabs dialogue mode
- `sources`: repository-level source list with notes

Each dialogue segment should include:

- `role`: `narrator`, `audrey`, or `paxten`
- `speaker`: display name in the web player
- `text`: clean script text shown on the page
- `audioText`: optional ElevenLabs performance text with tags such as
  `[curious]`

## Creation Pathway

1. Add the question and source-backed script to `data/natural-experiments.json`.
2. Run validation.
3. Generate audio with:

```bash
npm run audio:minneapolis-milwaukee-biking
```

For a new item, add a matching package script or use:

```bash
node scripts/generate-audio.mjs --collection natural-experiments --story item-id
```

For dialogue scripts, set these in `elevenlabs.local.env`:

```bash
ELEVENLABS_NARRATOR_VOICE_ID=your_narrator_voice
ELEVENLABS_AUDREY_VOICE_ID=jkUnCsbErmJrcbWk1Hmh
ELEVENLABS_PAXTEN_VOICE_ID=XXphLKNRxvJ1Qa95KBhX
```

4. Check the MP3 path listed in `audioSrc`.
5. Commit and push the data, docs, UI changes, and audio file.

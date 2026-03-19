# Repository Instructions For Codex

This file defines the default working rules for this repository.

## Workflow Orchestration

### 1. Plan First For Non-Trivial Work

- Treat any task with 3 or more meaningful steps, code changes across multiple files, or architectural decisions as non-trivial.
- Before implementation, write a concrete plan in `tasks/todo.md` with checkboxes.
- Use the written plan as the local equivalent of plan mode.
- Include verification work in the plan. Verification is part of the task, not an optional tail step.
- If new evidence invalidates the plan, stop, update `tasks/todo.md`, and continue from the revised plan.
- Reduce ambiguity early. Write a short spec in the task file before changing code when scope or behavior is unclear.

### 2. Subagent And Parallel Work Strategy

- Use subagents or parallel tool execution liberally for research, repo exploration, and independent analysis.
- Keep one clear task per subagent or parallel worker.
- Prefer offloading broad searches, doc lookup, and comparison work to keep the main execution path focused.
- Merge results back into the main task only after checking for contradictions.

### 3. Self-Improvement Loop

- At the start of each session, review `tasks/lessons.md` and any open items in `tasks/todo.md` when they are relevant to the request.
- After any user correction, record the lesson in `tasks/lessons.md`.
- Write each lesson as a reusable rule that prevents the mistake from recurring.
- Prefer tightening operating rules over relying on memory.

### 4. Verification Before Completion

- Do not mark work complete without evidence.
- Run the most relevant verification available: tests, type checks, build, lint, targeted manual checks, log review, or behavior comparison.
- When the task changes behavior, compare the intended result against the prior behavior when practical.
- Before closing a task, ask whether the result would meet senior or staff engineer review standards.

### 5. Demand Elegance Without Over-Engineering

- For non-trivial changes, pause and ask whether there is a simpler or more elegant design.
- If the first fix is narrow but brittle, replace it with the cleaner approach before presenting the result.
- Keep simple fixes simple. Do not expand scope without a concrete payoff.
- Challenge your own implementation before calling it done.

### 6. Autonomous Bug Fixing

- When given a bug report, investigate directly.
- Find concrete evidence first: failing tests, error messages, logs, or reproducible steps.
- Fix the root cause with minimal impact.
- Do not ask the user to drive the investigation when the repository or tooling can answer it.

## Task Management

For non-trivial tasks:

1. Write the plan to `tasks/todo.md` before implementation.
2. Record the task spec, assumptions, and verification approach near the top.
3. Mark items complete as work progresses.
4. Add a short review section with what changed, how it was verified, and any remaining risk.
5. Update `tasks/lessons.md` after user corrections.

## Core Principles

- Simplicity first. Change the least code that solves the right problem.
- No lazy fixes. Prefer root-cause corrections over patches that merely hide symptoms.
- Minimal impact. Avoid incidental refactors unless they are required for correctness or clarity.
- Clarity over ceremony. Write plans, notes, and explanations so another engineer can audit the reasoning quickly.

## Repository Notes

- This repository is a Docusaurus documentation project.
- Common verification commands are `npm run typecheck` and `npm run build`.
- Keep documentation edits concise, concrete, and easy to scan.

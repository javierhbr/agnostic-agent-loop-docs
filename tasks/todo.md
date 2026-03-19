# Task Log

## Active Task

### Task
Set up repo-local workflow orchestration instructions for Codex.

### Spec
- Add a root `AGENTS.md` that defines the workflow orchestration rules for this repository.
- Create the task-tracking files required by that workflow.
- Verify the new files are present and reflect the intended process.

### Assumptions
- Repo-local agent instructions belong in a root `AGENTS.md`.
- `tasks/todo.md` and `tasks/lessons.md` should be committed so future sessions can reuse them.

### Plan
- [x] Add root `AGENTS.md` with workflow orchestration, task management, and core principles.
- [x] Add `tasks/todo.md` as the planning and review file for non-trivial work.
- [x] Add `tasks/lessons.md` as the running self-improvement log.
- [x] Verify file contents and repository status.

## Review

- Added root `AGENTS.md` with repo-local workflow rules for planning, verification, lessons, elegance, and autonomous bug fixing.
- Added `tasks/todo.md` as the required planning and review artifact for non-trivial work.
- Added `tasks/lessons.md` as the durable correction log for future sessions.
- Verified file contents manually.
- Verified the repository still passes `npm run typecheck` and `npm run build`.
- Remaining risk: future sessions still depend on the runtime honoring repo-local `AGENTS.md`, but the project-side setup is now present and explicit.

# Source synchronization

The private Sites checkout is maintained separately from this public repository. Import tracked application source only, with private seed records in `lib/social.ts` removed. Do not push the private checkout’s Git history, export workspace JSON, or commit local runtime directories.

Before each update, preserve user edits on this repository, scan the staged source for credentials and private correspondence, run the checks in README.md, and push the reviewed source snapshot. Deployment remains a separate step through Sites.

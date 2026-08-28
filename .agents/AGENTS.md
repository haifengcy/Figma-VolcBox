# Custom Rules for XTrend Translation Plugin Project

## 1. Version Label Integrity & Auto-Increment
- **CRITICAL REQUIREMENT**: You MUST always retain the version label element inside `ui.html`.
- The version label element must match the exact HTML pattern: `<span id="plugin-version">X.Y.Z</span>`.
- Never remove, delete, or rename this element during visual style refactorings or code rewrites.
- The build server (`.claude/serve.js`) tracks the incremented version in `.claude/version.txt` and automatically replaces `<span id="plugin-version">...</span>` inside `ui.html` upon edits. Keeping this element ensures the version displays correctly in the UI.

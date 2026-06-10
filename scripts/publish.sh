#!/usr/bin/env bash
# Publish content changes: commit everything and push to main, which triggers
# a Vercel production deploy.
#
# Usage:
#   npm run publish -- "your commit message"
#   ./scripts/publish.sh "your commit message"
# Message is optional; a timestamped one is used if omitted.
set -euo pipefail
cd "$(dirname "$0")/.."

if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "Nothing to publish — no changes."
  exit 0
fi

msg="${1:-content: update $(date '+%Y-%m-%d %H:%M')}"
git add -A
git commit -m "$msg"
git push

echo
echo "Pushed to main. Vercel is building now."
echo "Live in ~1 min: https://answering-hard-questions.vercel.app"

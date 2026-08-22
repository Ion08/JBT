# Gates — repo cleanup

- [x] G1 Root-level duplicates of public/ assets removed (images, stp/stp.gz, zips, main.js, viewer.js)
  CHECK: ls *.JPG *.jpg *.stp *.gz *.zip main.js viewer.js 2>/dev/null | wc -l
  EVIDENCE: `0` (zsh: no matches found; root now has no loose assets)
- [x] G2 Legacy static site (index.html, style.css) removed
  CHECK: test ! -f index.html && test ! -f style.css && echo OK
  EVIDENCE: OK — both gone from git status (`D index.html`, `D style.css`) and ls
- [x] G3 Duplicate/unreferenced assets removed
  EVIDENCE: deleted yeetus_stp/ (byte-identical to yeetus/, diff -rq empty), public/{T-shirts.PNG, Ion_Pavelescu_new.JPG, rr-logo.jpeg, dclassic*.JPG}; grep across app/ + public/*.js shows zero references to any of them (only rr-logo.png, favicon.svg used)
- [x] G4 Build artifacts ignored
  CHECK: grep tsbuildinfo .gitignore && test ! -f tsconfig.tsbuildinfo && echo OK
  EVIDENCE: `.gitignore:5 *.tsbuildinfo`; file deleted; build regenerated nothing at root (out/ only)
- [x] G5 Site still builds
  CHECK: npm run build
  EVIDENCE: exit 0 — "✓ Exporting (2/2)", route / 3.81 kB prerendered static

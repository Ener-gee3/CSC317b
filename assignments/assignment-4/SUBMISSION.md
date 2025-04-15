Assignment 4 Submission

Name: Chadd Holman Student ID: 921258907 

Links

GitHub Repository: https://github.com/your‑username/assignment‑4

Live Demo (GitHub Pages): https://your‑username.github.io/assignment‑4/


This project delivers a lightweight, single‑page JavaScript calculator integrated into my portfolio site.  The calculator is written in vanilla JS, HTML, and CSS—no external libraries—so it loads quickly and is easy to audit.  Key features include full keyboard and touch support, real‑time expression evaluation with percentage handling, a dedicated back‑space key, and animated calculation history that fades in at the top of the list.  A memory register (M+, M‑, MR) is persisted with localStorage, while a theme toggle adds an accessible dark‑mode experience.  The UI is responsive: buttons are laid out with CSS Grid, sized with flex‑friendly units, and styled as circular controls that scale down on mobile.

Challenges & How I Solved Them

Challenge
Parsing arbitrary user input without third‑party math libraries:

Solution
Used a regex whitelist to filter characters and wrapped the evaluation in a strict‑mode Function constructor with try/catch to trap errors.

Challenge
Persisting memory and theme preferences across sessions

Solution
Leveraged localStorage, then debugged scope issues by moving the memory variable to module scope and updating it on each button press.

Challenge
Ensuring keyboard events visually sync with on‑screen buttons

Solution
Added an active class flash with a 150 ms timeout to mirror physical key presses.


Extra Features:

One‑click dark mode with persisted preference.

Animated history list (CSS @keyframes fade‑in + prepend).

Memory add, subtract, and recall buttons.

Fully responsive layout and circular buttons for a modern aesthetic.


Acknowledgements:

MDN Web Docs for reference on localStorage, addEventListener, and RegExp syntax.

Stack Overflow answers on safe expression evaluation patterns in vanilla JS.

Google Material Design palette for the accent color #66bb6a.


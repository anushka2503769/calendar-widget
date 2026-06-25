# Aesthetic Calendar Widget for Notion

A lightweight, responsive calendar widget designed for dark-themed, earthy Notion workspaces. This widget automatically maps the current date metrics, frames them within an antique display structure, and applies a rich High Renaissance velvet burgundy color profile.

---

## Features
* **Automated Day Matrix**: Automatically calculates the exact weekday start offset and total days for the current calendar month.
* **Today Highlight Ring**: Injects a custom burnished gold marker layer over the cell matching the active calendar date.
* **Deep Velvet Canvas**: Replaces standard brown schemes with a deep wine/burgundy and antique gold leaf layout inspired by classical portrait textiles.
* **Fluid Container Scaling**: Utilizes CSS container queries to ensure that typography sizing, structural margins, and the day cells adjust seamlessly based on the dimensions of the embed block wrapper.
* **Anti-Flicker Engineering**: Employs an active script layer to match container systems and eliminate white loading screen flashes.

---

## Project Structure
Ensure your workspace directory contains these three files named exactly as shown:
```text
├── index.html   # Main card layout and typography engines
├── style.css    # Typography scale, grid definitions, and palette variables
└── script.js    # Date generation engine and theme matching logic
```

---

## Step-by-Step Setup Guide

### 1. Save Your Source Files
1. Copy the code blocks for index.html, style.css, and script.js provided into separate plain text files using any standard code editor (such as VS Code, Notepad, or TextEdit).
2. Save them into a dedicated directory on your system.

### 2. Host the Code Online via GitHub Pages
Because Notion requires an active internet URL link to register embed components, web hosting is necessary:
1. Navigate to GitHub.com and access your account profile.
2. Select the New button to instantiate a fresh project repository. Assign a title such as notion-calendar-widget.
3. Configure the visibility parameters to Public.
4. Finalize the repository creation.
5. Click the option to upload an existing file, then drag and drop index.html, style.css, and script.js into the staging field.
6. Commit the structural file updates.
7. Navigate to the repository Settings panel from the horizontal menu header, locate Pages in the lateral sidebar menu, and select it.
8. Locate Build and deployment, verify the deployment branch is locked to main (or master), and click Save.
9. Allow up to two minutes for structural builds, then refresh the dashboard interface. Copy the active live URL displaying at the header of the page.

---

## Integrating with Notion

1. Copy the live webpage URL destination string from your GitHub Pages portal.
2. Navigate directly to your active Notion canvas dashboard interface.
3. Select an empty line grid element space, type /embed, and choose the embed option module.
4. Insert your live repository deployment link into the input destination path bar.
5. Confirm the action to initialize the live viewport module.
6. Scale and organize the layout grid boundary handles to match your preferred workspace columns.

---

## Customization Variations

### Modifying the Canvas Palette
To alter the color tokens to match another classical painting aesthetic variation, modify the hex color keys at the absolute top of style.css:
```css
:root {
  --bg-dark: #191919;       /* Matches Notion canvas backgrounds */
  --card-bg: #1D1214;       /* Velvet Burgundy backdrop framework */
  --accent-gold: #D4B26F;   /* Updates structural borders and text titles */
  --muted-rose: #A36A75;    /* Sets weekday label colors and decorative dividers */
  --text-parchment: #ECE6DC; /* Controls date cell text string brightness standards */
}
```

---

## License
Permission is granted to modify, personalize, and integrate this script engine structure into your personal workspace environment layouts.

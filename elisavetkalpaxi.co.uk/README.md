Hello

## Setup

// install mac hombrew / windows chocolatey

// install nodejs
for mac: brew install nodejs 
for windows: choco install nodejs

// install pnpm
npm i -g pnpm
pnpm setup

// windows: install local-web-server
pnpm install -g local-web-server

// mac: local server?

### Usage

Clone the source files of the theme and navigate into the theme's root directory. 
Run `pnpm install` and then run `pnpm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. 
See the `package.json` file to see which scripts are included.

#### pnpm Scripts

- `pnpm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `pnpm run build:assets` copies the files in the `src/assets/` directory into `dist`
- `pnpm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
- `pnpm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `pnpm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
- `pnpm run clean` deletes the `dist` directory to prepare for rebuilding the project
- `pnpm run start:debug` runs the project in debug mode
- `pnpm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

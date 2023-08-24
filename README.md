## Preparation

- Register on github.com
- Add and verify user as collaborator

### Install programs, run code in Terminal app

- Mac: install Homebrew
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

- Mac: install NodeJS
`brew install node`

- Mac: install Microsoft Visual Studio Code 
`brew install --cask visual-studio-code`

- install pnpm
`npm i -g pnpm; pnpm setup`

- install local web server
`pnpm install -g local-web-server`

- install git
`brew install git`

// Setup github
`git config --global user.name "Full Name"`
`git config --global user.email your@email.com`


### Open project directory in VSCode and connect to Github storage

- open local project folder, it could be an empty directory
- at left-side, "Source Control" tab, if Github not connected, click Clone Repository button, and from popup click "Clone from Github". Follow verification instructions
- "SOurce Control" tab should show two sections, Source Control Repositories with Github link; and Source Control, which could have the Changes sub-section.

### Describe directories anf files structures

- content for website is in `/src` directory
- text files are in `/src/html`; files written in Pug and Markdown for  alternative HTML code, as Pug files broken into partials and templates to avoid code duplication.
- images are in `/src/assets/img`
- style sheets are in `/src/scss`, using Sass styling format, instead simple CSS, files broken down into partials to avoid one long css file. Bootstrap css framework imported with modified variables.
- javascript files are in `/src/js`, imported SimpleLightbox framework for portfolio popups.
- `/archive` directory is for the old archive website files 
- `/dist` directory is for the final generated website
- `/node_modules`, `/scripts`, `.package.json, .pnpm-lock.yaml` are part of the generator
- `.editorconfig, .gitignore,` files are part of git and the editor
- `Readme.md` is the index information file on Github storage.

### Make changes to content, generate in next section

- of course files are edited in VSCode app 
- make changes on website text in `/src/html`, find it's partial
- make changes on css styles in `/src/scss` 
- make changes on js in `/src/js` 
- save files of course
- to save and sync changes back to Github storage, see later section.

### Generate locally the distribution files, in VSCode terminal

- open VSCode integrated Terminal, in `menu/View/Terminal`
- make sure Terminal is open at current directory; check `pwd` or `cwd`
- if not current directory, use `cd` command to go inside directory
- once `pwd` show you the current project directory, than  follow with the pnpm commands to build the distribution files. 

- `pnpm build` builds the project - fonts, images, HTML, JS, and CSS into `/dist` directory.
- `pnpm build:html` compiles only the HTML files into `/dist` directory.
- `pnpm run build:scripts` compiles only the JS files into `/dist` directory.
- `pnpm run build:scss` compiles only the CSS files into `/dist` directory.

### Sync changes back to Github storage

- at VSCode, Source Code tab, Changes sub-section should show the files with changes.
- click + on the sub-section, or on all the + at each files; those will be added to Staged Changes sub-section.
- Staged Changes sub-sections are a collection of changes ready to save into git data; save in this case is Commit - first write a line of Commit message to describe why and what changes are made, then click Commit. Best to click Commit & Push, otherwise Push or Sync needed later at this tab to save (push or sync) changes from laptop git to online Github storage.


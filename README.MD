Personal site to show your information.

This site is using AngularJS 2

### Quick start
> Clone/Download the repo 

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/amaroRafael/site-personal.git

# change directory to our repo
cd site-personal

# install the repo with npm
npm install

# start the server
npm start
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

## File Structure
This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
site-personal/
 ├──app/                        * WebApp: folder. Our source files that will be compiled to javascript
 │   ├──boot.ts                 * our entry file for our browser environment
 │   │
 │   ├──app.component.ts        * a simple version of our App component components
 │   │
 │   ├──about/                  * WebApp: folder
 │   │   ├──about.component.ts  * about component
 │   │   └──about.html          * where we generate our about template
 │   └──skills/ 
 │       ├──skills.component.ts * skill component
 │       ├──skill.ts            * interface skill.ts
 │       └──skills.html         * where we generate our skills template
 │
 ├──assets/                     * static assets are served here
 │
 ├──files/                      * where we store resume.pdf to allow download
 │
 ├──node_modules/               * this is our global dependencies repository
 │
 ├──tsconfig.json               * config that webpack uses for typescript
 ├──package.json                * what npm uses to manage it's dependencies
 │
 └──index.html                  * Index.html: where we generate our index page
```

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)
# Jig

This guide is intended to be different than most 'seeds' currently popular in the Front End space. Instead of providing a `gulpfile.js`, `gruntfile.js`, `npm` script or Webpack config, this guide should be a living list of helper utilities and concepts to get projects off on the right foot.

## What is a Jig?

A jig is a custom tool used in manufacturing. From [Wikipedia](https://en.wikipedia.org/wiki/Jig_(tool))
> A jig's primary purpose is to provide repeatability, accuracy, and interchangeability in the manufacturing of products.

Software Development != manufacturing of products, but there are still plenty of practices and tools that we can repeat across projects.

## Guide Usage

This guide is organized by the type of asset used. For example, a Sass jig would live inside the CSS directory because it will in the end be compiled to CSS. This README is also organized by asset type and should contain links to relavent jigs inside the repository.

### Please Help!

**Pull requests are very welcome.** This guide is far from comprehensive and every developer has something new to bring to the table. If you have something you think should be in the guide or found something that needs improvement please open issues and make pull requests.

***

## Index

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [Fonts](#fonts)
- [Images](#images)
- [Icons](#icons)
- [SVG](#svg)
- [Build Tools](#build-tools)
- [Dotfiles](#dotfiles)

***

# HTML

## Templating Languages

There are many HTML templating engines out there including [Pug](https://pugjs.org/api/getting-started.html), [Haml](http://haml.info/), [Mustache](https://github.com/janl/mustache.js), and many more.

Each templating engine comes with a unique set of pro's and con's but a templating engine will increase process efficiency in the vast majority of projects due to things like generating the majority of tags reducing the actual time spent typing and tracking down missing HTML end tags, and the ability to break components down into composite parts and reuse. If a project has a templating engine built in (like an Angular 2 or React project) then it is likely best to stick with the built in engine. If there is room for a decision on the engine, however, it is recommended that the team picks one engine and sticks with it across multiple projects. 

There are reasons to switch templating engines but the majority of the good ones out there have enough in common that switching engines without a technical reason to do so (instead, a preferential reason) complicates processes and is a waste of developer time, energy, and ultimately money. 

# CSS

## Pre-Processors

### Sass

#### Directory Structure

When building the directory structure in projects using Sass it is sometimes beneficial to group "like" types and do single a single `@import` per type into a larger composite file. This saves a lot of time tracking down individual files and ensuring that files get imported in the proper order. 

For example:

```
css
-- components
-- -- componentX
-- -- -- _imports.scss
-- -- -- _componentX.scss
-- -- -- _componentXHeader.scss
-- -- _imports.scss // _imports.scss should import the _imports.scss from each of the component directories.
-- mixins
-- -- _imports.scss
-- functions
-- -- _imports.scss
-- variables
-- -- _colors.scss
-- -- _typography.scss
-- -- _imports.scss // The _imports.scss file in each directory should import all files in the given directory, such as @import _colors; @import _typography;
-- styles.scss // The styles.scss should include single line imports of variables/_imports.scss; functions/_imports.scss etc.
```

An alternative approach is to divide project directory structure by components and include an HTML template file, the relevant CSS and JavaScript all in the same directory and build each of the assets to their composite files using a build process.

For example:

```
componentX
-- _componentX.scss
-- _componentX.pug
-- _componentX.js
componentY
-- _componentY.scss
-- _componentY.pug
-- _componentY.js
```

This approach is similar to the Rule of 1 made more popular by Angular 2. 

#### [Asset Pathing](css/sass/asset-pathing.scss)

Oftentimes in a project we have assets that don't all live in the same place. While including a single sprite file would be nice, it isn't always the reality. To deal with that it may be useful to use a function to remove the mental load of recalling a path each time and updating it when it changes. 

#### [Pixel to REM](css/sass/px-to-rem.scss)

This method converts pixels to rems by doing the math for you using the font-size declared in the HTML root. `pxToRem()` conversions are useful when working towards a pixel perfect design from mockups while using a more responsive unit.

#### [Flexbox Prefixing](css/sass/flexbox-prefixing.scss)

In general we lean away from auto-prefixers in favor of a solution we have more control over. Flexbox prefixing is a good case for that. This mixin includes functionality for cross browser flexbox support with a `flex()` and `flex-x()` include.

#### [Placeholder Prefixing](css/sass/placeholder-prefixing.scss)

Cross browser support (`-ms-, -webkit-, and -moz`) support for styling the input placeholder.

# JavaScript

## [Array Shuffling](javascript/array-shuffle.js)

Array shuffling is useful when you want to randomize the order that elements come out of an array, or choose an element at random.

## [Interpolation](javascript/interpolation.js)

String > Object interpolation is very useful when you need to replace certain parts of a string with an object received or constructed elsewhere. For example if you receive an object with a title prefix (Ms.) and a greeting (Salutations) you would be able to update a string with C# style markers in a string.

String: `{1} {2} Jones,`
Object: `{"2": "Salutations", "1": "Ms."}`

# Fonts

## Webfonts

### [webfontloader](fonts/webfontloader.js)

In general, despite a potential brief flash of unstyled text (FOUT), it is best to load webfonts asynchronously. After a user has visited a page on your site once those fonts will usually be cached in their browser so they should only see a FOUT once. This downside of a single FOUT is usually outweighed by the benefits of a significantly faster loading site that is never blocked from loading if the resource, be it Google or Typekit, is unable to serve the fonts that have been requested.

# Images

# SVG

# Icons

# Build Tools

# Dotfiles

## NPM

### [.npmrc](dotfiles/npm/.npmrc)

Installing NPM packages is great until members on a team aren't using the same versions. This is usually caused by a `^` or `~` in front of a package version in your `package.json`. This can be solved by an addition to the command line (more cognitive load) or a simple `.npmrc` file placed in the root of the project alongside the `package.json` that tells NPM to save the exact version number.

### [.nvmrc](dotfiles/nvm/.nvmrc)

[NVM](https://github.com/creationix/nvm) is a useful utility for managing versions of Node on a single machine. Some projects may require a newer version of Node than others and NVM makes it easy to switch between those versions. An `.nvmrc` file will force NVM to default to a specific, predetermined version of Node rather than typing `nvm use <version number>` every time.

# The Front-End Jig

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

# HTML

## Templating Languages

### Pug (Jade)

# CSS

## Pre-Processors

### Sass

#### Directory Structure

#### [Asset Pathing](css/sass/asset-pathing.scss)

Oftentimes in a project we have assets that don't all live in the same place. While including a single sprite file would be nice, it isn't always the reality. To deal with that it may be useful to use a function to remove the mental load of recalling a path each time and updating it when it changes. 

#### [Pixel to REM](css/sass/px-to-rem.scss)

This method converts pixels to rems by doing the math for you using the font-size declared in the HTML root. `pxToRem()` conversions are useful when working towards a pixel perfect design from mockups while using a more responsive unit.

# JavaScript

# Fonts

# Images

# Icons

# Build Tools

# Dotfiles

## NPM

### [.npmrc](dotfiles/npm/.npmrc)

Installing NPM packages is great until members on a team aren't using the same versions. This is usually caused by a `^` or `~` in front of a package version in your `package.json`. This can be solved by an addition to the command line (more cognitive load) or a simple `.npmrc` file placed in the root of the project alongside the `package.json` that tells NPM to save the exact version number.

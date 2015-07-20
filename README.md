# Gulp-Email-System

This project is inspired by [Lee Munroe's](https://github.com/leemunroe) [grunt-email-design](https://github.com/leemunroe/grunt-email-workflow) workflow.

It's purpose is to help simplify email template production by allowing you to use SCSS for styling, Handlebars for templating and automatic inlining of the CSS for you.

## Requirements

* [Node.js](http://nodejs.org/) - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Gulp.js - `npm install -g gulp`
* [Litmus](https://litmus.com) (optional)

## Getting Started

If you haven't used [Gulp](http://gulpjs.com/) before check out A List Apart's post on [getting started with Gulp](http://alistapart.com/blog/post/getting-started-with-gulp).

Clone this repo, cd to the directory, run `npm install` to install the necessary packages. This will install all dependencies.

```
git clone https://github.com/vivianspencer/gulp-email-system
cd gulp-email-system
npm install
```

Run `gulp` in the terminal and look at the generated /build folder to see your compiled and inlined email templates.

## Testing

Run the following command and in a few seconds/minutes, you'll see the test appear in Litmus for you!

```
gulp litmus
```

## Contributing

Any contributions will be happily received. Just open an issue or make a pull request.
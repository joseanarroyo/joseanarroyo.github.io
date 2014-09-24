My Portfolio Website
====================

## Getting Started

Make sure you have globally installed [Bower](http://bower.io) and [Gulp.js](http://gulpjs.com) before proceeding.

#### 1. Install bower components:

```sh
$ bower install
```

#### 2. Install node modules:

```sh
$ npm install
```

#### 3. Run gulp:

```sh
$ gulp
```

The default task will run, which will:

1. Setup a webserver on [http://localhost:8080](http://localhost:8080) working with livereload
2. Copy bootstrap and jquery files from `bower_components` to corresponding `css` and `js` folders
3. Watch for any changes you make to `.html` and `.scss` files. Whenever you change and save one of these files, gulp will compile Sass if necessary and reload the page automatically.

If you want to cancel the running gulp task just press `Control + C`.

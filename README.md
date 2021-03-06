# Cuda
Single Page Portfolio - [link](https://marynahapon.github.io/Cuda/build/index.html). 
With flex-wrap property.


## Technologies

- [**Gulp**](http://gulpjs.com) - Automate and enhance your workflow
- [**Pug**](https://pugjs.org) - Terse language for writing HTML templates.
- [**Stylus**](http://stylus-lang.com) - CSS with superpowers.


## Requirements and Use
### Requirements

- [Node.js](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com)

```bash
$ npm install -g gulp
```

### Use

```bash
$ git clone https://github.com/MarynaHapon/Cuda
$ npm install
$ gulp
```

## Tasks

```gulp```: Runs the **default task** (dev) including the following ones :

- ```styles```
- ```pug```
- ```scripts```
- ```img```
- ``svg``
- ``clean``
- ``fonts``
- ``serve``
- ``watch``

```js:uglify```: Runs the **gulp-uglifyjs** plugin for the **main.js** file.

```js:concat```: Runs the **gulp-concat** plugin for chosen files.

## Project Structure

```
.
├── /build/                         # Minified, optimized and compiled files.
│   ├── /static/                    # Static folder.
│   │   ├── /css/                   # CSS style files.
│   │   ├── /img/                   # Static files.
│   │   │   └── /content/             # Images folder.
│   │   │   └── /general/             # Images folder.
│   │   └── /js/                    # JS files.
│   └── *.html                      # Rendered and compiled HTMLs from Pug.
├── /data/                          # JSON files with site content.
│   └── content.json                  # JSON file with site content.
│   └── navigation.json               # JSON file with navigation content.
├── /dev/                           # Dev folder.
│   ├── /pug/                       # Pug folder.
│   │   ├── /components/            # Pug folder.
│   │   ├── /layout/                # Pug folder.
│   │   ├── /modules/               # Pug folder.
│   │   ├── /pages/                 # Pug folder.
│   │   └── mixins.pug              # Pug folder.
│   ├── /static/                    # Static folder.
│   │   ├── /fonts/                 # Fonts folder.
│   │   ├── /img/                   # Dev folder.
│   │   │   └── /content/             # Images folder.
│   │   │   └── /general/             # Images folder.
│   │   │   └── /svg/                 # Images folder.
│   │   ├── /js/                    # JavaScript files.
│   │   ├── /stylus/                # Stylus  folder.
│   │   │   └── /components/        # Stylus  folder.
│   │   │   └── /modules/           # Stylus  folder.
│   │   │   └── /pages/             # Stylus  folder.
│   │   │   └── /content/           # Stylus  folder.
│   │   │   └── common_styles.styl    # Stylus  file.
│   │   │   └── fonts.styl            # Stylus  file.
│   │   │   └── libs.styl             # Stylus  file.
│   │   │   └── main.styl             # Stylus  file.
│   │   │   └── media.styl            # Stylus  file.
│   │   │   └── mixins.styl           # Stylus  file.
│   │   │   └── vars.styl             # Stylus  file.
├── /node_modules/                  # Node modules dependencies and packages.
└── gulpfile.js              # Gulp automatization file.
```

##  Starter Kit
[gulp4start](https://github.com/FARCER/gulp4start)

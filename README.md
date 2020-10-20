# Grapesjs Rulers

Add rulers and guides for `grapesjs` designer mode

[DEMO](##)

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<link href="https://unpkg.com/grapesjs-rulers/dist/grapesjs-rulers.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-rulers"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-rulers'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-rulers`
* Commands
    * `ruler-visibility`
    * `guides-visibility`
    * `clear-guides`
    * `get-guides`
    * `set-guides`
    * `set-zoom`
    * `destroy-ruler`


## Options

| Option | Description | Default |
|-|-|-
| `dragMode` | Dragmode to set when rulers are toggled | `translate` |
| `rulerHeight` | Ruler thickness | `15` |
| `canvasZoom` | Zoom out the canvas | `94` |
| `rulerOpts` | Options for ruler object | `{}` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-rulers`
* NPM
  * `npm i grapesjs-rulers`
* GIT
  * `git clone https://github.com/Ju99ernaut/grapesjs-rulers.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<link href="https://unpkg.com/grapesjs-rulers/dist/grapesjs-rulers.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-rulers.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-rulers'],
      pluginsOpts: {
        'grapesjs-rulers': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-rulers';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-rulers/dist/grapesjs-rulers.min.css'

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/Ju99ernaut/grapesjs-rulers.git
$ cd grapesjs-rulers
```

Install dependencies

```sh
$ npm i
```

Build css

```sh
$ npm run build:css
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT

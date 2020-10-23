# Grapesjs Rulers

Add rulers and guides for `grapesjs` designer mode

![Screenshot](https://i.imgur.com/3UA8t1E.png)

[DEMO](https://codepen.io/ju99ernaut/pen/NWNEWpV)

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
    * `ruler-visibility` - toggle ruler visibility
    * `guides-visibility` - toggle guides visibility
    * `clear-guides`
    * `get-guides` - get array of guides
    * `set-guides` - set guides from array e.g. `editor.runCommand('set-guides', {guides: [...]})`
    * `set-zoom` - sets zoom and updates rulers e.g. `editor.runCommand('set-zoom', {zoom: 90})`
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

Adding rulers toggle as panel button example
```js
const pn = editor.Panels;
const panelViews = pn.addPanel({
  id: 'options'
});
panelViews.get('buttons').add([{
  attributes: {
    title: 'Toggle Rulers'
  },
  label: `<svg width="18" viewBox="0 0 16 16"><path d="M0 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 8z"/><path d="M4 3h8a1 1 0 0 1 1 1v2.5h1V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2.5h1V4a1 1 0 0 1 1-1zM3 9.5H2V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5h-1V12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/></svg>`,
  command: 'ruler-visibility',
  id: 'ruler-visibility'
}]);
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

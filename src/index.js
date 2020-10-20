import {
  ruler
} from './ruler';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
      dragMode: 'translate',
      rulerHeight: 15,
      canvasZoom: 94,
      rulerOpts: {},
    },
    ...opts
  };

  const cm = editor.Commands;
  const rulH = options.rulerHeight;
  let zoom = options.canvasZoom
  let scale = 100 / zoom;
  let rulers;

  cm.add('ruler-visibility', {
    run(editor) {
      !rulers && (rulers = new ruler({
        container: editor.Canvas.getCanvasView().el,
        rulerHeight: rulH,
        strokeStyle: 'white',
        fillStyle: 'white',
        ...options.rulerOpts
      })) && editor.on('canvasScroll frame:scroll', () => {
        //change:canvasOffset in future allow canvas positioning ad scaling
        const y = top - rulH - (editor.Canvas.getBody().scrollTop / scale);
        rulers.api.setPos({
          y
        });
      });
      rulers.api.toggleRulerVisibility(true);
      editor.Canvas.setZoom(zoom);
      editor.setDragMode(options.dragMode);
      const {
        top,
        left
      } = editor.Canvas.getOffset();
      rulers.api.setPos({
        x: left - rulH,
        y: top - rulH
      });
      rulers.api.setScale(scale);
    },
    stop(editor) {
      rulers && rulers.api.toggleRulerVisibility(false);
      editor.Canvas.setZoom(100);
      editor.setDragMode('');
    }
  });

  cm.add('guides-visibility', {
    run() {
      rulers && rulers.api.toggleGuideVisibility(true);
    },
    stop() {
      rulers && rulers.api.toggleGuideVisibility(false);
    }
  });

  cm.add('clear-guides', () => {
    rulers && rulers.api.clearGuides();
  });

  cm.add('get-guides', () => {
    return rulers.api.getGuides();
  });

  cm.add('set-guides', (editor, sender, options = {}) => {
    rulers && options.guides && rulers.api.setGuides(options.guides);
  });

  cm.add('set-zoom', (editor, sender, options = {}) => {
    zoom = options.zoom;
    scale = 100 / zoom;
    editor.Canvas.setZoom(zoom);
    const {
      top,
      left
    } = editor.Canvas.getOffset();
    rulers.api.setPos({
      x: left - rulH,
      y: top - rulH
    });
    rulers && rulers.api.setScale(scale);
  });

  cm.add('destroy-ruler', () => {
    rulers && rulers.api.destroy();
  });
};
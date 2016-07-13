import test from 'ava';
import MediumEditor from 'medium-editor';
import HighlighterButton from './HighlighterButton.js';

let editor=document.createElement('div');
editor.className='editable';

let me = new MediumEditor(editor, {
  toolbar: {
    buttons: ['highlighter']
  },
  extensions: {
    'highlighter': new HighlighterButton()
  }
});

let extension=me.getExtensionByName('highlighter');

//TODO check document mouseout

test('long time press by general type button', t => {
  let button=extension.getButton();
  var event = new Event("mousedown");
  button.dispatchEvent(event);
  t.true(button.classList.contains('clicking'));


});


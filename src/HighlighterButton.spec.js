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

test('General button has clicked', t => {
  let button=extension.getButton();
  button.click();
  t.true(button.classList.contains('clicked'));
});


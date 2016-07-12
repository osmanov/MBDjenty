import MediumEditor from 'medium-editor';

var HighlighterButton = MediumEditor.Extension.extend({
  name: 'highlighter',

  init: function () {
    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<b>H</b>';
    this._listen();
  },

  _listen:function(){
    this.button.addEventListener('click',function(ev){
      this.classList.add('clicked');
    });
  },

  getButton: function () {
    return this.button;
  }
});

module.exports=HighlighterButton;


import MediumEditor from 'medium-editor';
/*
const MBThally = MediumEditor.Extension.extend({
  name: 'mbthally',

  init: function () {
    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.hidden=true;
    this.button.innerHTML = '<b>thall</b>';
  },

  getButton: function () {
    return this.button;
  }
});*/

/*class MBThally{

  constructor(){

    this.button = document.createElement('button');
    this.button.classList.add('medium-editor-action');
    //this.button.hidden=true;
    this.button.innerHTML = '<b>thall</b>';
  }

  getButton() {

    return this.button;
  }
}*/
function foo(){
  this.button = document.createElement('button');
  this.button.classList.add('medium-editor-action');
  //this.button.hidden=true;
  this.button.innerHTML = '<b>thall</b>';
}

foo.prototype.getButton=function(){
  return this.button;
};
const MBThally=foo;

module.exports=MBThally;
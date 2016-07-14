import MediumEditor from 'medium-editor';

class MBDjenty{
//class MBDjenty extends MediumEditor.Extension.extend{
  constructor(options){
    this.button = document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<b>Djent</b>';
    this._options=options;
//TODO editor.getExtensionByName('toolbar').isDisplayed()
   // debugger;
    //console.log(this)
    //console.log(this.base.getExtensionByName(this._options.top));
    //this.subscribe('positionToolbar', ()=>{});
  }

  checkState(node){
    //console.log(node);
    //console.log(this)

  }

  getButton() {
    return this.button;
  }
}
module.exports=MBDjenty;
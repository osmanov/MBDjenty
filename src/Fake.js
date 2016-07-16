import MediumEditor from 'medium-editor';

class Fake extends MediumEditor.extensions.toolbar{
  constructor(){
    super();
    this._subscribeOnShow=false;
  }

  _hasSubscribedOnShow(){
    return !this.isDisplayed() && !this._subscribeOnShow;
  }

  showToolbar() {
    if(this._hasSubscribedOnShow()){
      this.subscribe('showToolbar',()=>{
        //TODO define and create main long press btn connect with this faker
        this._subscribeOnShow=true;
        let button=this.base.getExtensionByName('italic').button;
        this.getToolbarElement().firstChild.style.position='relative';
        button.style.position='absolute';
        button.style.top=0;
        button.style.left=0;
        button.style.zIndex=-1;
      });
    }
    MediumEditor.extensions.toolbar.prototype.showToolbar.call(this);
  }
}

module.exports=Fake;
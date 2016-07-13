import MediumEditor from 'medium-editor';

let events={
  press:[]
};


class ButtonFabric{
  init(){//TODO should be static
    return MediumEditor.Extension.extend({
      name: 'uniqId',

      init: function () {
        this.button = this.document.createElement('button');
        this.button.classList.add('medium-editor-action');
        this.button.innerHTML = '<b>RR</b>';
      },


      getButton: function () {
        return this.button;
      }
    })
  }
}


const HighlighterButton = MediumEditor.Extension.extend({
  name: 'highlighter',

  init: function () {
    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<b>H</b>';

    this._listen();
    //this.options.extensions.uniqId=
  },

  _emit:function(evName){
    events[evName].forEach((cb)=>{
      cb();
    });
  },
  _sub:function(){

  },
  _pub:function(evName,cb){
    events[evName].push(cb);
  },

  _listen:function(){
    /*this._pub('press',()=>{

    });*/

    let timer;
    this.button.addEventListener('mousedown',(ev)=>{
      timer=setTimeout(()=>{
        this.button.classList.add('clicking');
      },1000);
    });

    this.document.addEventListener('mouseup',(ev)=>{
      clearTimeout(timer);
    });

  },

  getButton: function () {
    return this.button;
  }
});

module.exports=HighlighterButton;


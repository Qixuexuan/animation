import { MouseEvent } from 'ng2-bootstrap/components/utils/facade/browser';
import { Transform } from 'stream';
import { Component, keyframes } from '@angular/core';
import { Input, trigger, state, style, transition, animate } from '@angular/core';
import { flyIn,rotate,heroState,myKeyFrame,buttonState,inoutState,shrinkout,shining,groupA } from '../animations/animations';

class Hero {
   
    constructor(public name: string,
        public state = 'inactive') {
    }

    toggleState() {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
};

let ALL_HEROES = [
    '菲尔·科尔森',
    '梅琳达·梅',
    '里奥·菲茨',
    '珍玛·西蒙斯',
    '斯凯Skye',
    '格兰特·沃德',
    '尼克·弗瑞',
    '玛丽亚·希尔',
    '布莱克',
    '布雷特·道顿',
    '温明娜'
].map(name => new Hero(name));

@Component({
    selector: "c_header",
    templateUrl: 'app/src/header/header.html',
    styleUrls: ['app/src/header/header.css'],
    animations: [flyIn,rotate,heroState,myKeyFrame,buttonState,inoutState,shrinkout,shining,groupA]
})


export class HeaderComponent {

    @Input() heros: Hero[]=ALL_HEROES;

    btnState:string;
    myState:string;
    isShowHero:boolean;

    private fn_showHero():void{
        // this.heros=this.heros==null?ALL_HEROES:null;
        this.isShowHero=this.isShowHero==true?false:true;
    }

    private clicked() {
        this.btnState=(this.btnState==='btn_in'?'btn_out':'btn_in');
    }

    private inoutToggleState(){
        this.myState=(this.myState==='in'?'void':'in');

    }
}
import { animationFrame } from 'rxjs/scheduler/animationFrame';
import { Transform } from 'stream';
import { trigger, state, style, transition, animate, keyframes,group } from '@angular/core'

export const flyIn = trigger('flyIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
        animate(3000, keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(25px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    transition('* => void', [
        animate(3000, keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
    ])
]);

export const rotate = trigger('rotate', [
    state('init', style({ transform: 'translateX(100%)' })),
    transition('void => *', [style({ transform: 'rotate(5000deg)' }), animate(20000)]),
    transition('* => void', [animate(30000, style({ transform: 'rotate(75deg)' }))])
]);

export const heroState = trigger('heroState', [
    state('inactive', style({ backgroundColor: 'gray', transform: 'scale(1)' })),// state是两种状态
    state('active', style({ backgroundColor: 'yellow', transform: 'scale(1.5,1.5)' })),
    // transition('inactive=>active', animate('100ms ease-in')),（ ease-out 缓动函数）
    // transition('active=>inactive', animate('500ms ease-out'))

    transition('inactive => active', [style({ backgroundColor: 'blue', transform: 'scale(1.5)' }),
    animate('1000ms 100ms ease-in', style({ backgroundColor: 'green', transform: 'scale(0.5)' }))]),// transition是转场，包括时间和样式

    //transition('inactive<=>active', animate('100ms  ease-out'))//如果要对同一个转场的两个方向都使用相同的时间线，可以使用<=>这种简写语法。
]);

export const myKeyFrame = trigger('myKeyFrame', [
    state('myin', style({ transform: 'translateX(0)' })),
    transition('void=>*', [animate('2000ms 1000ms ease-in', keyframes([
        style({ opacity: 0, background:'yellow', transform: 'translateX(-100%)', offset: 0 }),
        style({ opacity: .6,background:'green',transform: 'translateX(150px)', offset: 0.5 }),
        style({ opacity: 1,background:'red', transform: 'translateX(0)', offset: 1.0 })
    ]))]),
    transition('*=>void', [animate(3000, keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: .5, transform: 'translateX(-150px)', offset: 0.7 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
    ]))])
]);

export const buttonState = trigger('buttonState', [
    state('btn_in', style({ backgroundColor: 'red', transform: 'scale(1)' })),
    state('btn_out', style({ backgroundColor: 'yellow', transform: 'scale(1.5,3)' })),

    // transition('btn_in=>btn_out',animate('500ms ease-in')),
    // transition('btn_out=>btn_in',animate('500ms ease-out'))

    transition('*=>btn_out', animate('500ms 40ms ease-in-out')),//40ms是动画延迟时间
    transition('*=>btn_in', animate('500ms ease-out'))

    // transition('btn_in=>btn_out', [style({transform: 'translateX(-1000%)'}),animate(1000)]),
    // transition('btn_out=>btn_in', [animate(1000, style({transform: 'translateX(1000%)'}))])
]);

export const inoutState = trigger('inoutState', [
    state('in', style({ transform: 'translateX(100%)' })),
    transition('void => *', [style({ transform: 'translateY(1000%)' }), animate(1000)]),
    transition('* => void', [animate(10000, style({ transform: 'translateX(1000%)' }))])
]);

export const shrinkout = trigger('shrinkout', [
    state('in', style({ height: '*' })),
    transition('* => void', [style({ height: '*' }), animate(1000, style({ height: 100 }))])
]);


export const shining = trigger('shining', [
    // state('in', style({ transform: 'translateX(100%)' })),
    transition('void => *', [animate(1000, keyframes([
        style({ opacity: 1 }),
        style({ opacity: .5 }),
        style({ opacity: 0})
    ])),animate(1000, keyframes([
        style({ opacity: 0}),
        style({ opacity: .5}),
        style({ opacity: 1})
    ]))])
]);

//动画组，多个动画同时进行
export const groupA=trigger('group',[
    transition('void=>*',[style({width:10,Transform:'translateX(50px)',opacity:0}),
    group([animate('2s 0.1s ease-in', style({
          transform: 'translateX(100px)',
          width: 320
        })),
        animate('0.8s ease', style({
          opacity: 1
        }))])
    ])
]);
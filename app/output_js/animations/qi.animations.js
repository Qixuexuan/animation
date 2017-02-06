"use strict";
var core_1 = require("@angular/core");
exports.flyIn = core_1.trigger('flyIn', [
    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
    core_1.transition('void => *', [
        core_1.animate(3000, core_1.keyframes([
            core_1.style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            core_1.style({ opacity: 1, transform: 'translateX(25px)', offset: 0.3 }),
            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
        ]))
    ]),
    core_1.transition('* => void', [
        core_1.animate(3000, core_1.keyframes([
            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            core_1.style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.7 }),
            core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))
    ])
]);
exports.rotate = core_1.trigger('rotate', [
    core_1.state('init', core_1.style({ transform: 'translateX(100%)' })),
    core_1.transition('void => *', [core_1.style({ transform: 'rotate(5000deg)' }), core_1.animate(20000)]),
    core_1.transition('* => void', [core_1.animate(30000, core_1.style({ transform: 'rotate(75deg)' }))])
]);
exports.heroState = core_1.trigger('heroState', [
    core_1.state('inactive', core_1.style({ backgroundColor: 'gray', transform: 'scale(1)' })),
    core_1.state('active', core_1.style({ backgroundColor: 'yellow', transform: 'scale(1.5,1.5)' })),
    // transition('inactive=>active', animate('100ms ease-in')),（ 目前测试ease-out这个值貌似并没有什么作用，非必须参数。难道只是个说明？）
    // transition('active=>inactive', animate('500ms ease-out'))
    core_1.transition('inactive => active', [core_1.style({ backgroundColor: 'blue', transform: 'scale(1.5)' }),
        core_1.animate('1000ms 100ms ease-in', core_1.style({ backgroundColor: 'green', transform: 'scale(0.5)' }))]),
]);
exports.myKeyFrame = core_1.trigger('myKeyFrame', [
    core_1.state('myin', core_1.style({ transform: 'translateX(0)' })),
    core_1.transition('void=>*', [core_1.animate(3000, core_1.keyframes([
            core_1.style({ opacity: 0, background: 'yellow', transform: 'translateX(-100%)', offset: 0 }),
            core_1.style({ opacity: .6, background: 'green', transform: 'translateX(150px)', offset: 0.3 }),
            core_1.style({ opacity: 1, background: 'red', transform: 'translateX(0)', offset: 1.0 })
        ]))]),
    core_1.transition('*=>void', [core_1.animate(3000, core_1.keyframes([
            core_1.style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            core_1.style({ opacity: .5, transform: 'translateX(-150px)', offset: 0.7 }),
            core_1.style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
        ]))])
]);
exports.buttonState = core_1.trigger('buttonState', [
    core_1.state('btn_in', core_1.style({ backgroundColor: 'red', transform: 'scale(1)' })),
    core_1.state('btn_out', core_1.style({ backgroundColor: 'yellow', transform: 'scale(1.5,3)' })),
    // transition('btn_in=>btn_out',animate('500ms ease-in')),
    // transition('btn_out=>btn_in',animate('500ms ease-out'))
    core_1.transition('*=>btn_out', core_1.animate('500ms 40ms ease-in')),
    core_1.transition('*=>btn_in', core_1.animate('500ms ease-out'))
]);
exports.inoutState = core_1.trigger('inoutState', [
    core_1.state('in', core_1.style({ transform: 'translateX(100%)' })),
    core_1.transition('void => *', [core_1.style({ transform: 'translateY(1000%)' }), core_1.animate(1000)]),
    core_1.transition('* => void', [core_1.animate(10000, core_1.style({ transform: 'translateX(1000%)' }))])
]);
exports.shrinkout = core_1.trigger('shrinkout', [
    core_1.state('in', core_1.style({ height: '*' })),
    core_1.transition('* => void', [core_1.style({ height: '*' }), core_1.animate(1000, core_1.style({ height: 100 }))])
]);
exports.shining = core_1.trigger('shining', [
    // state('in', style({ transform: 'translateX(100%)' })),
    core_1.transition('void => *', [core_1.animate(1000, core_1.keyframes([
            core_1.style({ opacity: 1 }),
            core_1.style({ opacity: .5 }),
            core_1.style({ opacity: 0 })
        ])), core_1.animate(1000, core_1.keyframes([
            core_1.style({ opacity: 0 }),
            core_1.style({ opacity: .5 }),
            core_1.style({ opacity: 1 })
        ]))])
]);

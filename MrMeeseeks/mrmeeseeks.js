"use strict";

export class MrMeeseeks{
    constructor(firstname) {
        this.firstname = firstname;
    }
    getName() {
        return "MrMeeseeks_" + (Math.random().toString(36).substr(2, 9)).toLocaleUpperCase();
    }

}

    function makeRequest(whatDo, whereDo) {
        console.log("Hacer "+whatDo+ " en "+whereDo);
    }


    return {
        create: function () {
            return createInstance();
        },
        makeRequest : function(a, b) {
            return makeRequest(a,b);
        }
    }
};

// exports.MrMeeseeks = function() {
//     return MrMeeseeks;
// };
//
// function MrMeeseeks ()  {
//         let mrm = new Object(getName());
//         mrm.answers = ["oh yeah", "yes sire"];
//         mrm.methods = {
//             makeRequest: function(action,object){
//                 this.action=action;
//                 this.object=object;
//                 let index=Math.floor((Math.random() * this.answers.length));
//                 console.log(this.action + ' ' + this.object);
//                 console.log(this.answers[index]);
//             }
//
//             }
//         }
//         speakOnCreate();
//         return object;
//     }
//
//     function getName() {
//         return "MrMeeseeks_" + (Math.random().toString(36).substr(2, 9)).toLocaleUpperCase();
//     }
//
//     function speakOnCreate() {
//         console.log("["+getName()+"] I'm Mr. Meeseeks! Look at me!")
//     }
//
//     return {
//         create: function () {
//             return createInstance();
//         }
//     }
// };
//
// exports.MrMeeseeks = function() {
//     return MrMeeseeks();
// };
//
//
// function mrMeeseeks(){
//     let m =Object.create(mrMeeseeks.methods);
//     m.answers=['Oh yeah! yes ma\'am!', 'Oh yeah! Can do', 'Yes sireee!'];
//     m.frustration=0;
//
//     mrMeeseeks.methods = {
//         speaksOnCreate: function(message){
//             if(message){
//                 console.log(message);
//             } else{
//                 console.log('Woo I\'m Mr. meeseeks Look at me');
//             }
//
//         }
//     }
//
//     makeRequest: function(action,object){
//         this.action=action;
//         this.object=object;
//         let index=Math.floor((Math.random() * this.answers.length));
//         console.log(this.action + ' ' + this.object);
//         console.log(this.answers[index]);
//     },
//     fulfillRequest: function(box,reality){
//         if(this.action==='take two strokes off at golf' && this.object==='Jerry\'s game') {
//             let answers=[
//                 ' Remember to square your shoulders, Jerry',
//                 'This is as frustrating for us as it is for you',
//                 'Just try to relax',
//                 'I can’t take it anymore. I just want to die!',
//                 'We all want to die! we’re Meeseeks!',
//                 'Why did you even rope me into this?',
//                 'Kill him!'];
//             let index=Math.floor((Math.random() * answers.length));
//             this.frustration=9001;
//             console.log(answers[index]);
//             this.pressButton(box,reality);
//         } else{
//             console.log(this.action+' '+this.object+' All done!');
//             box.killMrMeeseeks(reality);
//         }
//     },
//     pressButton: function(box,reality){
//         if (reality.length>20){
//             this.frustration=4500;
//             this.relievingPsychopathy=4500;
//         }
//         if (this.frustration > 9000){
//             box.pressButton(reality, this).fulfillRequest(box,reality);
//         }
//     },
//     learnRequest(box,reality,func,object){
//         if(func){
//             func(object,box,reality);
//         }
//
//     }
//
// };
//

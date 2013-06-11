/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_copy} > h2:nth-child(2)": [
            ["transform", "translateX", '809px'],
            ["style", "opacity", '0']
         ],
         "${_copy} > h2:nth-child(6)": [
            ["transform", "translateY", '199px'],
            ["style", "opacity", '0']
         ],
         "${_copy} > h2:nth-child(3)": [
            ["transform", "translateX", '809px'],
            ["style", "opacity", '0']
         ],
         "${_copy} > h2:nth-child(1)": [
            ["transform", "translateY", '-343px'],
            ["style", "opacity", '0']
         ],
         "${_copy} > h2:nth-child(4)": [
            ["transform", "translateX", '-593px'],
            ["style", "opacity", '0']
         ],
         "${_logo}": [
            ["transform", "translateY", '-297px'],
            ["style", "opacity", '0']
         ],
         "${_copy} > h2:nth-child(5)": [
            ["style", "opacity", '0']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10992,
         autoPlay: true,
         timeline: [
            { id: "eid9", tween: [ "style", "${_copy} > h2:nth-child(1)", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
            { id: "eid13", tween: [ "transform", "${_copy} > h2:nth-child(3)", "translateX", '0px', { fromValue: '809px'}], position: 6075, duration: 1000, easing: "easeOutBounce" },
            { id: "eid43", tween: [ "style", "${_copy} > h2:nth-child(6)", "opacity", '1', { fromValue: '0'}], position: 10000, duration: 992, easing: "easeOutBounce" },
            { id: "eid3", tween: [ "transform", "${_logo}", "translateY", '0px', { fromValue: '-297px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid5", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid41", tween: [ "transform", "${_copy} > h2:nth-child(6)", "translateY", '4px', { fromValue: '199px'}], position: 10000, duration: 992, easing: "easeOutBounce" },
            { id: "eid15", tween: [ "style", "${_copy} > h2:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 1000 },
            { id: "eid34", tween: [ "style", "${_copy} > h2:nth-child(4)", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 1000, easing: "easeOutBounce" },
            { id: "eid32", tween: [ "transform", "${_copy} > h2:nth-child(4)", "translateX", '0px', { fromValue: '-593px'}], position: 8250, duration: 1000, easing: "easeOutBounce" },
            { id: "eid28", tween: [ "style", "${_copy} > h2:nth-child(3)", "opacity", '1', { fromValue: '0'}], position: 6075, duration: 1000, easing: "easeOutBounce" },
            { id: "eid12", tween: [ "transform", "${_copy} > h2:nth-child(2)", "translateX", '0px', { fromValue: '809px'}], position: 3500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid7", tween: [ "transform", "${_copy} > h2:nth-child(1)", "translateY", '0px', { fromValue: '-343px'}], position: 1750, duration: 1000, easing: "easeOutElastic" },
            { id: "eid37", tween: [ "style", "${_copy} > h2:nth-child(5)", "opacity", '1', { fromValue: '0'}], position: 8925, duration: 922, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1330022");

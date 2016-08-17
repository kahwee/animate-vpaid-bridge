(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/hello.jpg", id:"hello"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.hello = function() {
	this.initialize(img.hello);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1195,789);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("A3YLEIAA2HMAuxAAAIAAWHg");
	this.shape.setTransform(149.8,70.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","#000000"],[0,1],0,0,0,0,0,165.8).s().p("A3YLEIAA2HMAuxAAAIAAWHg");
	this.shape_1.setTransform(149.8,70.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("A3YLEIAA2HMAuxAAAIAAWHg");
	this.shape_2.setTransform(149.8,70.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCC66").s().p("A3YLEIAA2HMAuxAAAIAAWHg");
	this.shape_3.setTransform(149.8,70.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,141.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hello();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1195,789);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(946.9,329.4,1,1,0,0,0,149.8,70.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(295));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(597.5,394.5,1,1,0,0,0,597.5,394.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.99,scaleY:1,rotation:0.3,y:394.6},0).wait(1).to({scaleX:0.98,scaleY:1.01,rotation:0.7,y:394.5},0).wait(1).to({scaleX:0.97,scaleY:1.01,rotation:0,skewX:1,skewY:1.1,y:394.6},0).wait(1).to({scaleX:0.96,scaleY:1.02,skewX:1.4,skewY:1.5,y:394.5},0).wait(1).to({scaleX:0.95,scaleY:1.02,skewX:1.7,skewY:1.8},0).wait(1).to({scaleX:0.95,scaleY:1.03,skewX:2.1,skewY:2.2,y:394.6},0).wait(1).to({scaleX:0.94,scaleY:1.03,skewX:2.4,skewY:2.5,y:394.5},0).wait(1).to({scaleX:0.93,scaleY:1.04,skewX:2.8,skewY:2.9,y:394.6},0).wait(1).to({scaleX:0.92,scaleY:1.04,skewX:3.1,skewY:3.3,y:394.5},0).wait(1).to({scaleX:0.91,scaleY:1.05,skewX:3.4,skewY:3.6},0).wait(1).to({scaleX:0.9,scaleY:1.05,skewX:3.8,skewY:4,y:394.6},0).wait(1).to({scaleX:0.89,scaleY:1.06,skewX:4.1,skewY:4.4,y:394.5},0).wait(1).to({scaleX:0.88,scaleY:1.06,skewX:4.5,skewY:4.7},0).wait(1).to({scaleX:0.87,scaleY:1.07,skewX:4.8,skewY:5.1},0).wait(1).to({scaleX:0.86,scaleY:1.07,skewX:5.2,skewY:5.4,y:394.6},0).wait(1).to({scaleX:0.85,scaleY:1.08,skewX:5.5,skewY:5.8},0).wait(1).to({scaleX:0.85,scaleY:1.08,skewX:5.9,skewY:6.2},0).wait(1).to({scaleX:0.84,scaleY:1.09,skewX:6.2,skewY:6.5,y:394.5},0).wait(1).to({scaleX:0.83,scaleY:1.09,skewX:6.5,skewY:6.9},0).wait(1).to({scaleX:0.82,scaleY:1.1,skewX:6.9,skewY:7.3},0).wait(1).to({scaleX:0.81,scaleY:1.1,skewX:7.2,skewY:7.6},0).wait(1).to({scaleX:0.8,scaleY:1.11,skewX:7.6,skewY:8},0).wait(1).to({scaleX:0.79,scaleY:1.11,skewX:7.9,skewY:8.3},0).wait(1).to({scaleX:0.78,scaleY:1.12,skewX:8.3,skewY:8.7},0).wait(1).to({scaleX:0.77,scaleY:1.12,skewX:8.6,skewY:9.1},0).wait(1).to({scaleX:0.76,scaleY:1.13,skewX:9,skewY:9.4},0).wait(1).to({scaleX:0.75,scaleY:1.13,skewX:9.3,skewY:9.8},0).wait(1).to({scaleX:0.74,scaleY:1.14,skewX:9.6,skewY:10.2},0).wait(1).to({scaleX:0.74,scaleY:1.14,skewX:10,skewY:10.5},0).wait(1).to({scaleX:0.73,scaleY:1.15,skewX:10.3,skewY:10.9},0).wait(1).to({scaleX:0.72,scaleY:1.15,skewX:10.7,skewY:11.2,y:394.6},0).wait(1).to({scaleX:0.71,scaleY:1.15,skewX:11,skewY:11.6,y:394.5},0).wait(1).to({scaleX:0.7,scaleY:1.16,skewX:11.4,skewY:12},0).wait(1).to({scaleX:0.69,scaleY:1.16,skewX:11.7,skewY:12.3},0).wait(1).to({scaleX:0.68,scaleY:1.17,skewX:12,skewY:12.7},0).wait(1).to({scaleX:0.67,scaleY:1.17,skewX:12.4,skewY:13.1,y:394.6},0).wait(1).to({scaleX:0.66,scaleY:1.18,skewX:12.7,skewY:13.4},0).wait(1).to({scaleX:0.65,scaleY:1.18,skewX:13.1,skewY:13.8,y:394.5},0).wait(1).to({scaleX:0.64,scaleY:1.19,skewX:13.4,skewY:14.1,y:394.6},0).wait(1).to({scaleX:0.64,scaleY:1.19,skewX:13.8,skewY:14.5,y:394.5},0).wait(1).to({scaleX:0.63,scaleY:1.2,skewX:14.1,skewY:14.9,y:394.6},0).wait(1).to({scaleX:0.62,scaleY:1.2,skewX:14.5,skewY:15.2,y:394.5},0).wait(1).to({scaleX:0.61,scaleY:1.21,skewX:14.8,skewY:15.6,y:394.6},0).wait(1).to({scaleX:0.6,scaleY:1.21,skewX:15.1,skewY:16},0).wait(1).to({scaleX:0.59,scaleY:1.22,skewX:15.5,skewY:16.3},0).wait(1).to({scaleX:0.58,scaleY:1.22,skewX:15.8,skewY:16.7,y:394.5},0).wait(1).to({scaleX:0.57,scaleY:1.23,skewX:16.2,skewY:17,y:394.6},0).wait(1).to({scaleX:0.56,scaleY:1.23,skewX:16.5,skewY:17.4},0).wait(1).to({scaleX:0.55,scaleY:1.24,skewX:16.9,skewY:17.8,y:394.5},0).wait(1).to({scaleX:0.54,scaleY:1.24,skewX:17.2,skewY:18.1},0).wait(1).to({scaleX:0.53,scaleY:1.25,skewX:17.6,skewY:18.5},0).wait(1).to({scaleX:0.53,scaleY:1.25,skewX:17.9,skewY:18.9},0).wait(1).to({scaleX:0.52,scaleY:1.25,skewX:18.2,skewY:19.2,y:394.6},0).wait(1).to({scaleX:0.51,scaleY:1.26,skewX:18.6,skewY:19.6,y:394.5},0).wait(1).to({scaleX:0.5,scaleY:1.26,skewX:18.9,skewY:19.9,y:394.6},0).wait(1).to({scaleX:0.49,scaleY:1.27,skewX:19.3,skewY:20.3,y:394.5},0).wait(1).to({scaleX:0.48,scaleY:1.27,skewX:19.6,skewY:20.7},0).wait(1).to({scaleX:0.47,scaleY:1.28,skewX:20,skewY:21},0).wait(1).to({scaleX:0.46,scaleY:1.28,skewX:20.3,skewY:21.4},0).wait(1).to({scaleX:0.45,scaleY:1.29,skewX:20.7,skewY:21.8},0).wait(1).to({scaleX:0.44,scaleY:1.29,skewX:21,skewY:22.1},0).wait(1).to({scaleX:0.43,scaleY:1.3,skewX:21.3,skewY:22.5},0).wait(1).to({scaleX:0.43,scaleY:1.3,skewX:21.7,skewY:22.8},0).wait(1).to({scaleX:0.42,scaleY:1.31,skewX:22,skewY:23.2},0).wait(1).to({scaleX:0.41,scaleY:1.31,skewX:22.4,skewY:23.6},0).wait(1).to({scaleX:0.4,scaleY:1.32,skewX:22.7,skewY:23.9},0).wait(1).to({scaleX:0.39,scaleY:1.32,skewX:23.1,skewY:24.3},0).wait(1).to({scaleX:0.38,scaleY:1.33,skewX:23.4,skewY:24.7},0).wait(1).to({scaleX:0.37,scaleY:1.33,skewX:23.8,skewY:25},0).wait(1).to({scaleX:0.36,scaleY:1.34,skewX:24.1,skewY:25.4,y:394.6},0).wait(1).to({scaleX:0.35,scaleY:1.34,skewX:24.4,skewY:25.7,y:394.5},0).wait(1).to({scaleX:0.34,scaleY:1.35,skewX:24.8,skewY:26.1},0).wait(1).to({scaleX:0.33,scaleY:1.35,skewX:25.1,skewY:26.5},0).wait(1).to({scaleX:0.32,scaleY:1.36,skewX:25.5,skewY:26.8,y:394.6},0).wait(1).to({scaleX:0.32,scaleY:1.36,skewX:25.8,skewY:27.2,y:394.5},0).wait(1).to({scaleX:0.31,scaleY:1.37,skewX:26.2,skewY:27.6},0).wait(1).to({scaleX:0.3,scaleY:1.37,skewX:26.5,skewY:27.9},0).wait(1).to({scaleX:0.29,scaleY:1.38,skewX:26.9,skewY:28.3},0).wait(1).to({scaleX:0.28,scaleY:1.38,skewX:27.2,skewY:28.6},0).wait(1).to({scaleX:0.27,scaleY:1.39,skewX:27.5,skewY:29},0).wait(1).to({scaleX:0.26,scaleY:1.39,skewX:27.9,skewY:29.4},0).wait(1).to({scaleX:0.25,scaleY:1.4,skewX:28.2,skewY:29.7,y:394.6},0).wait(1).to({scaleX:0.24,scaleY:1.4,skewX:28.6,skewY:30.1,y:394.5},0).wait(1).to({scaleX:0.23,scaleY:1.41,skewX:28.9,skewY:30.5,y:394.6},0).wait(1).to({scaleX:0.22,scaleY:1.41,skewX:29.3,skewY:30.8},0).wait(1).to({scaleX:0.22,scaleY:1.41,skewX:29.6,skewY:31.2},0).wait(1).to({scaleX:0.21,scaleY:1.42,skewX:29.9,skewY:31.6,y:394.5},0).wait(1).to({scaleX:0.2,scaleY:1.42,skewX:30.3,skewY:31.9,y:394.6},0).wait(1).to({scaleX:0.19,scaleY:1.43,skewX:30.6,skewY:32.3,y:394.5},0).wait(1).to({scaleX:0.18,scaleY:1.43,skewX:31,skewY:32.6},0).wait(1).to({scaleX:0.17,scaleY:1.44,skewX:31.3,skewY:33},0).wait(1).to({scaleX:0.16,scaleY:1.44,skewX:31.7,skewY:33.4},0).wait(1).to({scaleX:0.15,scaleY:1.45,skewX:32,skewY:33.7},0).wait(1).to({scaleX:0.14,scaleY:1.45,skewX:32.4,skewY:34.1,y:394.6},0).wait(1).to({scaleX:0.13,scaleY:1.46,skewX:32.7,skewY:34.5},0).wait(1).to({scaleX:0.12,scaleY:1.46,skewX:33,skewY:34.8},0).wait(1).to({scaleX:0.11,scaleY:1.47,skewX:33.4,skewY:35.2},0).wait(1).to({scaleX:0.11,scaleY:1.47,skewX:33.7,skewY:35.5,y:394.5},0).wait(1).to({scaleX:0.1,scaleY:1.48,skewX:34.1,skewY:35.9},0).wait(1).to({scaleX:0.09,scaleY:1.48,skewX:34.4,skewY:36.3},0).wait(1).to({scaleX:0.08,scaleY:1.49,skewX:34.8,skewY:36.6,y:394.6},0).wait(1).to({scaleX:0.07,scaleY:1.49,skewX:35.1,skewY:37},0).wait(1).to({scaleX:0.06,scaleY:1.5,skewX:35.5,skewY:37.4},0).wait(1).to({scaleX:0.05,scaleY:1.5,skewX:35.8,skewY:37.7,y:394.5},0).wait(1).to({scaleX:0.04,scaleY:1.51,skewX:36.1,skewY:38.1,y:394.6},0).wait(1).to({scaleX:0.03,scaleY:1.51,skewX:36.5,skewY:38.4,y:394.5},0).wait(1).to({scaleX:0.02,scaleY:1.52,skewX:36.8,skewY:38.8},0).wait(1).to({scaleX:0.01,scaleY:1.52,skewX:37.2,skewY:39.2},0).wait(1).to({scaleX:0.01,scaleY:1.53,skewX:37.5,skewY:39.5},0).wait(1).to({scaleY:1.53,skewX:37.9,skewY:-140.1,y:394.6},0).wait(1).to({scaleX:0.01,scaleY:1.54,skewX:38.2,skewY:-139.7,y:394.5},0).wait(1).to({scaleX:0.02,scaleY:1.54,skewX:38.6,skewY:-139.4},0).wait(1).to({scaleX:0.03,scaleY:1.55,skewX:38.9,skewY:-139},0).wait(1).to({scaleX:0.04,scaleY:1.55,skewX:39.2,skewY:-138.7},0).wait(1).to({scaleX:0.05,scaleY:1.55,skewX:39.6,skewY:-138.3},0).wait(1).to({scaleX:0.06,scaleY:1.56,skewX:39.9,skewY:-137.9},0).wait(1).to({scaleX:0.07,scaleY:1.56,skewX:40.3,skewY:-137.6,y:394.6},0).wait(1).to({scaleX:0.08,scaleY:1.57,skewX:40.6,skewY:-137.2,y:394.5},0).wait(1).to({scaleX:0.09,scaleY:1.57,skewX:41,skewY:-136.8,y:394.6},0).wait(1).to({scaleX:0.1,scaleY:1.58,skewX:41.3,skewY:-136.5},0).wait(1).to({scaleX:0.11,scaleY:1.58,skewX:41.7,skewY:-136.1},0).wait(1).to({scaleX:0.11,scaleY:1.59,skewX:42,skewY:-135.8},0).wait(1).to({scaleX:0.12,scaleY:1.59,skewX:42.3,skewY:-135.4,y:394.5},0).wait(1).to({scaleX:0.13,scaleY:1.6,skewX:42.7,skewY:-135},0).wait(1).to({scaleX:0.14,scaleY:1.6,skewX:43,skewY:-134.7,y:394.6},0).wait(1).to({scaleX:0.15,scaleY:1.61,skewX:43.4,skewY:-134.3,y:394.5},0).wait(1).to({scaleX:0.16,scaleY:1.61,skewX:43.7,skewY:-133.9},0).wait(1).to({scaleX:0.17,scaleY:1.62,skewX:44.1,skewY:-133.6},0).wait(1).to({scaleX:0.18,scaleY:1.62,skewX:44.4,skewY:-133.2},0).wait(1).to({scaleX:0.19,scaleY:1.63,skewX:44.8,skewY:-132.9},0).wait(1).to({scaleX:0.2,scaleY:1.63,skewX:45.1,skewY:-132.5},0).wait(1).to({scaleX:0.21,scaleY:1.64,skewX:45.4,skewY:-132.1},0).wait(1).to({scaleX:0.22,scaleY:1.64,skewX:45.8,skewY:-131.8},0).wait(1).to({scaleX:0.22,scaleY:1.65,skewX:46.1,skewY:-131.4},0).wait(1).to({scaleX:0.23,scaleY:1.65,skewX:46.5,skewY:-131},0).wait(1).to({scaleX:0.24,scaleY:1.66,skewX:46.8,skewY:-130.7},0).wait(1).to({scaleX:0.25,scaleY:1.66,skewX:47.2,skewY:-130.3},0).wait(1).to({scaleX:0.26,scaleY:1.67,skewX:47.5,skewY:-130},0).wait(1).to({scaleX:0.27,scaleY:1.67,skewX:47.8,skewY:-129.6},0).wait(1).to({scaleX:0.28,scaleY:1.68,skewX:48.2,skewY:-129.2},0).wait(1).to({scaleX:0.29,scaleY:1.68,skewX:48.5,skewY:-128.9},0).wait(1).to({scaleX:0.3,scaleY:1.68,skewX:48.9,skewY:-128.5},0).wait(1).to({scaleX:0.31,scaleY:1.69,skewX:49.2,skewY:-128.1},0).wait(1).to({scaleX:0.32,scaleY:1.69,skewX:49.6,skewY:-127.8},0).wait(1).to({scaleX:0.32,scaleY:1.7,skewX:49.9,skewY:-127.4},0).wait(1).to({scaleX:0.33,scaleY:1.7,skewX:50.3,skewY:-127.1},0).wait(1).to({scaleX:0.34,scaleY:1.71,skewX:50.6,skewY:-126.7},0).wait(1).to({scaleX:0.35,scaleY:1.71,skewX:50.9,skewY:-126.3},0).wait(1).to({scaleX:0.36,scaleY:1.72,skewX:51.3,skewY:-126},0).wait(1).to({scaleX:0.37,scaleY:1.72,skewX:51.6,skewY:-125.6},0).wait(1).to({scaleX:0.38,scaleY:1.73,skewX:52,skewY:-125.2},0).wait(1).to({scaleX:0.39,scaleY:1.73,skewX:52.3,skewY:-124.9},0).wait(1).to({scaleX:0.4,scaleY:1.74,skewX:52.7,skewY:-124.5},0).wait(1).to({scaleX:0.41,scaleY:1.74,skewX:53,skewY:-124.2},0).wait(1).to({scaleX:0.42,scaleY:1.75,skewX:53.4,skewY:-123.8},0).wait(1).to({scaleX:0.43,scaleY:1.75,skewX:53.7,skewY:-123.4},0).wait(1).to({scaleX:0.43,scaleY:1.76,skewX:54,skewY:-123.1,x:597.6},0).wait(1).to({scaleX:0.44,scaleY:1.76,skewX:54.4,skewY:-122.7,x:597.5},0).wait(1).to({scaleX:0.45,scaleY:1.77,skewX:54.7,skewY:-122.3},0).wait(1).to({scaleX:0.46,scaleY:1.77,skewX:55.1,skewY:-122},0).wait(1).to({scaleX:0.47,scaleY:1.78,skewX:55.4,skewY:-121.6},0).wait(1).to({scaleX:0.48,scaleY:1.78,skewX:55.8,skewY:-121.3},0).wait(1).to({scaleX:0.49,scaleY:1.79,skewX:56.1,skewY:-120.9},0).wait(1).to({scaleX:0.5,scaleY:1.79,skewX:56.5,skewY:-120.5},0).wait(1).to({scaleX:0.51,scaleY:1.8,skewX:56.8,skewY:-120.2},0).wait(1).to({scaleX:0.52,scaleY:1.8,skewX:57.1,skewY:-119.8},0).wait(1).to({scaleX:0.53,scaleY:1.81,skewX:57.5,skewY:-119.4},0).wait(1).to({scaleX:0.53,scaleY:1.81,skewX:57.8,skewY:-119.1},0).wait(1).to({scaleX:0.54,scaleY:1.81,skewX:58.2,skewY:-118.7},0).wait(1).to({scaleX:0.55,scaleY:1.82,skewX:58.5,skewY:-118.3},0).wait(1).to({scaleX:0.56,scaleY:1.82,skewX:58.9,skewY:-118},0).wait(1).to({scaleX:0.57,scaleY:1.83,skewX:59.2,skewY:-117.6},0).wait(1).to({scaleX:0.58,scaleY:1.83,skewX:59.6,skewY:-117.3},0).wait(1).to({scaleX:0.59,scaleY:1.84,skewX:59.9,skewY:-116.9},0).wait(1).to({scaleX:0.6,scaleY:1.84,skewX:60.2,skewY:-116.5},0).wait(1).to({scaleX:0.61,scaleY:1.85,skewX:60.6,skewY:-116.2},0).wait(1).to({scaleX:0.62,scaleY:1.85,skewX:60.9,skewY:-115.8},0).wait(1).to({scaleX:0.63,scaleY:1.86,skewX:61.3,skewY:-115.4},0).wait(1).to({scaleX:0.64,scaleY:1.86,skewX:61.6,skewY:-115.1},0).wait(1).to({scaleX:0.64,scaleY:1.87,skewX:62,skewY:-114.7},0).wait(1).to({scaleX:0.65,scaleY:1.87,skewX:62.3,skewY:-114.4},0).wait(1).to({scaleX:0.66,scaleY:1.88,skewX:62.7,skewY:-114},0).wait(1).to({scaleX:0.67,scaleY:1.88,skewX:63,skewY:-113.6},0).wait(1).to({scaleX:0.68,scaleY:1.89,skewX:63.3,skewY:-113.3},0).wait(1).to({scaleX:0.69,scaleY:1.89,skewX:63.7,skewY:-112.9},0).wait(1).to({scaleX:0.7,scaleY:1.9,skewX:64,skewY:-112.5},0).wait(1).to({scaleX:0.71,scaleY:1.9,skewX:64.4,skewY:-112.2},0).wait(1).to({scaleX:0.72,scaleY:1.91,skewX:64.7,skewY:-111.8},0).wait(1).to({scaleX:0.73,scaleY:1.91,skewX:65.1,skewY:-111.5},0).wait(1).to({scaleX:0.74,scaleY:1.92,skewX:65.4,skewY:-111.1},0).wait(1).to({scaleX:0.74,scaleY:1.92,skewX:65.7,skewY:-110.7},0).wait(1).to({scaleX:0.75,scaleY:1.93,skewX:66.1,skewY:-110.4},0).wait(1).to({scaleX:0.76,scaleY:1.93,skewX:66.4,skewY:-110},0).wait(1).to({scaleX:0.77,scaleY:1.94,skewX:66.8,skewY:-109.6},0).wait(1).to({scaleX:0.78,scaleY:1.94,skewX:67.1,skewY:-109.3},0).wait(1).to({scaleX:0.79,scaleY:1.94,skewX:67.5,skewY:-108.9},0).wait(1).to({scaleX:0.8,scaleY:1.95,skewX:67.8,skewY:-108.6,y:394.6},0).wait(1).to({scaleX:0.81,scaleY:1.95,skewX:68.2,skewY:-108.2,y:394.5},0).wait(1).to({scaleX:0.82,scaleY:1.96,skewX:68.5,skewY:-107.8},0).wait(1).to({scaleX:0.83,scaleY:1.96,skewX:68.8,skewY:-107.5},0).wait(1).to({scaleX:0.84,scaleY:1.97,skewX:69.2,skewY:-107.1},0).wait(1).to({scaleX:0.85,scaleY:1.97,skewX:69.5,skewY:-106.7},0).wait(1).to({scaleX:0.85,scaleY:1.98,skewX:69.9,skewY:-106.4},0).wait(1).to({scaleX:0.86,scaleY:1.98,skewX:70.2,skewY:-106},0).wait(1).to({scaleX:0.87,scaleY:1.99,skewX:70.6,skewY:-105.7},0).wait(1).to({scaleX:0.88,scaleY:1.99,skewX:70.9,skewY:-105.3},0).wait(1).to({scaleX:0.89,scaleY:2,skewX:71.3,skewY:-104.9},0).wait(1).to({scaleX:0.9,scaleY:2,skewX:71.6,skewY:-104.6},0).wait(1).to({scaleX:0.91,scaleY:2.01,skewX:71.9,skewY:-104.2},0).wait(1).to({scaleX:0.92,scaleY:2.01,skewX:72.3,skewY:-103.8},0).wait(1).to({scaleX:0.93,scaleY:2.02,skewX:72.6,skewY:-103.5},0).wait(1).to({scaleX:0.94,scaleY:2.02,skewX:73,skewY:-103.1},0).wait(1).to({scaleX:0.95,scaleY:2.03,skewX:73.3,skewY:-102.8},0).wait(1).to({scaleX:0.95,scaleY:2.03,skewX:73.7,skewY:-102.4},0).wait(1).to({scaleX:0.96,scaleY:2.04,skewX:74,skewY:-102},0).wait(1).to({scaleX:0.97,scaleY:2.04,skewX:74.4,skewY:-101.7},0).wait(1).to({scaleX:0.98,scaleY:2.05,skewX:74.7,skewY:-101.3},0).wait(1).to({scaleX:0.99,scaleY:2.05,skewX:75,skewY:-100.9},0).wait(1).to({scaleX:1,scaleY:2.06,skewX:75.4,skewY:-100.6},0).wait(1).to({scaleX:1.01,scaleY:2.06,skewX:75.7,skewY:-100.2},0).wait(1).to({scaleX:1.02,scaleY:2.07,skewX:76.1,skewY:-99.9},0).wait(1).to({scaleX:1.03,scaleY:2.07,skewX:76.4,skewY:-99.5},0).wait(1).to({scaleX:1.04,scaleY:2.08,skewX:76.8,skewY:-99.1},0).wait(1).to({scaleX:1.05,scaleY:2.08,skewX:77.1,skewY:-98.8},0).wait(1).to({scaleX:1.06,scaleY:2.08,skewX:77.5,skewY:-98.4},0).wait(1).to({scaleX:1.06,scaleY:2.09,skewX:77.8,skewY:-98},0).wait(1).to({scaleX:1.07,scaleY:2.09,skewX:78.1,skewY:-97.7},0).wait(1).to({scaleX:1.08,scaleY:2.1,skewX:78.5,skewY:-97.3},0).wait(1).to({scaleX:1.09,scaleY:2.1,skewX:78.8,skewY:-97},0).wait(1).to({scaleX:1.1,scaleY:2.11,skewX:79.2,skewY:-96.6},0).wait(1).to({scaleX:1.11,scaleY:2.11,skewX:79.5,skewY:-96.2},0).wait(1).to({scaleX:1.12,scaleY:2.12,skewX:79.9,skewY:-95.9},0).wait(1).to({scaleX:1.13,scaleY:2.12,skewX:80.2,skewY:-95.5},0).wait(1).to({scaleX:1.14,scaleY:2.13,skewX:80.6,skewY:-95.1},0).wait(1).to({scaleX:1.15,scaleY:2.13,skewX:80.9,skewY:-94.8},0).wait(1).to({scaleX:1.16,scaleY:2.14,skewX:81.2,skewY:-94.4},0).wait(1).to({scaleX:1.17,scaleY:2.14,skewX:81.6,skewY:-94.1},0).wait(1).to({scaleX:1.17,scaleY:2.15,skewX:81.9,skewY:-93.7},0).wait(1).to({scaleX:1.18,scaleY:2.15,skewX:82.3,skewY:-93.3},0).wait(1).to({scaleX:1.19,scaleY:2.16,skewX:82.6,skewY:-93},0).wait(1).to({scaleX:1.2,scaleY:2.16,skewX:83,skewY:-92.6},0).wait(1).to({scaleX:1.21,scaleY:2.17,skewX:83.3,skewY:-92.2},0).wait(1).to({scaleX:1.22,scaleY:2.17,skewX:83.6,skewY:-91.9},0).wait(1).to({scaleX:1.23,scaleY:2.18,skewX:84,skewY:-91.5,x:597.6},0).wait(1).to({scaleX:1.24,scaleY:2.18,skewX:84.3,skewY:-91.2,x:597.5},0).wait(1).to({scaleX:1.25,scaleY:2.19,skewX:84.7,skewY:-90.8},0).wait(1).to({scaleX:1.26,scaleY:2.19,skewX:85,skewY:-90.4},0).wait(1).to({scaleX:1.26,scaleY:2.19,skewX:85.4,skewY:-90.1},0).wait(1).to({scaleX:1.27,scaleY:2.2,skewX:85.7,skewY:-89.7},0).wait(1).to({scaleX:1.28,scaleY:2.21,skewX:86.1,skewY:-89.3},0).wait(1).to({scaleX:1.29,scaleY:2.21,skewX:86.4,skewY:-89},0).wait(1).to({scaleX:1.3,scaleY:2.21,skewX:86.7,skewY:-88.6},0).wait(1).to({scaleX:1.31,scaleY:2.22,skewX:87.1,skewY:-88.2},0).wait(1).to({scaleX:1.32,scaleY:2.22,skewX:87.4,skewY:-87.9},0).wait(1).to({scaleX:1.33,scaleY:2.23,skewX:87.8,skewY:-87.5},0).wait(1).to({scaleX:1.34,scaleY:2.23,skewX:88.1,skewY:-87.2},0).wait(1).to({scaleX:1.35,scaleY:2.24,skewX:88.5,skewY:-86.8},0).wait(1).to({scaleX:1.36,scaleY:2.24,skewX:88.8,skewY:-86.4},0).wait(1).to({scaleX:1.37,scaleY:2.25,skewX:89.2,skewY:-86.1},0).wait(1).to({scaleX:1.3,scaleY:2.21,skewX:86.6,skewY:-88.8},0).wait(1).to({scaleX:1.23,scaleY:2.18,skewX:84.1,skewY:-91.4},0).wait(1).to({scaleX:1.16,scaleY:2.14,skewX:81.5,skewY:-94.1},0).wait(1).to({scaleX:1.1,scaleY:2.11,skewX:79,skewY:-96.8},0).wait(1).to({scaleX:1.03,scaleY:2.07,skewX:76.4,skewY:-99.5},0).wait(1).to({scaleX:0.96,scaleY:2.03,skewX:73.9,skewY:-102.2},0).wait(1).to({scaleX:0.89,scaleY:2,skewX:71.3,skewY:-104.9},0).wait(1).to({scaleX:0.83,scaleY:1.96,skewX:68.8,skewY:-107.5},0).wait(1).to({scaleX:0.76,scaleY:1.93,skewX:66.2,skewY:-110.2},0).wait(1).to({scaleX:0.69,scaleY:1.89,skewX:63.7,skewY:-112.9},0).wait(1).to({scaleX:0.62,scaleY:1.86,skewX:61.1,skewY:-115.6},0).wait(1).to({scaleX:0.55,scaleY:1.82,skewX:58.6,skewY:-118.3},0).wait(1).to({scaleX:0.49,scaleY:1.78,skewX:56,skewY:-121},0).wait(1).to({scaleX:0.42,scaleY:1.75,skewX:53.5,skewY:-123.6},0).wait(1).to({scaleX:0.35,scaleY:1.71,skewX:50.9,skewY:-126.3},0).wait(1).to({scaleX:0.28,scaleY:1.68,skewX:48.4,skewY:-129},0).wait(1).to({scaleX:0.22,scaleY:1.64,skewX:45.9,skewY:-131.7},0).wait(1).to({scaleX:0.15,scaleY:1.61,skewX:43.3,skewY:-134.4},0).wait(1).to({scaleX:0.08,scaleY:1.57,skewX:40.8,skewY:-137.1},0).wait(1).to({scaleX:0.01,scaleY:1.54,skewX:38.2,skewY:-139.7},0).wait(1).to({scaleX:0.05,scaleY:1.5,skewX:35.7,skewY:37.6},0).wait(1).to({scaleX:0.12,scaleY:1.46,skewX:33.1,skewY:34.9,y:394.6},0).wait(1).to({scaleX:0.19,scaleY:1.43,skewX:30.6,skewY:32.2,y:394.5},0).wait(1).to({scaleX:0.26,scaleY:1.39,skewX:28,skewY:29.5,y:394.6},0).wait(1).to({scaleX:0.32,scaleY:1.36,skewX:25.5,skewY:26.8},0).wait(1).to({scaleX:0.39,scaleY:1.32,skewX:22.9,skewY:24.2,y:394.5},0).wait(1).to({scaleX:0.46,scaleY:1.29,skewX:20.4,skewY:21.5},0).wait(1).to({scaleX:0.53,scaleY:1.25,skewX:17.8,skewY:18.8,y:394.6},0).wait(1).to({scaleX:0.6,scaleY:1.21,skewX:15.3,skewY:16.1,y:394.5},0).wait(1).to({scaleX:0.66,scaleY:1.18,skewX:12.7,skewY:13.4,y:394.6},0).wait(1).to({scaleX:0.73,scaleY:1.14,skewX:10.2,skewY:10.7,y:394.5},0).wait(1).to({scaleX:0.8,scaleY:1.11,skewX:7.6,skewY:8.1},0).wait(1).to({scaleX:0.87,scaleY:1.07,skewX:5.1,skewY:5.4,y:394.6},0).wait(1).to({scaleX:0.93,scaleY:1.04,skewX:2.5,skewY:2.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:0,y:394.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1195,789);


// stage content:



(lib.motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.scenery = new lib.Symbol1();
	this.scenery.setTransform(274.9,200,0.507,0.507,0,0,0,597.4,394.5);

	this.timeline.addTween(cjs.Tween.get(this.scenery).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(247,200,605.9,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
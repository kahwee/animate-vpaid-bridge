(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.jeffclip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvYr8IexAAIAAX5I+xAAg");
	this.shape.setTransform(98.5,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0099").s().p("AvYL9IAA35IexAAIAAX5g");
	this.shape_1.setTransform(98.5,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,199,155);


// stage content:
(lib.kahweetest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.jeffclip();
	this.instance.setTransform(113.5,106.5,1,1,0,0,0,98.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:360.5,y:285.5},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.5,229.5,198,154);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
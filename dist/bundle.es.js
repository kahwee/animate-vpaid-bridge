import Linear from 'vpaid-ad/src/linear';

/**
 * Creates the script element and provides a callback via onload
 *
 * @param  {[type]}   path [description]
 * @param  {Function} cb   [description]
 * @return {[type]}        [description]
 */
function createScript(path, cb) {
  var script = document.createElement('script');
  script.src = path;
  script.type = 'text/javascript';
  script.onload = cb;
  return script;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AnimateVpaidBridge = function (_Linear) {
  inherits(AnimateVpaidBridge, _Linear);

  function AnimateVpaidBridge(options) {
    classCallCheck(this, AnimateVpaidBridge);

    var _this = possibleConstructorReturn(this, Object.getPrototypeOf(AnimateVpaidBridge).call(this, options));

    _this.bridgeId = options.bridgeId;
    _this.createjsUri = options.createjsUri;
    _this.animateJs = options.animateJs;
    _this.basePath = options.basePath;
    _this.once('AdStarted', function () {
      _this._videoSlot.play();
    });
    return _this;
  }

  createClass(AnimateVpaidBridge, [{
    key: 'initAd',
    value: function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
      var _this2 = this;

      this._attributes.width = width;
      this._attributes.height = height;
      this._attributes.viewMode = viewMode;
      this._attributes.desiredBitrate = desiredBitrate;
      this._slot = environmentVars.slot;
      this._videoSlot = environmentVars.videoSlot;
      this.renderSlot_(function () {
        _this2.canvas = document.getElementById('canvas');
        _this2.images = images || {};
        _this2.loader = new createjs.LoadQueue(false, _this2.basePath);
        _this2.loader.addEventListener('fileload', _this2.handleFileLoad.bind(_this2));
        _this2.loader.addEventListener('complete', function (ev) {
          _this2.handleComplete(ev);
        });
        get(Object.getPrototypeOf(AnimateVpaidBridge.prototype), 'initAd', _this2).call(_this2, width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        if (lib.properties.manifest.length === 0) {
          _this2.initStage();
        } else {
          _this2.loader.loadManifest(lib.properties.manifest);
        }
      });
    }
  }, {
    key: 'handleFileLoad',
    value: function handleFileLoad(ev) {
      if (ev.item.type == 'image') {
        images[ev.item.id] = ev.result;
      }
    }
  }, {
    key: 'initStage',
    value: function initStage() {
      var exportRoot = new lib[this.bridgeId]();
      this.stage = new createjs.Stage(this.canvas);
      exportRoot.__elan__ = this;
      this.stage.addChild(exportRoot);
      this.stage.enableMouseOver();
      // Registers the "tick" event listener.
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener('tick', this.stage);
      this.resizeCanvas(false, 'both', false, 1);
    }
  }, {
    key: 'handleComplete',
    value: function handleComplete(ev) {
      // This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
      var queue = ev.target;
      var ssMetadata = lib.ssMetadata;
      for (var i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
          images: [queue.getResult(ssMetadata[i].name)],
          frames: ssMetadata[i].frames
        });
      }
      this.initStage();
    }

    /**
     * This bit is from Adobe Animate CC
     * @return {[type]} [description]
     */

  }, {
    key: 'resizeCanvas',
    value: function resizeCanvas(isResp, respDim, isScale, scaleType) {
      var w = lib.properties.width;
      var h = lib.properties.height;
      var iw = window.innerWidth;
      var ih = window.innerHeight;
      var pRatio = window.devicePixelRatio;
      var xRatio = iw / w;
      var yRatio = ih / h;
      var sRatio = 1;
      if (isResp) {
        if (respDim === 'width' && this.lastW == iw || respDim === 'height' && this.lastH == ih) {
          sRatio = this.lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType === 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType === 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      this.canvas.width = w * pRatio * sRatio;
      this.canvas.height = h * pRatio * sRatio;
      this.canvas.style.width = w * sRatio + 'px';
      this.canvas.style.height = h * sRatio + 'px';
      this.stage.scaleX = pRatio * sRatio;
      this.stage.scaleY = pRatio * sRatio;
      this.lastW = iw;
      this.lastH = ih;
      this.lastS = sRatio;
    }
  }]);
  return AnimateVpaidBridge;
}(Linear);

AnimateVpaidBridge.prototype.renderSlot_ = function (callback) {
  var _this3 = this;

  var slotExists = this._slot && this._slot.tagName === 'DIV';
  var createjsScript = createScript(this.createjsUri, function () {
    if (!slotExists) {
      _this3._slot = document.createElement('div');
      if (!document.body) {
        document.body = document.createElement('body');
      }
      document.body.appendChild(_this3._slot);
    }
    // this should have broken down into options.
    _this3._slot.innerHTML = '\n      <canvas id="canvas" width="550" height="400"></canvas>\n    ';
    // loads Adobe Animate CC JavaScript
    var animateJsScript = createScript(_this3.animateJs, function () {
      callback();
    });
    document.body.appendChild(animateJsScript);
  });
  document.body.appendChild(createjsScript);
};

export default AnimateVpaidBridge;
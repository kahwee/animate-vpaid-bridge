import Linear from 'vpaid-ad/src/linear'
import createScript from './util/createScript'

export default class AnimateVpaidBridge extends Linear {

  constructor (options) {
    super(options)
    this.bridgeId = options.bridgeId
    this.createjsUri = options.createjsUri
    this.animateJs = options.animateJs
    this.once('AdStarted', () => {
      this._videoSlot.play()
    })
  }

  initAd (width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
    this._attributes.width = width
    this._attributes.height = height
    this._attributes.viewMode = viewMode
    this._attributes.desiredBitrate = desiredBitrate
    this._slot = environmentVars.slot
    this._videoSlot = environmentVars.videoSlot
    this.renderSlot_(() => {
      const canvas = document.getElementById('canvas')
      const exportRoot = new lib[this.bridgeId]()
      exportRoot.__elan__ = this
      let stage = new createjs.Stage(canvas)
      stage.addChild(exportRoot)
      stage.update()
      createjs.Ticker.setFPS(lib.properties.fps)
      createjs.Ticker.addEventListener('tick', stage)
      super.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars)
    })
  }

  /**
   * This bit is from Adobe Animate CC
   * @return {[type]} [description]
   */
  resizeCanvas () {
    var w = lib.properties.width, h = lib.properties.height
    var iw = window.innerWidth, ih = window.innerHeight
    var pRatio = window.devicePixelRatio, xRatio = iw / w, yRatio = ih / h, sRatio = 1
    if (isResp) {
      if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
        sRatio = lastS
      }
      else if (!isScale) {
        if (iw < w || ih < h)
          sRatio = Math.min(xRatio, yRatio)
      }
      else if (scaleType == 1) {
        sRatio = Math.min(xRatio, yRatio)
      }
      else if (scaleType == 2) {
        sRatio = Math.max(xRatio, yRatio)
      }
    }
    canvas.width = w * pRatio * sRatio
    canvas.height = h * pRatio * sRatio
    canvas.style.width = w * sRatio + 'px'
    canvas.style.height = h * sRatio + 'px'
    stage.scaleX = pRatio * sRatio
    stage.scaleY = pRatio * sRatio
    lastW = iw; lastH = ih; lastS = sRatio
  }
}

AnimateVpaidBridge.prototype.renderSlot_ = function (callback) {
  var slotExists = this._slot && this._slot.tagName === 'DIV'
  const createjsScript = createScript(this.createjsUri, () => {
    if (!slotExists) {
      this._slot = document.createElement('div')
      if (!document.body) {
        document.body = document.createElement('body')
      }
      document.body.appendChild(this._slot)
    }
    // this should have broken down into options.
    this._slot.innerHTML = `
      <canvas id="canvas" width="550" height="400"></canvas>
    `
    // loads Adobe Animate CC JavaScript
    const animateJsScript = createScript(this.animateJs, () => {
      callback()
    })
    document.body.appendChild(animateJsScript)
  })
  document.body.appendChild(createjsScript)
}

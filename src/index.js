import Linear from 'vpaid-ad/src/linear'
import createScript from './util/createScript'

export default class AnimateVpaidBridge extends Linear {

  constructor (options) {
    super(options)
    this.bridgeId = options.bridgeId
    this.createjsUri = options.createjsUri
    this.animateJs = options.animateJs
    this.basePath = options.basePath
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
      this.canvas = document.getElementById('canvas')
      this.images = images || {}
      this.loader = new createjs.LoadQueue(false, this.basePath)
      this.loader.addEventListener('fileload', this.handleFileLoad.bind(this))
      this.loader.addEventListener('complete', (ev) => {
        this.handleComplete(ev)
      })
      super.initAd(
        width,
        height,
        viewMode,
        desiredBitrate,
        creativeData,
        environmentVars
      )
      if (lib.properties.manifest.length === 0) {
        this.initStage()
      } else {
        this.loader.loadManifest(lib.properties.manifest)
      }
    })
  }

  handleFileLoad (ev) {
    if (ev.item.type == 'image') {
      images[ev.item.id] = ev.result
    }
  }

  initStage () {
    let exportRoot = new lib[this.bridgeId]()
    this.stage = new createjs.Stage(this.canvas)
    exportRoot.__elan__ = this
    this.stage.addChild(exportRoot)
    this.stage.enableMouseOver()
    // Registers the "tick" event listener.
    createjs.Ticker.setFPS(lib.properties.fps)
    createjs.Ticker.addEventListener('tick', this.stage)
    this.resizeCanvas(false, 'both', false, 1)
  }

  handleComplete (ev) {
    // This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    const queue = ev.target
    const ssMetadata = lib.ssMetadata
    for (var i = 0; i < ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet({
        images: [queue.getResult(ssMetadata[i].name)],
        frames: ssMetadata[i].frames
      })
    }
    initStage()
  }

  /**
   * This bit is from Adobe Animate CC
   * @return {[type]} [description]
   */
  resizeCanvas (isResp, respDim, isScale, scaleType) {
    const w = lib.properties.width
    const h = lib.properties.height
    const iw = window.innerWidth
    const ih = window.innerHeight
    const pRatio = window.devicePixelRatio
    const xRatio = iw / w
    const yRatio = ih / h
    let sRatio = 1
    if (isResp) {
      if ((respDim === 'width' && this.lastW == iw) || (respDim === 'height' && this.lastH == ih)) {
        sRatio = this.lastS
      }
      else if (!isScale) {
        if (iw < w || ih < h)
          sRatio = Math.min(xRatio, yRatio)
      }
      else if (scaleType === 1) {
        sRatio = Math.min(xRatio, yRatio)
      }
      else if (scaleType === 2) {
        sRatio = Math.max(xRatio, yRatio)
      }
    }
    this.canvas.width = w * pRatio * sRatio
    this.canvas.height = h * pRatio * sRatio
    this.canvas.style.width = w * sRatio + 'px'
    this.canvas.style.height = h * sRatio + 'px'
    this.stage.scaleX = pRatio * sRatio
    this.stage.scaleY = pRatio * sRatio
    this.lastW = iw
    this.lastH = ih
    this.lastS = sRatio
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

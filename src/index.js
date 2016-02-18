import Linear from 'vpaid-ad/src/linear'
import createScript from './util/createScript'
import $trigger from 'vpaid-ad/src/trigger'

export default class AnimateVpaidBridge extends Linear {

  constructor (options) {
    super(options)
    this.bridgeId = options.bridgeId
    this.createjsUri = options.createjsUri
    this.animateJs = options.animateJs
    this.mediaFiles = options.mediaFiles || []
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
      let stage = new createjs.Stage(canvas)
      stage.addChild(exportRoot)
      stage.update()
      createjs.Ticker.setFPS(lib.properties.fps)
      createjs.Ticker.addEventListener('tick', stage)
      let supportedVideos = this.mediaFiles.filter((mf) => this._videoSlot.canPlayType(mf.type))
      this._videoSlot.setAttribute('src', supportedVideos[0].src)
      $trigger.call(this, 'AdLoaded')

    })
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
      <canvas id="canvas" width="550" height="400" style="background-color:#FFFFFF"></canvas>
    `
    // loads Adobe Animate CC JavaScript
    const animateJsScript = createScript(this.animateJs, () => {
      callback()
    })
    document.body.appendChild(animateJsScript)
  })
  document.body.appendChild(createjsScript)
}

import AnimateVpaidBridge from '../index'
window.getVPAIDAd = function () {
  return new AnimateVpaidBridge({
    videos: [
      {
        url: 'https://s3.amazonaws.com/m-vast-vpaid-server/static/videos/apple-watch.mp4',
        type: 'video/mp4'
      }
    ],
    createjsUri: 'https://code.createjs.com/createjs-2015.11.26.min.js',
    basePath: 'https://s3.amazonaws.com/animate-vpaid-bridge/dist/examples/exports/',
    animateJs: 'https://s3.amazonaws.com/animate-vpaid-bridge/dist/examples/exports/kahweetest.js',
    bridgeId: 'kahweetest'
  })
}

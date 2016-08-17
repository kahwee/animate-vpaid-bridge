# animate-vpaid-bridge

Bridges between Adobe Animate CC and VPAID advertisements. Open issues to give your comments.

# Usage

```js
import AnimateVpaidBridge from 'animate-vpaid-bridge'
window.getVPAIDAd = function () {
  return new AnimateVpaidBridge({
    mediaFiles: [
      {
        url: '<YOURVIDEOURL>',
        type: 'video/mp4'
      }
    ],
    createjsUri: 'https://code.createjs.com/createjs-2015.11.26.min.js',
    animateJs: 'https://s3.amazonaws.com/animate-vpaid-bridge/kahweetest.js',
    bridgeId: 'kahweetest'
  })
}
```

# Demo

VAST with VPAID ad tag: 

* https://s3.amazonaws.com/animate-vpaid-bridge/ad-tags/kahweetest.xml (An elephant moving on screen, click on the shadow)
* https://s3.amazonaws.com/animate-vpaid-bridge/ad-tags/motion.xml (A motion tween)

Try it in [Google IMA Player](https://developers.google.com/interactive-media-ads/docs/sdks/html5/vastinspector) and [JW Player](https://developer.jwplayer.com/tools/ad-tester/)

# License

MIT

# animate-vpaid-bridge

Proof of concept of bridging between Adobe Animate CC and VPAID advertisements. Open issues to give your comments.

# Usage

```js
import AnimateVpaidBridge from 'animate-vpaid-bridge'
window.getVPAIDAd = function () {
  return new AnimateVpaidBridge({
    mediaFiles: [
      {
        src: '<YOURVIDEOURL>',
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

VAST ad tag: https://s3.amazonaws.com/animate-vpaid-bridge/sample-1.xml

# License

MIT

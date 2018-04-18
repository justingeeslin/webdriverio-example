const gulp = require('gulp');

gulp.task('screenshot', function() {
  var assert = require('assert');

  // init WebdriverIO
  var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'firefox'}})
  // init WebdriverCSS
  require('webdrivercss').init(client, {
    // example options
    screenshotRoot: 'shots',
    failedComparisonsRoot: 'diffs',
    misMatchTolerance: 0.05,
    screenWidth: [320,480,640,1024]
});

  client
      .init()
      .url('https://sa.test.senseaware.com')
      .webdrivercss('startpage',[
          {
              name: 'header',
              elem: '#header'
          }
      ], function(err, res) {
        console.log('screenshot taken.')
        assert.ifError(err);
        assert.ok(res.header[0].isWithinMisMatchTolerance);
        assert.ok(res.hero[0].isWithinMisMatchTolerance);
      })
      .end();

})

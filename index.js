var tessel = require('tessel'),
    infrared = require('ir-attx4').use(tessel.port['A']); 

infrared.on('ready', function() {
    infrared.setListening(true, function(){
        console.log('Listening');
    });
});

infrared.on('data', function(data) {
    infrared.sendRawSignal(38, powerBuffer, function(err) {
        if (err) {
            console.log("Unable to send signal: ", err);
        } else {
            console.log("Signal sent!");
        }
    });
});

/**
 * Created by socio on 11/1/2016.
 */
var metasync = require('./metasync');
dataCollectorTimeout = new metasync.DataCollectorTimeout(4, function(err, data){
    if (!err) console.log('data received'); else console.log('timed out');
},10);
dataCollectorTimeout.collect(1, "some data1");
dataCollectorTimeout.collect(2, "some data2");

setTimeout(function () {
    dataCollectorTimeout.collect(3, "some data3");
},5000);
dataCollectorTimeout.collect(4, "some data4");
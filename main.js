/**
 * Created by socio on 11/1/2016.
 */
var ms = require('./metasync');
ms.DataCollector(4,function(err, data){
    if (!err) console.log('data received'); else console.log('timed out');
},1000);
ms.DataCollector.call();
ms.DataCollector.call();
ms.DataCollector.call();
ms.DataCollector.call();
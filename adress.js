const request = require('request');

var getInfo= (adress)=>{
    //console.log(`http://www.mapquestapi.com/geocoding/v1/address?key=qYgFlK2HIXSbxyDGexwTfCuz8XHgnemX&location=${encodeURIComponent(adress)}`);
    request({
        url:`http://www.mapquestapi.com/geocoding/v1/address?key=qYgFlK2HIXSbxyDGexwTfCuz8XHgnemX&location=${encodeURIComponent(adress)}`,
        json:true
    },(error,response,body)=>{
        if(error){
            console.log('Unable to connect');
        }else{
            if(body.results[0].locations[0]!=null){
                console.log(`Ini nama Jalannya : ${body.results[0].locations[0].street}`);
                console.log(`Ini nama daerahnya : ${body.results[0].locations[0].adminArea5}`);
                console.log(`ini kordinat latitude : ${body.results[0].locations[0].latLng.lat}`);
                console.log(`Ini kordinat longitude : ${body.results[0].locations[0].latLng.lng}`); 
            // format object readable
            //console.log(JSON.stringify(response,undefined,2));
            }else{
                console.log('Location Not Found');
                console.log(JSON.stringify(response,undefined,2));
            }
        }
        
            });


};

module.exports={
    getInfo
}
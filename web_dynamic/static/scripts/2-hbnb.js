#!/usr/bin/node
$(
    function(){
        const request = require('request');
        request.get('http://0.0.0.0:5001/api/v1/status/').on('response', function(response){
            if(response.statusCode === 200){
                $('div#api_status').addClass('available');
                console.log('hi');
            } else {
                $('div#api_status').removeClass('available');
            }
        })
    }
);
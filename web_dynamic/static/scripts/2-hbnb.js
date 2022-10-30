#!/usr/bin/node
$(
    function(){
        $.get('http://0.0.0.0:5001/api/v1/status/', function(data, response){
            $('div#api_status').text(response);
            if(response === 'OK'){
                $('div#api_status').addClass('available');
            } else {
                $('div#api_status').removeClass('available');
            }
    });
    }
);
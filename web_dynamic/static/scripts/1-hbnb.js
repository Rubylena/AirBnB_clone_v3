#!/usr/bin/node
$(
    function(){
        const amenities = document.querySelector('.amenities');
        const output = document.querySelector('.amenities h4');
        const input = document.querySelector('input[type="checkbox"]');
        const amenitiesList = [];
        
        amenities.addEventListener('click', e =>{
            if(e.target.matches('input')){
                const amenitiesId = e.target.dataset.id;
                if(input.checked){
                    if(!amenitiesList.includes(amenitiesId)){
                        amenitiesList.push(amenitiesId);
                    }
                } else {
                    if(amenitiesList.includes(amenitiesId)){
                        amenitiesList.pop(amenitiesId);
                    }
                }
                output.textContent = amenitiesList;
            }
        });
    }
);
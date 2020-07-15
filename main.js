const mainArticle = document.querySelector('.mainArticle'),
    sidebar = document.querySelector('#sidebar'),
    sub_sidebar = document.querySelector('#substitute_sidebar'),
    sectionAll = document.querySelectorAll('.section'),
    secondArticle = document.querySelector('.second-Article'),
    thirdArticle = document.querySelector('.third-Article'),
    fourthArticle = document.querySelector('.fourth-Article'),
    iot = document.querySelector('#layout'),
    doors = document.querySelector('#doors'),
    info = document.querySelector('#info'),
    wireless = document.querySelector('#wireless'),
    a_element = document.querySelectorAll('a'),
    section = document.querySelector('.section1'),
    time = Date(),
    calendar = document.querySelector('#calendar'),
    html_time = document.querySelector('#time_status'),
    html_date = document.querySelector('#date_status'),
    calendar1 = document.querySelector('#calendar1'),
    relay_one = document.querySelector('#relay-first');
    


var time_values,I_AM_CLICKED = 0,
    HTML_object = {},
    data = {
            RELAY : '0',

            status : 'closed',
            
            topic : null

        };

function style(variable) {

    variable.style.display = 'none';
}
style(secondArticle);
style(fourthArticle);

function changeDisplay(item) {

    mainArticle.style.display = 'none';
    secondArticle.style.display = 'none';
    fourthArticle.style.display = 'none';

    item.style.display = 'block';
}


function getTime(time) {
    const time_array = time.split(' ');

    time_values = {
        day: time_array[0],
        month: time_array[1],
        day_num: time_array[2],
        year: time_array[3],
        time_h: time_array[4]
    }

    html_time.innerHTML = time_values.time_h;

    html_date.innerHTML = time_values.day + "  , " + time_values.day_num;

}

getTime(time)

function clicked() {
    calendar1.innerText = "DAY";
}


// DOORS

// clicked



// notifications

$( window ).scroll(function() {
    if(sidebar.style.height < "604px"){
        
        $( sidebar ).css( "height", "604px" );
    }
    if(sidebar.style.height > "604px"){
        
        $( sidebar ).css( "height", "100vh" );
    }
  });


  $( window ).scroll(function() {
    if(sub_sidebar.style.height < "604px"){
        
        $( sub_sidebar ).css( "height", "1400px" );
    }
    if(sub_sidebar.style.height > "604px"){
        
        $( sub_sidebar ).css( "height", "100vh" );
    }
  });
// the donut js
  function check(){
    $(document).ready(function($){
    // uibuilder.onChange('msg', function(newVal){
        
    // this.RELAY = newVal.payload;
     
    // if(this.RELAY == 1) {
        setTimeout(() => {
            
        $('.alert').css('display','none');
            
        //  uibuilder.send( { 'topic': 'relay', 'payload': newVal.payload } )
         
         $('#' + HTML_object.id).css({
            background : '#303030',
            color : '#ccc',

            })

         $('#' + HTML_object.id +' .' + HTML_object.element).css({
            background : 'inherit',
            border : '.1em dashed greenyellow'
                
            });
            
        $('#' + HTML_object.id +' ' + HTML_object.h6).html('closed');
    
        }, 10000);
    })
}


 function clickHandler(id,h6,element,background_color,color,linear_gradient){
   
    // var vueApp = this;

    $(document).ready(function($) {
        // if(RELAY == '0'){
            $('#' + id).css({
            background : background_color,
            color : color,

            })
            
            $('.alert').css('display','block');
            
           ;
            
            $('#' + id +' .' + element).css({
                background : 'linear-gradient(120deg, ' + linear_gradient + ')',
                border : 'none'
                
            });
            
            $('#' + id +' ' + h6).html('opened');
            
            switch(id){
        
            case  'emergency':
            
                this.topic = 'relay1';
                
            break;
            
            case  'front':
                
                this.topic = 'relay2';
                
            break;
            
            case  'opposite':
                
                this.topic = 'vrelay2';
                
            break;
            
            case  'relay-first':
                
                this.topic = 'relay3';
                
            break;
            
            case  'relay-second':
                
                this.topic = 'relay4';
                
            break;
            
            case  'relay-all-front':
                
                this.topic = 'vrelay4';
                
            break;
            
            case  'relay-fourth':
                
                this.topic = 'relay5';
                
            break;
            
            case  'relay-third':
                
                this.topic = 'relay6';
                
            break;
            
            case  'relay-all-opp':
                
                this.topic = 'vrelay6';
                
            break;
            
            case  'relay-fifth':
                
                this.topic = 'relay7';
                
            break;
            
            case  'relay-sixth':
                
                this.topic = 'relay8';
                
            break;
            
            case  'relay-all-service':
                
                this.topic = 'vrelay8';
                
            break;
            
            case  'allemergency':
                
                this.topic = 'vrelayallopen1';
                
            break;
           
            case  'all-opp':
                
                this.topic = 'vrelayallopen2';
                
            break;

            case  'service':
                
                this.topic = 'vrelayallopen2';
                
            break;
                           
            };
            // uibuilder.send( { 'topic': this.topic, 'payload': '0' } )
        
        // }
    })

    check()

    HTML_object.id = id;
    HTML_object.element = element;
    HTML_object.h6 = h6;
    // check(ob)
    return HTML_object;
}

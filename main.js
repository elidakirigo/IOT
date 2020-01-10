
const   mainArticle = document.querySelector('.mainArticle'),
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
        calendar1 = document.querySelector('#calendar1');


var time_values;        


function style(variable){

    variable.style.display = 'none';
}
style(secondArticle);
style(thirdArticle);
style(fourthArticle);

function changeDisplay(item){

    mainArticle.style.display = 'none';
    secondArticle.style.display = 'none';
    thirdArticle.style.display = 'none';
    fourthArticle.style.display = 'none';

    item.style.display = 'block';
}


function getTime(time){
 const time_array = time.split(' ');

 time_values = { day : time_array[0], month : time_array[1], day_num : time_array[2], year : time_array[3], time_h : time_array[4] }

 html_time.innerHTML = time_values.time_h;

 html_date.innerHTML = time_values.day + "  , " + time_values.day_num;

}

getTime(time)

function clicked(){
    calendar1.innerText= "DAY";
}

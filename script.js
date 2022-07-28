//const date = new Date();
//const newDate = new Date('January 01, 2023 00:00:00');
const run = ()=>
{ 
    const date = new Date();
    const newDate = new Date('January 01, 2023 00:00:00');
const diff = newDate.getTime()-date.getTime();
const days = Math.floor(diff/(24*3600*1000));
const hours = Math.floor(diff/(3600*1000
    )%24);
    const min = Math.floor(diff/(60*1000
        )%60);
        const sec = Math.floor((diff/1000)%60);

    //console.log(day,hour,min,sec,millsec);
    //console.log(diff,days,hours,min,sec);
document.getElementById('sec').innerHTML=addZero(sec);
document.getElementById('min').innerHTML=addZero(min);
document.getElementById('hours').innerHTML=addZero(hours);
document.getElementById('days').innerHTML=addZero(days);}
//run();
   const addZero=(time)=>{
    return time<10 ? `0${time}`: time;
   }
   setInterval(run,1000);
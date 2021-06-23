setInterval(() => {
     d = new Date();
     gh = d.getHours();
     gm = d.getMinutes();
     gs = d.getSeconds();

     console.log("hkhb" , gh,gm,gs)
     hrotation= 30*gh + gm/2;
     mrotation = 6*gm;
     srotation = 6*gs;

  h = document.querySelector('.hour');
  m = document.querySelector('.minute');
  s = document.querySelector('.second');

    h.style.transform=`rotate(${hrotation}deg)`; 
    m.style.transform=`rotate(${mrotation}deg)`; 
    s.style.transform=`rotate(${srotation}deg)`; 

}, 1000);

// setInterval(() => {
//     d = new Date();
//     htime=d.getHours();s
//     mtime=d.getMinutes();
//     stime=d.getSeconds();
//     hrotaion= 30*htime + mtime/2;
//     mrotaion = 6*mtime;
//     srotaion = 6*stime;

//     hour.style.transform = `rotate(${hrotaion}deg)`;
//     minute.style.transform = `rotate(${mrotaion}deg)`;
//     second.style.transform = `rotate(${srotaion}deg)`;
// }, 1000);
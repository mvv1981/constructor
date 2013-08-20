function createElement(name,parid,ID,Klass,h,w){
    var selfname = document.createElement(name);
    var getpar = document.getElementById(parid);
    selfname.id = ID;
    selfname.className = Klass;
    selfname.style.height = 'h' + 'px';
    selfname.style.width = 'w' + 'px';
    getpar.appendChild(selfname);
}

//Функция по созданию элементов
//function createElement(nameVal){
  //  var nameVal1 = nameVal;
   // var name = document.createElement('nameVal1');
    //console.log(name);
    //var parname = document.getElementById('parid');
    //name.id = id;
    //name.class = Klass;
    //parname.appendChild(name);
//}

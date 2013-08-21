function createElement(name,parid,ID,Klass,h,w){
    var selfname = document.createElement(name);
    var getpar = document.getElementById(parid);
    selfname.id = ID;
    selfname.className = Klass;
    selfname.style.height = 'h' + 'px';
    selfname.style.width = 'w' + 'px';
    getpar.appendChild(selfname);
}

var Animal = function(){};
Animal.prototype.breath = function(){
    console.log('дыхание');
};
var Dog = function(){};
// Dog аследует свойства у Animal
Dog.prototype = new Animal;
Dog.prototype.wag = function(){
    console.log('виляющий хвост');
};
var dog = new Dog;
dog.wag();
dog.breath();
//Конец вставки
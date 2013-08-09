function createall(){
    var get_menu = document.getElementById('menu_panel');
    if(get_menu){
        createContainer();
    }else{
        createMenu()
        createContainer();
    }
}
function createMenu(){
    var menu = document.createElement('div');
    menu.id = 'menu_panel';
    document.body.appendChild(menu);
}
function createContainer(){
    var MainConteriner = document.createElement('div');
    var menuWidth = document.getElementById('menu_panel').offsetWidth;
    MainConteriner.id = "main_conteiner";
    MainConteriner.style.width = window.innerWidth - menuWidth +'px';
    document.body.appendChild(MainConteriner);
    var pageWrapper = document.createElement('div');
    pageWrapper.id = 'page';
    pageWrapper.style.width = '665px';
    pageWrapper.style.height = '524px';
    MainConteriner.appendChild(pageWrapper);
    var page_top = (window.innerHeight - pageWrapper.offsetHeight) / 2;
    var page_top = page_top.toFixed();
    pageWrapper.style.marginTop = page_top + 'px';
}
//Проверяем на ресайз
function resizeConteiner(){
    if(document.getElementById('main_conteiner') && document.getElementById('page') && document.getElementById('menu_panel')){
        document.getElementById('main_conteiner').style.width = window.innerWidth - document.getElementById('menu_panel').offsetWidth +'px';
        document.getElementById('page').style.marginTop = (window.innerHeight - document.getElementById('page').offsetHeight) / 2 + 'px';
    }
}
var button = document.querySelector('#nav .container-fluid .navbar-header button span');
button.setAttribute("class","fa fa-navicon");
button.style.cssText="color:white; font-size:30px;";
button.addEventListener('click',()=>{
    if(button.getAttribute("class")=="fa fa-navicon"){
        button.setAttribute("class","fa fa-close");
        button.style.cssText="font-size:30px;";
    }
    else{
        button.setAttribute("class","fa fa-navicon");
        button.style.cssText="color:white; font-size:30px;";
    }
});
function click_me(){
    var a = document.getElementById("main");
    if(a.classList.contains("amazing")){
        a.classList.remove("amazing");
        a.classList.add("awesome");
    }else{
    a.classList.remove("awesome");
    a.classList.add("amazing");
    }
}
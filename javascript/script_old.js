// navbar
$(function () {
    $(window).scroll(function () {
        let scrollVal = $(this).scrollTop(); //頁面滾動的高度
        let windowVal = $(window).height(); //瀏覽器窗口高度
        if (scrollVal > windowVal * 0.6) {
            //   document.getElementById("content2").innerText = "123465";
            document.getElementById("side_navbar").style.display = "block";
        } else {
            document.getElementById("side_navbar").style.display = "none";
        }
        // if (scrollVal>500 && scrollVal<1000) {
        //     document.getElementsByClassName("n1").style.backgroundColor = "#a18d7c" ;
        // }
    });
});

// works light box - open / close
function openWin($target_id) {
    // if($(document).height() > $(window).height()){
    let scrollVal = $(this).scrollTop(); //頁面滾動的高度
    let screenHei = $(window).height();
    console.log(scrollVal);
    addClass("html", "noscroll");
    addClass("body", "fixWindow");
    document.querySelector(".noscroll").style.top = "-" + scrollVal + "px";
    document.querySelector(".work_in").style.top = scrollVal - screenHei + 30 + "px";
    document.querySelector($target_id).style.display = "block";
    // $($target_id).show();
    

}
function closeWin($target_id) {
    // if ($(document).height() > $(window).height()) {
    // $($target_id).hide();
    document.querySelector($target_id).style.display = "none";
    document.querySelector(".work_in").style.top = "0";
    removeClass("html", "noscroll");
    removeClass("body", "fixWindow");
    // document.querySelector("body").style.top = "0";
    
    

    // }
    // if($(document).height() > $(window).height()){
    //     removeClass("html", "noscroll");
    // }else{
    //     removeClass("html", "fixWindow");
    // }
}

// class - add / remove
function addClass($target = "", $classname = "") {
    let target = document.querySelector($target);
    target.classList.add($classname);
}
function removeClass($target = "", $classname = "") {
    let target = document.querySelector($target);
    target.classList.remove($classname);
}

// function openwin($target_id){
//     let target = document.getElementById($target_id);
//     target.style.display = "block";
// }
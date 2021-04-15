// ******* main navbar (In preparation)
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


//******** side navbar
$(function () {
  $(window).scroll(function () {
    let scrollVal = $(this).scrollTop(); //頁面滾動的高度
    let windowVal = $(window).height(); //瀏覽器窗口高度
    let windowWid = $(window).width(); //瀏覽器窗口寬度

    // 若頁面滾動高度大於70vh && 瀏覽器寬度大於790(RWD) 
    if (scrollVal > windowVal * 0.7 && windowWid > 790) {

      document.getElementById("side_navbar").style.display = "block";
    
    } else {

      document.getElementById("side_navbar").style.display = "none";
    
    }
  });
});





//***** */ class - add
function addClass($target = "", $classname = "") {
  let target = document.querySelector($target);
  target.classList.add($classname);
}


//***** */ class - remove
function removeClass($target = "", $classname = "") {
  let target = document.querySelector($target);
  target.classList.remove($classname);
}




//********* works light box - open
function openWin($target_id) {
  let scrollVal = $(this).scrollTop(); //頁面滾動的高度
  let winHei = $(document).height(); //文件高度
  let screenHei = $(window).height(); //瀏覽器高度
  // console.log(scrollVal);
  // console.log(screenHei);
  // console.log(winHei);

  // 作用：防止作品視窗在document以下做開啟，始之維持在document原始高度中開啟
  if ($(document).height() > scrollVal + screenHei) {

    addClass(".work_hide", "fixWindow");
    document.getElementById($target_id).style.top =
      scrollVal + screenHei * 0.03 + "px";
      // scrollVal - screenHei + screenHei * 0.1 * 0.2 + "px";
    document.getElementById($target_id).style.display = "block";
  
  } else {

    addClass(".work_hide", "fixWindow");
    document.getElementById($target_id).style.top =
      scrollVal - screenHei + "px";
    document.getElementById($target_id).style.display = "block";
  
  }
}


//***** */ works light box - close
function closeWin($target_id) {
  document.getElementById($target_id).style.display = "none";
  document.getElementById($target_id).style.top = "0";
  removeClass(".work_hide", "fixWindow");
}



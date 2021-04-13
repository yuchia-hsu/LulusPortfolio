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
    let windowWid = $(window).width(); //瀏覽器窗口高度
    if (scrollVal > windowVal * 0.6 && windowWid > 790) {
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

//********* works light box - open
function openWin($target_id) {
  let scrollVal = $(this).scrollTop(); //頁面滾動的高度
  let winHei = $(document).height();
  let screenHei = $(window).height();
  console.log(scrollVal);
  console.log(screenHei);
  console.log(winHei);

  if ($(document).height() > scrollVal + screenHei) {
    addClass(".work_hide", "fixWindow");
    document.getElementById($target_id).style.top =
      scrollVal - screenHei + screenHei * 0.1 * 0.2 + "px";
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

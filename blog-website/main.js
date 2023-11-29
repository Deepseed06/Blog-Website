$(document).ready(function() {
    $(".filter-item").click(function() {
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $(".post-box").show("1000");
      } else {
        $(".post-box")
          .not("." + value)
          .hide("1000");
        $(".post-box")
          .filter("." + value)
          .show("1000");
      }
  
      $(".filter-item").click(function() {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      });
  
  
    });
  });
  let header = document.querySelector("header");
  let open_btn = document.querySelector('.fa-bars')
  let close_btn = document.querySelector('.fa-times')
  
  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 300);
  
  });
  
  
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "360px";
    document.getElementById("main").style.marginLeft = "360px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    open_btn.style.display = 'block'
  }
  
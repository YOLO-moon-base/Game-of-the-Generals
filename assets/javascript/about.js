var tab_header = document.querySelectorAll(".tab_header > div");
var tab_content = document.querySelectorAll(".tab_content > div");

for (let i = 0; i < tab_header.length; i++) {
  tab_header[i].addEventListener("click", function() {
    
    document.querySelector(".tab_header > div.active").classList.remove("active");
    tab_header[i].classList.add("active");

    document.querySelector(".tab_content > div.active").classList.remove("active");
    tab_content[i].classList.add("active");
  });
}

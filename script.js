document.querySelectorAll(".detail-btn").forEach(btn =>
{
    btn.addEventListener('click',()=>{
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })

})

const navbar = document.querySelector(".navbar  bg-body-tertiary nav-item sticky-top");
const navbarOffsetTop = navbar.offsetTop ;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-brand nav-link");




window.addEventListener("scroll",()=>{
    mainFn();
});



const mainFn =() =>{
    if (window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    
    }
     
    
    sections.forEach((section,i) =>{
        if (window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink =>{
                navbarLink.classList.remove("change");
            });
                navbarLinks[i].classList.add("change");
        }
    });
}

mainFn();

// window.addEventListener('resize', () =>{
//     window.location.reload();
// })



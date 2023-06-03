
let sectionss = document.querySelectorAll('section')
let navLinkss = document.querySelectorAll('section nav a')

window.onscroll = () => {
    sectionss.forEach(sec => {
        let top =window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinkss.forEach(links => {
                links.classList.remove('active')
                document.querySelector('section nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

const collapsibles = document.querySelectorAll('.collapsible')
collapsibles.forEach((item) =>
    item.addEventListener('click', function () {
        this.classList.toggle('collapsible--expanded')
    })
)

//Skill Bars
let numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if (startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    }, 25)
})

//Jump to top
const jumpToTop = document.querySelector('.jump-to-top')
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        jumpToTop.classList.add('active')

    } else {
        jumpToTop.classList.remove('active')
    }
})
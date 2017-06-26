function updateHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    debugger
    const heading = document.querySelector('h1')
    heading.textContent = 'Ye Olde Person Stats'
}

const personForm = document.querySelector("#person-form")
personForm.addEventListener('submit', updateHeading)
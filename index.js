
function updateHeading(ev) {
  ev.preventDefault()
  const f = ev.target
  const l = ev.target
  const lastName = l.personLastName.value
  const name = f.personName.value
  const heading = document.querySelector('h1')
  heading.textContent = name
  
  const divParagraph = document.querySelector('#divP')
  divParagraph.innerHTML = (name + " " + lastName)

  //const lastName = personLastName.value
  //console.log(lastName)
}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)



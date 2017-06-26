
function updateHeading(ev) {
  
  ev.preventDefault()
  const f = ev.target
 
  const lastName = f.personLastName.value
  const name = f.personName.value
 // const heading = document.querySelector('h1')
  
  const divParagraph = document.querySelector('#divP')
  divParagraph.innerHTML = (name + " " + lastName)

if (name || lastName === "blue") {
      document.querySelector('#divP').style.color="blue"
}
else if (name || lastName === "red") {
      document.querySelector('#divP').style.color="red"
} 
else {
    document.querySelector('divP').style.color="black"
}

}


const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)



function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${name}`
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = `Favorite color:  `

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  colorItem.appendChild(colorDiv)

  //list.textContent = `${name}, age ${age} ${favoriteColor}`
  //list.style.backgroundColor = favoriteColor
  // p.setAttribute('id', name)

  const stats = document.querySelector('#stats')
  stats.appendChild(list)

  // stats.innerHTML = '<p>' + name + ', age ' + age + '</p>'
  // stats.innerHTML = `
  //   <p style="background-color: ${favoriteColor}">
  //     ${name}, age ${age}
  //   </p>
  // `
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)
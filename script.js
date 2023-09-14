//Should be inside GET request to get and insert data into <li>
// Selection
const dropdown = document.getElementById('drop-content-ul')
botList.forEach((bot, index) => {
	if (index === 0) {
		document.querySelector('.dropdown_click .selected span').innerHTML =
			bot.token
	}
	const li = document.createElement('li')
	li.innerHTML = `<span>${bot.token}</span>`
	dropdown.appendChild(li)
})

// Dropdown on click
const selectedClick = document.querySelector('.dropdown_click .selected')
const dropContentClick = document.querySelector(
	'.dropdown_click .drop-content ul'
)

selectedClick.addEventListener('click', function () {
	dropContentClick.style.display =
		dropContentClick.style.display === 'block' ? 'none' : 'block'
})

const dropContentItemsClick = document.querySelectorAll(
	'.dropdown_click .drop-content ul li span'
)

for (let i = 0; i < dropContentItemsClick.length; i++) {
	dropContentItemsClick[i].addEventListener('click', function () {
		// alert('ds')
		document.querySelector('.dropdown_click .selected span').innerHTML =
			this.innerHTML
		dropContentClick.style.display = 'none'
	})
}

// Click outside to hide dropdown
document.addEventListener('click', function (e) {
	const clickHide = e.target
	const dropdownC = document.querySelector('.dropdown_c')
	const dropContentUl = document.querySelector('.dropdown_c .drop-content ul')

	if (!clickHide.closest('.dropdown_c')) {
		dropContentUl.style.display = 'none'
	}
})

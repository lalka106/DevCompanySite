const menuItem = document.querySelectorAll('.portfolio__menu__item');
const tabsItem = document.querySelectorAll('.portfolio__photos')
menuItem.forEach(function (item) {
	item.addEventListener('click', function () {
		menuItem.forEach(function (item) {
			item.classList.remove('active');
		});
		tabsItem.forEach(function (item) {
			item.classList.remove('active');
		});


		let currentButton = item;
		let tabId = currentButton.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);


		currentButton.classList.add('active');
		currentTab.classList.add('active')
	});
});
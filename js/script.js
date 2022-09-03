let acc = document.getElementsByClassName("answers__accordion");
let i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Переключайтесь между добавлением и удалением "активного" класса,
чтобы выделить кнопку, управляющую панелью */
		this.classList.toggle("active");
		/* Переключение между скрытием и отображением активной панели */
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

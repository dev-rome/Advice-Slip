"use strict";

export const createAdvice = (advice) => {
	const paragraph = document.createElement("p");
	paragraph.classList.add("main__text__advice");
	paragraph.innerText = `${advice}`;

	const message = document.getElementById("main__text__result");
	message.appendChild(paragraph);
};

export const removeAdvice = () => {
	const results = document.getElementById("main__text__result");

	while (results.firstChild) {
		results.firstChild.remove();
	}
};

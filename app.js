"use strict";

import { advice } from "./api";
import { createAdvice, removeAdvice } from "./advice";

(() => {
	const showAdvice = () => {
		removeAdvice();
		advice()
			.then((response) => {
				createAdvice(response.data.slip.advice);
			})
			.catch((e) => {
				console.log(e + " error");
			});
	};
	window.addEventListener("load", () => {
		document
			.getElementById("main__btn__generator")
			.addEventListener("click", showAdvice);
	});
})();

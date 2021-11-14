"use strict";

import axios from "axios";

export const advice = async () => {
	const url = "	https://api.adviceslip.com/advice";
	const response = await axios.get(url);
	return response;
};

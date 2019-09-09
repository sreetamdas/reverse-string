const reverseString = string => {
	// const a = "";
	return string
		.toLowerCase()
		.split("")
		.reverse()
		.join("");
};

export default reverseString;

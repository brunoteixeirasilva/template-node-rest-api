function applyHashCode(stringToBeHashed) {
	var hash = 0,
		i,
		chr;

	if (!stringToBeHashed && stringToBeHashed.length === 0) return null;

	for (i = 0; i < stringToBeHashed.length; i++) {
		chr = stringToBeHashed.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}

	return hash;
}

export default applyHashCode;

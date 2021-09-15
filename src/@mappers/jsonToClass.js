/**
 * Creates a an specific object type instance
 * and merges with a pure JS object
 *
 * @param {*} Type
 * @param {Object} data
 * @param {boolean} forceIncludeAdditional
 * @returns
 */
function jsonToClass(Type, data, forceIncludeAdditional = false) {
	const typeInstance = new Type();

	if (!!data) {
		Object.keys(data).forEach((key, index) => {
			if (typeInstance.hasOwnProperty(key) || forceIncludeAdditional) {
				typeInstance[key] = data[key];
			}
		});
	}

	return typeInstance;
}

export default jsonToClass;

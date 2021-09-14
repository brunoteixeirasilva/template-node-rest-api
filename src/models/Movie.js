import ObjectModel from './ObjectModel';

/**
 * This class withholds information about movie units
 *
 * @property {string} title
 * @property {string} description
 * @property {number} length
 * @property {Date} publicationDate
 * @property {boolean} previewing
 */
class Movie extends ObjectModel {
	title = '';
	description = '';
	length = 0; // given in miliseconds
	publicationDate = null;
	previewing = false;

	constructor(title, description, length, publicationDate) {
		super();

		this.title = title;
		this.description = description;
		this.length = length;
		this.publicationDate = publicationDate;
	}

	stopPreview() {
		this.previewing = false;
	}

	preview() {
		this.previewing = true;

		const instance = this;

		setTimeout(() => {
			instance.stopPreview();
		}, this.length);
	}
}

export default Movie;

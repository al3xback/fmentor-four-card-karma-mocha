const assert = require('assert');

describe('DOM', () => {
	beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	afterEach(function () {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	it('should have a number type of each card list image width and height attribute values', () => {
		const cardImgEls = document.querySelectorAll('.card__image img');

		for (let i = 0; i < cardImgEls.length; i++) {
			const cardImgEl = cardImgEls[i];
			const cardImgWidth = parseInt(cardImgEl.getAttribute('width'));
			const cardImgHeight = parseInt(cardImgEl.getAttribute('height'));

			assert.equal(typeof cardImgWidth, 'number');
			assert.equal(typeof cardImgHeight, 'number');
		}
	});

	it("should have a title element that equals 'Reliable, efficient delivery'", () => {
		const sectionTitleEl = document.querySelector('.section__title');
		const sectionTitle = sectionTitleEl.textContent.trim();

		assert.equal(sectionTitle, 'Reliable, efficient delivery');
	});

	it('should have two children inside of the section element', () => {
		const sectionEl = document.querySelector('section');
		const sectionChildrenEls = sectionEl.children;

		assert.equal(sectionChildrenEls.length, 2);
	});

	it('should have an empty alt attribute value of each card list item image element', () => {
		const cardListItemImgEls =
			document.querySelectorAll('.card__image img');

		for (let i = 0; i < cardListItemImgEls.length; i++) {
			const cardListItemImgAlt = cardListItemImgEls[i].alt;

			assert.equal(cardListItemImgAlt, '');
		}
	});
});

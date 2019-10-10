import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('only one order', () => {
		const order = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order);

		expect(result).toBe(0);
	});

	it('first order is not an object', () => {
		const order1 = '1';
		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('second order is not an object', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = '2';

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('all orders are not objects', () => {
		const order1 = '1';
		const order2 = '2';

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first item < second item', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1)
	});

	it('second item < first item', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1)
	});

});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('only one order', () => {
		const order = {
			date: 1552585550000,
		};

		const result = sortByDate(order);

		expect(result).toBe(0);
	});

	it('date1 > date2', () => {
		const order1 = {
			date: 1552585550000,
		};

		const order2 = {
			date: 123,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('date2 > date1', () => {
		const order1 = {
			date: 1552481120000,
		};

		const order2 = {
			date: 1552585550000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('date1 == date2',() => {
		const order1 = {
			date: 1552585550000,
		};

		const order2 = {
			date: 1552585550000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('only one order', () => {
		const order = {
			items: [
				'Утиный пластмасса для показ новый год',
				'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
				'Новый стиль один розница яйцо для упаковки форма латекс',
			],
		};

		const result = sortByItemNames(order);

		expect(result).toBe(0);
	});

	it('items1 < items2', () => {
		const order1 = {
			id: 123,
			date: 1544356800000,
			shop: 'Ali Express',
			items: [
				'Утиный пластмасса для показ новый год',
				'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
				'Новый стиль один розница яйцо для упаковки форма латекс',
			],
		};

		const order2 = {
			id: 124,
			date: 1552481120000,
			shop: 'Lamoda.ru',
			items: [
				'Жакет - BOREAL5',
				'Miss Gabby Костюм',
				'Ostin перчатки мужские',
				'Zara худи роз.',
			]
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('items2 < items1', () => {
		const order1 = {
			id: 124,
			date: 1552481120000,
			shop: 'Lamoda.ru',
			items: [
				'Жакет - BOREAL5',
				'Miss Gabby Костюм',
				'Ostin перчатки мужские',
				'Zara худи роз.',
			]
		};

		const order2 = {
			id: 123,
			date: 1544356800000,
			shop: 'Ali Express',
			items: [
				'Утиный пластмасса для показ новый год',
				'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
				'Новый стиль один розница яйцо для упаковки форма латекс',
			],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('items1 == items2', () => {
		const order1 = {
			id: 124,
			date: 1552481120000,
			shop: 'Lamoda.ru',
			items: [
				'Утиный пластмасса для показ новый год',
				'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
				'Новый стиль один розница яйцо для упаковки форма латекс',
			]
		};

		const order2 = {
			id: 123,
			date: 1544356800000,
			shop: 'Ali Express',
			items: [
				'Утиный пластмасса для показ новый год',
				'Курица из нержавеющей стали, утка, гусь, голубь, питьевой фонтан',
				'Новый стиль один розница яйцо для упаковки форма латекс',
			],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	})
});


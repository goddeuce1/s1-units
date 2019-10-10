import {sortByDate} from "./sortOrders";
import {getDate} from "./getDate";

describe('getDate function', () => {
    it('successfully returns date', () => {
        const timestamp = 0;
        const result = getDate(0);
        expect(result).toEqual('1 января, чт, 1970 год');
    });
});
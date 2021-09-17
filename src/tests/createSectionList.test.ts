import { createSectionList } from '../createSectionList';

describe('createSectionList', () => {
    const input = ['Anna', 'Loren', 'Kate', 'Anabel', 'Leo']

    const output = [
        {
            name: 'A',
            data: ['Anabel', 'Anna'],
        },
        {
            name: 'K',
            data: ['Kary'],
        },
        {
            name: 'L',
            data: ['Leo', 'Loren'],
        },
    ];

    it('should return section list', () => {
        const result = createSectionList(input);
        expect(result).toEqual(output);
    });
});
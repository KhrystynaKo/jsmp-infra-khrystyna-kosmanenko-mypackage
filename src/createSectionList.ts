type Names = string[]
type SectionAlphabeticalList = {
    name: string;
    data: string[];
};

export const createSectionList = (
    arrayWithNames: Names
): SectionAlphabeticalList[] =>
    arrayWithNames
        .sort()
        .reduce((acc: SectionAlphabeticalList[], name: string) => {
            const firstLetter = name.charAt(0);
            const elemIndex = acc.findIndex((elem) => elem.name === firstLetter);
            if (elemIndex >= 0) {
                if (!acc[elemIndex].data.includes(name)) {
                    acc[elemIndex].data.push(name);
                }
            } else {
                acc.push({ name: firstLetter, data: [name] });
            }
            return acc;
        }, []);

console.log(createSectionList(['Anna', 'Loren', 'Kary', 'Anabel', 'Leo']))

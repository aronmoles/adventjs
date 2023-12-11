function findNaughtyStep(original: string, modified: string): string {
    const originalElements = original.split('').reduce<Map<string, number>>((prev, current) => {
        if (prev.has(current)) {
            prev.set(current, prev.get(current) + 1)
        } else {
            prev.set(current, 1)
        }
        return prev
    }, new Map());
    const modifiedElements = modified.split('').reduce<Map<string, number>>((prev, current) => {
        if (prev.has(current)) {
            prev.set(current, prev.get(current) + 1)
        } else {
            prev.set(current, 1)
        }
        return prev
    }, new Map());

    let diff = ''

    for (let [key, count] of modifiedElements.entries()) {
        if (!originalElements.has(key) || originalElements.get(key) !== count && !diff.includes(key)) {
            diff += key;
        }
    }
    for (let [key, count] of originalElements.entries()) {
        if (!modifiedElements.has(key) || modifiedElements.get(key) !== count && !diff.includes(key)) {
            diff += key;
        }
    }

    return diff
}


describe('Exercise 3', () => {
    it.each([
        {original: 'abcd', modified: 'abcde', expectedResult: 'e'},
        {original: 'stepfor', modified: 'stepor', expectedResult: 'f'},
        {original: 'abcde', modified: 'abcde', expectedResult: ''},
        {original: 'abcde', modified: 'abcdde', expectedResult: 'd'},
    ])('should find first repeat id', ({original, modified, expectedResult}) => {
        const result = findNaughtyStep(original, modified)

        expect(result).toEqual(expectedResult)
    })
});

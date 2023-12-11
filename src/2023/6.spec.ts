function maxDistance(movements: string): number {
    const LEFT = '<', RIGHT = '>', FRONT = '*'
    let counterLateral = 0
    let counterFrontal = 0

    movements.split('').forEach((c) => {
        if (c === FRONT) {
            counterFrontal++;
        }
        if (c === LEFT) {
            counterLateral--;
        }
        if (c === RIGHT) {
            counterLateral++;
        }
    })

    return Math.abs(counterLateral) + counterFrontal
}


describe('Exercise 6', () => {
    it.each([
        {movements: '>>*<', expectedResult: 2},
        {movements: '<<<>', expectedResult: 2},
        {movements: '>***>', expectedResult: 5},
    ])('should get the correct movements', ({movements, expectedResult}) => {
        const result = maxDistance(movements)

        expect(result).toEqual(expectedResult)
    })
});

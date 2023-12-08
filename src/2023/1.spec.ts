function findFirstRepeated(gifts: number[]): number {
	const repeatElements = gifts.filter((g, index) => gifts.indexOf(g) !== index )
	const index = gifts.indexOf(repeatElements[0])
	return gifts[index] ?? -1
}

describe('Exercise 1', () => {
	it.each([
		{giftIds: [2, 1, 3, 5, 3, 2], result: 3},
		{giftIds: [1, 2, 3, 4], result: -1},
		{giftIds: [5, 1, 5, 1], result: 5},
	])('should find first repeat id', ({giftIds, result}) => {
		const element = findFirstRepeated(giftIds)

		expect(element).toEqual(result)
	})
});

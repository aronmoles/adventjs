function manufacture(gifts: string[], materials: string): string[] {
	return gifts.filter((gift) => gift.split('').every((letter) => materials.includes(letter)))
}



describe('Exercise 2', () => {
	it.each([
		{gifts: ['tren', 'oso', 'pelota'], materials: 'tronesa', expectedResults: ["tren", "oso"]},
		{gifts: ['juego', 'puzzle'], materials: 'jlepuz', expectedResults: ["puzzle"]},
		{gifts: ['libro', 'ps5'], materials: 'psli', expectedResults: []},
	])('should find first repeat id', ({gifts, materials, expectedResults}) => {
		const result = manufacture(gifts, materials)

		expect(result).toEqual(expectedResults)
	})
});

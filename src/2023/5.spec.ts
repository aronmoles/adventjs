function cyberReindeer(road, time) {
    let timeCounter = 1;
    let santaIndex = 0;
    let clearRoad = road.replace('S', '.')
    let state: string = road;
    const states = [state]

    while (timeCounter < time) {
        if (timeCounter === 5) {
            clearRoad = clearRoad.replaceAll('|', '*')
            state = state.replaceAll('|', '*')
        }
        if (state[santaIndex + 1] !== '|') {
            santaIndex++;
            state = `${clearRoad.substring(0, santaIndex)}S${clearRoad.substring(santaIndex + 1)}`
        }
        states.push(state)
        timeCounter++;
    }

    return states;
}


describe('Exercise 5', () => {
    it('should render correct track', () => {
        const road = 'S..|...|..'
        const time = 10 // unidades de tiempo
        const result = cyberReindeer(road, time)

        expect(result).toEqual([
            'S..|...|..', // estado inicial
            '.S.|...|..', // avanza el trineo la carretera
            '..S|...|..', // avanza el trineo la carretera
            '..S|...|..', // el trineo para en la barrera
            '..S|...|..', // el trineo para en la barrera
            '...S...*..', // se abre la barrera, el trineo avanza
            '...*S..*..', // avanza el trineo la carretera
            '...*.S.*..', // avanza el trineo la carretera
            '...*..S*..', // avanza el trineo la carretera
            '...*...S..', // avanza por la barrera abierta
        ])
    })
});

const filter = require ('./assets/js/script.js')

test ('filtrar pokemones de tipo Dragon', () => {
    expect (filter(Grass)).toBe('Dratini', 'Dragonair', 'Dragonite')
});
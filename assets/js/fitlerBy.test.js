const filterBy = require('./script.js')



test ('filtrar pokemones de tipo Dragon', () => {
    let pokemonType = "Dragon";  
    var expected = filterBy(pokemonType);

    expect(expected.sizeOf()).toBe(3);
});
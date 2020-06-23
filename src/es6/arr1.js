const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' }
];

const result = cities.reduce((Accumulator, item) => {
    return {
        ...Accumulator,
        [item.name]: item.visited
    }
})

console.log('-------- result', result)
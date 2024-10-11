const db = require('../db')
const Animal = require('../models/animal')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const animals = [
        {
            name: 'Komodo Dragon',
            scientificName: 'Varanus komodoensis',
            subclassification: "Diapsida",
            region: 'Indonesia',
            imageUrl: 'https://a-z-animals.com/media/KomodoDragonWithLivestock-1024x636.jpg',
            endangered: true,
            humanDangerScale: 5
        },
        {
            name: 'Gila Monster',
            scientificName: 'Heloderma suspectum',
            subclassification: "Diapsida",
            region: 'Southwestern United States, Northern Mexico',
            imageUrl: 'https://example.com/gila-monster.jpg',
            endangered: false,
            humanDangerScale: 3
        },
        {
            name: 'Green Sea Turtle',
            scientificName: 'Chelonia mydas',
            subclassification: "Diapsida",
            region: 'Tropical and subtropical oceans worldwide',
            imageUrl: 'https://example.com/green-sea-turtle.jpg',
            endangered: true,
            humanDangerScale: 1
        },
        {
            name: 'Corn Snake',
            scientificName: 'Pantherophis guttatus',
            subclassification: "Diapsida",
            region: 'Southeastern United States',
            imageUrl: 'https://example.com/corn-snake.jpg',
            endangered: false,
            humanDangerScale: 0
        },
        {
            name: 'American Alligator',
            scientificName: 'Alligator mississippiensis',
            subclassification: "Diapsida",
            region: 'Southeastern United States',
            imageUrl: 'https://example.com/american-alligator.jpg',
            endangered: false,
            humanDangerScale: 4
        },
        {
            name: 'Humpback Whale',
            scientificName: 'Megaptera novaeangliae',
            subclassification: "Eutheria",
            region: 'Oceans worldwide',
            imageUrl: 'https://example.com/humpback-whale.jpg',
            endangered: false,
            humanDangerScale: 1 
        },
        {
            name: 'Gray Wolf',
            scientificName: 'Canis lupus',
            subclassification: "Eutheria",
            region: 'North America, Eurasia',
            imageUrl: 'https://example.com/gray-wolf.jpg',
            endangered: false,
            humanDangerScale: 3 
        },
        {
            name: 'African Elephant',
            scientificName: 'Loxodonta africana',
            subclassification: "Eutheria",
            region: 'Sub-Saharan Africa',
            imageUrl: 'https://example.com/african-elephant.jpg',
            endangered: true,
            humanDangerScale: 4 
        },
        {
            name: 'Grizzly Bear',
            scientificName: 'Ursus arctos horribilis',
            subclassification: "Eutheria",
            region: 'North America',
            imageUrl: 'https://example.com/grizzly-bear.jpg',
            endangered: false,
            humanDangerScale: 4
        },
        {
            name: 'Human',
            scientificName: 'Homo sapiens',
            subclassification: "Eutheria",
            region: 'Global',
            imageUrl: 'https://example.com/human.jpg',
            endangered: false,
            humanDangerScale: 5 
        },
        {
            name: 'Red Kangaroo',
            scientificName: 'Macropus rufus',
            subclassification: "Marsupialia",
            region: 'Australia',
            imageUrl: 'https://example.com/red-kangaroo.jpg',
            endangered: false,
            humanDangerScale: 3
        },
        {
            name: 'Tasmanian Devil',
            scientificName: 'Sarcophilus harrisii',
            subclassification: "Marsupialia",
            region: 'Tasmania, Australia',
            imageUrl: 'https://example.com/tasmanian-devil.jpg',
            endangered: true,
            humanDangerScale: 2 
        },
        {
            name: 'Common Wombat',
            scientificName: 'Vombatus ursinus',
            subclassification: "Marsupialia",
            region: 'Australia',
            imageUrl: 'https://example.com/common-wombat.jpg',
            endangered: false,
            humanDangerScale: 1
        },
        {
            name: 'Sugar Glider',
            scientificName: 'Petaurus breviceps',
            subclassification: "Marsupialia",
            region: 'Australia, New Guinea',
            imageUrl: 'https://example.com/sugar-glider.jpg',
            endangered: false,
            humanDangerScale: 0
        },
        {
            name: 'Eastern Quoll',
            scientificName: 'Dasyurus viverrinus',
            subclassification: "Marsupialia",
            region: 'Tasmania, Australia',
            imageUrl: 'https://example.com/eastern-quoll.jpg',
            endangered: true,
            humanDangerScale: 1
        }
    ]
    await Animal.insertMany(animals)
    console.log('created animals!!')
}

const run = async () => {
    await main()
    db.close()
}

run()
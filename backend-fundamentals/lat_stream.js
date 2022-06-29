const fs = require('fs')


const theFile = fs.createWriteStream('output.txt')
theFile.write('Lorem ipsum dol\n')
theFile.write('or sit amet, co\n')
theFile.write('nsectetur adipi\n')
theFile.write('scing elit, sed\n')
theFile.write('do eiusmod tem\n')
theFile.end()

const readFile = fs.createReadStream('./output.txt', { highWaterMark:10 })

readFile.on('readable', () => {
    try {
        process.stdout.write(`${[readFile.read()]}`)
    } catch (error) {
        console.log(error);
    }
})

readFile.on('end', () => {
    console.log('Done');
})
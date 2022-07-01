const fs = require('fs')

fs.readFile('text.txt', 'utf-8', (error, value) => {
    if(error){
        console.log('gagal membaca file');
    }

    console.log(value);
})


const Tiger = require('./Tiger')
const Wolf = require('./Wolf')

const fighting = (wolf, tiger) => {
    if(tiger.strength > wolf.strength){
        tiger.growl()
        return
    }

    if(wolf.strength > tiger.strength){
        wolf.growl()
        return
    }

    console.log('Tiger & Wolf same strength');
}

const tiger = new Tiger()
const wolf = new Wolf()

fighting(wolf, tiger)


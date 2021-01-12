const journalRouter = require('express').Router()
const Journal = require('../models/journaldata')


// Getting all notes
journalRouter.get('/', (request, response, next) => {
    Journal.find({}).then(res => {
        response.status(200).send(res)
        next()
    })
})

//creating a journal
journalRouter.post('/', async (request, response, next) => {
    const { backhairlength, fronthairlength, currentregimen } = request.body
    console.log(request.body)
    
    if (backhairlength && currentregimen ) {   
        const journalCount = await Journal.countDocuments()
        const newJournal = new Journal({
            id: journalCount + 1,
            backhairlength: backhairlength,
            fronthairlength: fronthairlength,
            currentregimen: currentregimen,
        })
    
        newJournal.save()
        .then( res => {
            response.status(201).send({message: 'success!', res})
        })
        .catch(err => {
            console.log(err)
        })
    } else {
        response.status(400).send({message: 'You are missing a field'})
    }
})

module.exports = journalRouter;
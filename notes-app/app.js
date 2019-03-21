
const st = require('./note.js')
const yargs = require('yargs')
const validator = require('validator')
const chalk  = require('chalk')


const test = st();
// console.log(test);
// console.log(validator.isEmail('Prince@yahoo.com'))
// console.log(chalk.green.inverse('Success'))
// console.log(chalk.red('Success'))
// console.log(process.argv);



yargs.command({
    command:'Add',
    describe : 'Adding a note',
    builder :{
        title:{
            describe:'Note tile',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Body of note',
            demandOption: true,
            type:'string'
        }
    },
    handler : (argv)=>{
       console.log('Title is: '+ chalk.red(argv.title) + ' and body is: '+ chalk.blue.inverse(argv.body))
    }
})


yargs.command({
    command:'Remove',
    describe : 'Remove a note',
    handler : ()=>{
       console.log('Note successfully removed')
    }
})

yargs.command({
    command:'List',
    describe : 'List a note',
    handler : ()=>{
       console.log('Note successfully Listed')
    }
})


yargs.command({
    command:'Read',
    describe : 'Read a note',
    handler : ()=>{
       console.log('Note successfully read')
    }
})

//console.log(yargs.argv)
yargs.parse()

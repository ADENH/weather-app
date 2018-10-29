
const yargs = require('yargs');
const adress = require('./adress.js');

const adressOption={
    describe: 'pick the adress',
    demand:true,
    alias:'a',
    string:true
};

const argv= yargs
.command('info','information address',{
adress:adressOption,
})
.help()
.alias('help','h')
.argv;

var command = argv._[0];

if(command=='info'){
    adress.getInfo(argv.adress);
}else{
    console.log('command not recognize');
}


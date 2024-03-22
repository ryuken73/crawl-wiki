const tracer = require('tracer');
const fs = require('fs');

module.exports = () => {

    const create = (options={}) => { 
        const {
            format="{{timestamp}} [{{title}}] {{message}} (in {{file}}:{{line}})",	
            dateformat='yyyy-mm-dd HH:MM:ss.l',
            level='info',
            stackIndex=0,
            logFile='app.log',
        } = options;

        const consoleOpts = {
            ...options,
            transport: [
                function(data){
                    fs.appendFile(logFile, data.output + '\n', function(err){
                        if(err) {
                            throw err;
                        }
                    });
                },
                function(data){
                    console.log(data.output)
                }
            ]
        }
        return tracer.console(consoleOpts); 
    }
    
    const setLevel = logLevel => {
        try{
            tracer.setLevel(logLevel)
        } catch(err){
            console.error(err)
        }
    }


    return {
        create,
        setLevel
    }

}
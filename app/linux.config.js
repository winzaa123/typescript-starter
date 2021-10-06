
module.exports ={
    apps:[{
        name : "myapp",
        script: 'build/index.js',
        cwd: process.cwd(),

        exec_mode: 'cluster',
        instances: 'max',
        autostart: true,

        log_data_format:'YYYY-MM-DD HH:mm:ss',
        max_memory_restart: '192M',

    }]
}


module.exports ={
    app:[{
        name : "myapp",
        script: 'build/index.js',

        exec_mode: 'cluster',
        instances: 'max',
        autostart: true,

        log_data_format:'YYYY-MM-DD HH:mm:ss',
        max_memory_restart: '512M',

    }]
}

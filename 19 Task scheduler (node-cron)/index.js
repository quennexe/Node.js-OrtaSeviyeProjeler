require('dotenv').config();
const cron = require('node-cron');
const logTime = require('./tasks/logTime');

class TaskScheduler {
    constructor(timezone = 'UTC') {
        this.timezone = timezone;
        this.tasks = [];
    }

    addTask(cronExpression, taskFn, options = {}) {
        const scheduled = (options.scheduled !== undefined && options.scheduled !== null) ? options.scheduled : true;


        const task = cron.schedule(
            cronExpression,
            () => {
                taskFn();
            }, {
                scheduled,
                timezone: this.timezone,
            }
        );

        this.tasks.push(task);
        return task;
    }

    startAll() {
        this.tasks.forEach(task => task.start());
        console.log('🕒 Tüm görevler başlatıldı.');
    }

    stopAll() {
        this.tasks.forEach(task => task.stop());
        console.log('🕒 Tüm görevler durduruldu.');
    }
}

// Uygulama başlangıcı

const scheduler = new TaskScheduler(process.env.TZ || 'Europe/Istanbul');

scheduler.addTask('* * * * *', logTime);

scheduler.startAll();

console.log('⏳ Görev zamanlayıcı başlatıldı.');
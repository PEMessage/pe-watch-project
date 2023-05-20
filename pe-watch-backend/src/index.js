
import * as url from 'url';
import {join} from 'path';
import {Worker} from 'worker_threads'
import chalk from 'chalk'

const __filename = url.fileURLToPath(  (new URL('.', import.meta.url)).href )


const videoserver = new Worker(join(__filename,'./videoserver.js'))
videoserver.on('message',()=>{})
console.log(chalk.green("[INFO]: ") + 'Video Server Start ')

const webserver = new Worker(join(__filename,'./webserver.js'))
webserver.on('message',()=>{})
console.log(chalk.green("[INFO]: ") + 'Web Server Start ')


console.log(chalk.green("[INFO]: ") + 'Waiting ')









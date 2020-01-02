require('dotenv').config()
const xml = require('@xmpp/xml')

const config = require('./config')
const KikSocket = require('./kik/client/KikSocket')


const socket = new KikSocket({
    username: process.env.KIK_USERNAME,
    password: process.env.KIK_PASSWORD,
    host: config.host,
    port: config.port,
    domain: config.domain,
    android_id: config.android_id,
    device_id: config.device_id,
    kik_version_info: config.kik_version_info
})


socket.on('online', () => {
    console.log("Successfully logged in as", socket.options.jid);
})

socket.on('stanza', stanza => {
    console.log("Stanza:", stanza.toString());
})
socket.connect()
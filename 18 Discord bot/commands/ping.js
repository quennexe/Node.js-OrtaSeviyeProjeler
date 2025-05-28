module.exports = {
    name: 'ping',
    description: 'Botun yanıt süresini gösterir.',
    execute(message) {
        message.channel.send('🏓 Pong!');
    }
};
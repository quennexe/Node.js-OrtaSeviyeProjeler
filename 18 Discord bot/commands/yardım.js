module.exports = {
    name: 'yardım',
    description: 'Tüm komutları listeler.',
    execute(message) {
        message.channel.send('📜 Komutlar: \n!ping - Ping testi\n!yardım - Yardım menüsü');
    }
};
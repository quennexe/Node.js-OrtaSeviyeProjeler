module.exports = function logTime() {
    const now = new Date();
    console.log(`🕒 Görev çalıştı: ${now.toLocaleString('tr-TR')}`);
};
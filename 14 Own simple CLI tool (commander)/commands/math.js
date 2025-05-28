module.exports = (program) => {
    program
        .command("sum")
        .description("İki sayıyı topla")
        .requiredOption("-a, --a <number>", "Birinci sayı")
        .requiredOption("-b, --b <number>", "İkinci sayı")
        .action((options) => {
            const a = parseFloat(options.a);
            const b = parseFloat(options.b);
            console.log(`🧮 Sonuç: ${a + b}`);
        });
};
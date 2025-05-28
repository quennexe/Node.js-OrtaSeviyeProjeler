module.exports = (program) => {
    program
        .command("greet")
        .description("Bir kişiyi selamla")
        .option("-n, --name <name>", "Selamlanacak kişinin adı")
        .action((options) => {
            const name = options.name || "Ziyaretçi";
            console.log(`👋 Merhaba, ${name}!`);
        });
};
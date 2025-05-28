vodule.exports = function createInvoice(doc, data) {
    doc
        .fontSize(20)
        .text("FATURA", { align: "center" });

    doc.moveDown();

    doc
        .fontSize(14)
        .text(`Müşteri: ${data.name}`)
        .text(`Tarih: ${data.date}`)
        .text(`Fatura No: ${data.invoiceId}`);

    doc.moveDown();

    doc.fontSize(12).text("Ürünler:", { underline: true });

    data.items.forEach((item, i) => {
        doc.text(`${i + 1}. ${item.name} - ${item.qty} adet - ${item.price}₺`);
    });

    doc.moveDown();
    doc.text(`Toplam: ${data.total}₺`, { bold: true });
};
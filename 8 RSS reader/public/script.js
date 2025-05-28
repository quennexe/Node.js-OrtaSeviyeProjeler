async function fetchRSS() {
    const url = document.getElementById("rssUrl").value;
    const feedDiv = document.getElementById("feed");
    feedDiv.innerHTML = "Yükleniyor...";

    try {
        const res = await fetch("/parse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        });

        const items = await res.json();
        if (res.ok) {
            feedDiv.innerHTML = "";
            items.forEach(item => {
                const div = document.createElement("div");
                div.className = "item";
                div.innerHTML = `
          <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
          <p>${item.pubDate}</p>
          <p>${item.contentSnippet || ''}</p>
        `;
                feedDiv.appendChild(div);
            });
        } else {
            feedDiv.innerHTML = "❌ RSS alınamadı: " + items.error;
        }
    } catch (err) {
        feedDiv.innerHTML = "❌ Hata: " + err.message;
    }
}
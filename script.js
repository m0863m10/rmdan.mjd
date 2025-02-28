function shareMessage() {
    const message = "رمضان كريم 2025! 🌙✨
تقبل الله منا ومنكم صالح الأعمال.";
    const url = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}

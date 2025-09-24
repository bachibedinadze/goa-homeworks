// JavaScript - მონეტა
function flipCoin() {
    const result = Math.random() < 0.5 ? "arioli" : "reshka";
    const now = new Date();
    console.log(`Moneta: ${result}, droa: ${now}`);
    return { result, now };
}

// მაგალითი გამოყენების ვებსაიტზე
document.getElementById("flipButton").addEventListener("click", () => {
    const flip = flipCoin();
    alert(`Monetis gamocevani: ${flip.result} | Droa: ${flip.now}`);
});
function endsWithPunctuation(sentence) {
  return sentence.endsWith(".") || sentence.endsWith("?") || sentence.endsWith("!");
}

document.getElementById("checkBtn").addEventListener("click", function() {
  const input = document.getElementById("sentence").value;
  const result = endsWithPunctuation(input);
  document.getElementById("result").textContent =
    result ? "✅ The sentence ends with punctuation."
           : "❌ The sentence does not end with punctuation.";
});
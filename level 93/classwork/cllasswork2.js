function evaluateExpression() {
  let expr = document.getElementById("expression").value;
  let result = eval(expr);
  let intResult = parseInt(result);
  let floatResult = parseFloat(result);

  document.getElementById("output").innerHTML = `
    <p><b>Original expression:</b> ${expr}</p>
    <p><b>Evaluated result:</b> ${result}</p>
    <p><b>Integer conversion:</b> ${intResult}</p>
    <p><b>Float conversion:</b> ${floatResult}</p>
  `;
}
window.onload = function () {
  const datumDiv = document.getElementById("datum");
  if (datumDiv) {
    const danas = new Date();
    const format = danas.toLocaleDateString("sr-RS", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    datumDiv.innerHTML = `<p>Danas je: ${format}</p>`;
  }
};


function highlightText() {
    const textBlock = document.getElementById("textBlock");
    const text = textBlock.innerText;
    const searchInput = document.getElementById("searchInput").value.trim();

    textBlock.innerHTML = text;

    const regex = new RegExp(searchInput, "gi");

    const highlightedText = text.replace(regex, function(match) {
        return '<span style="background-color: yellow;">' + match + '</span>';
    });

    textBlock.innerHTML = highlightedText;
}
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM content to be fully loaded

    // Get references to the HTML elements
    var outputParagraph = document.getElementById('output');
    var changeTextButton = document.getElementById('changeTextBtn');

    // Add a click event listener to the button
    changeTextButton.addEventListener('click', function () {
        // Change the text content of the paragraph
        outputParagraph.textContent = 'Text changed!';
    });
});

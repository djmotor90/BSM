const observeMarketingElement = setInterval(() => {
    const marketingElement = document.querySelector('#sb_email-marketing');
    const dividerElement = document.querySelector('#sb_divider-1'); // Select the divider element

    if (marketingElement) {
        clearInterval(observeMarketingElement);

        // Create the horizontal line
        const horizontalLine = document.createElement('div');
        horizontalLine.style.cssText = `
            width: 100%; /* Full width of the container */
            height: 1px; /* Line thickness */
            background-color: #a1a1a1; /* Line color */
            margin-top: 10px; /* Space above the line */
            margin-bottom: 10px; /* Space below the line */
            box-sizing: border-box; /* Ensure proper spacing */
        `;

        // Append the horizontal line directly below #sb_email-marketing
        marketingElement.insertAdjacentElement('afterend', horizontalLine);

        // Hide the #sb_divider-1 element if it exists
        if (dividerElement) {
            dividerElement.style.display = 'none';
        }
    }
}, 500);

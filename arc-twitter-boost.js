document.addEventListener("DOMContentLoaded", function() {
    // Function to click the Post button and bring up the tweet box
    function openTweetComposer() {
        let postButton = document.querySelector('[data-testid="SideNav_NewTweet_Button"]'); // Select the Post button
        if (postButton) {
            postButton.click();  // Simulate a click to open the tweet box
        } else {
            // Retry if the button is not found immediately
            setTimeout(openTweetComposer, 500);
        }
    }

    // Function to hide all content except for the tweet composer box
    function hideContent() {
        let mainContent = document.querySelector("main");  // Main content area
        if (mainContent) {
            mainContent.style.display = "none";  // Hide the entire main content
        }
    }

    // Function to show all content
    function showContent() {
        let mainContent = document.querySelector("main");
        if (mainContent) {
            mainContent.style.display = "block";  // Show all content
        }
    }

    // Initial content hide
    hideContent();

    // Automatically click the post button to bring up the tweet composer
    openTweetComposer();

    // Listen for tweet button click in the composer
    let tweetButton = document.querySelector('[data-testid="tweetButtonInline"]');
    if (tweetButton) {
        tweetButton.addEventListener("click", function() {
            setTimeout(function() {
                showContent(); // Automatically show content after posting the tweet
            }, 2000);
        });
    } else {
        // Retry to attach event listener if not found
        setTimeout(arguments.callee, 500);
    }

    // Add a keyboard shortcut (e.g., press "t" to toggle the timeline)
    document.addEventListener("keydown", function(event) {
        if (event.key === "t") {  // Press "t" to toggle the timeline visibility
            showContent();  // Show all content when "t" is pressed
        }
    });
});

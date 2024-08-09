# Arc-Twitter-Boost
Arc Boost: Hidden Twitter Timeline Until You Post

Description
This Arc Boost hides your Twitter timeline and all related content until you post a tweet. Once you hit the "Post" button, your timeline will be revealed. It’s a great way to encourage yourself to engage on Twitter without getting distracted by the feed!

How It Works
Initial State: When you load Twitter, the timeline and content are hidden, and only the tweet composer is visible.
Post to Unlock: After you post a tweet, the timeline is automatically revealed. Alternatively, you can manually reveal the timeline by pressing the "t" key on your keyboard.
Installation Instructions
Step 1: Open Arc Browser and Twitter
Make sure you have Arc Browser installed and navigate to Twitter.
Step 2: Create a New Boost
Click the "Boost" icon on the sidebar in Arc.
Select "New Boost" and choose "Custom Boost."
Step 3: Add the Custom JavaScript
In the boost editor, select "JS" to add custom JavaScript.

Paste the following code into the editor:

javascript
Copy code
document.addEventListener("DOMContentLoaded", function() {
    function openTweetComposer() {
        let postButton = document.querySelector('[data-testid="SideNav_NewTweet_Button"]');
        if (postButton) {
            postButton.click();
        } else {
            setTimeout(openTweetComposer, 500);
        }
    }

    function hideContent() {
        let mainContent = document.querySelector("main");
        if (mainContent) {
            mainContent.style.display = "none";
        }
    }

    function showContent() {
        let mainContent = document.querySelector("main");
        if (mainContent) {
            mainContent.style.display = "block";
        }
    }

    hideContent();
    openTweetComposer();

    let tweetButton = document.querySelector('[data-testid="tweetButtonInline"]');
    if (tweetButton) {
        tweetButton.addEventListener("click", function() {
            setTimeout(function() {
                showContent();
            }, 2000);
        });
    } else {
        setTimeout(arguments.callee, 500);
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "t") {
            showContent();
        }
    });
});


Step 4: Save and Activate
Save the boost and ensure it’s active for Twitter.
Step 5: Use the Boost
Load Twitter in Arc, and enjoy the distraction-free tweeting experience. Post a tweet to reveal your timeline, or press "t" to toggle the timeline visibility.
Feedback and Contributions
If you have any feedback or would like to contribute to improving this boost, feel free to reach out or fork the project on GitHub.
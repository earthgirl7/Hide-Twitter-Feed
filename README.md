# Hide Twitter Feed
Arc Boost: Hidden X/Twitter Timeline Until You Post.

### Description
This Arc Boost hides your X timeline and all related content until you post a tweet. Once you hit the "Post" button, your timeline will be revealed. It’s a great way to force yourself into creation mode instead of consumption mode. Uses the Arc browser boost function.

![image](https://github.com/user-attachments/assets/aa3ec0cf-a388-400c-8904-908dc4d90d5a)


### How It Works
Initial State: When you load Twitter, the timeline and content are hidden, and only the tweet composer is visible.

Post to Unlock: After you post a tweet, the timeline is automatically revealed. Alternatively, you can manually reveal the timeline by pressing the "t" key on your keyboard.

### Installation Instructions

Step 1: Open Arc Browser and X. 
Make sure you have Arc Browser installed and navigate to X/Twitter.

Step 2: Create a New Boost. 
Click the "Boost" icon on the sidebar in Arc.

Select "New Boost" and choose "Custom Boost."

Step 3: Add the Custom JavaScript
In the boost editor, select "JS" to add custom JavaScript.

Paste the following code into the editor:

```javascript
document.addEventListener("DOMContentLoaded", function() {
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
t
```

Step 4: Save and Activate
Save the boost and ensure it’s active for Twitter.

Step 5: Use the Boost
Load Twitter in Arc, and enjoy the distraction-free tweeting experience. Post a tweet to reveal your timeline, or press "t" to toggle the timeline visibility.

#### Feedback and Contributions
If you have any feedback or would like to contribute to improving this boost, feel free to reach out or fork the project on GitHub.

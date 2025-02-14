// content.js

// Function to detect the current language of the Facebook page
const detectLanguage = () => {
    const lang = document.documentElement.lang || 'en'; // Default to English if not found
    return lang;
  };
  
  // Function to delete selected messages
  const deleteMessages = (chatIds) => {
    chatIds.forEach((chatId) => {
      const chatElement = document.querySelector(`#${chatId}`);
      
      if (chatElement) {
        const deleteButton = chatElement.querySelector('[aria-label="Delete"]');
        
        if (deleteButton) {
          deleteButton.click(); // Simulate clicking the delete button
          console.log(`Deleting chat with ID: ${chatId}`);
        } else {
          console.error(`Delete button not found for chat ID: ${chatId}`);
        }
      } else {
        console.error(`Chat not found with ID: ${chatId}`);
      }
    });
  };
  
  // Function to archive selected messages
  const archiveMessages = (chatIds) => {
    chatIds.forEach((chatId) => {
      const chatElement = document.querySelector(`#${chatId}`);
      
      if (chatElement) {
        const archiveButton = chatElement.querySelector('[aria-label="Archive"]');
        
        if (archiveButton) {
          archiveButton.click(); // Simulate clicking the archive button
          console.log(`Archiving chat with ID: ${chatId}`);
        } else {
          console.error(`Archive button not found for chat ID: ${chatId}`);
        }
      } else {
        console.error(`Chat not found with ID: ${chatId}`);
      }
    });
  };
  
  // Listen for messages from the background script or popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'deleteMessages') {
      deleteMessages(request.chatIds);
    } else if (request.action === 'archiveMessages') {
      archiveMessages(request.chatIds);
    } else if (request.action === 'getLanguage') {
      const lang = detectLanguage(); // Get the language of the page
      sendResponse({ lang }); // Send the detected language back to the sender
    }
  });
  
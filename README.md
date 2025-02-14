Step 1: Set Up Development Environment

    Install Development Tools:
        Install Node.js (for package management and running scripts).
        Install Bun (for bundling, as mentioned in the project stack).
        Install React and TypeScript for creating the extension's UI and functionality.
        Set up a basic project structure using tools like Create React App or Vite (if using React and TypeScript).
    Install Browser Extension Development Tools:
        Chrome Developer Tools and Firefox Developer Tools for testing.
        Set up a browser extension scaffold (e.g., create a manifest.json file for Chrome and Firefox).

Step 2: Define the Extension's Manifest File

Create a manifest.json file that adheres to Manifest Version 3 (MV3). This file will define important metadata like:

    Permissions (e.g., tabs, storage, etc.)
    Browser compatibility (Chrome and Firefox)
    Background scripts, content scripts, and popup components.

Example of manifest.json for Chrome/Firefox (MV3):

{
  "manifest_version": 3,
  "name": "Delete Facebook Messages",
  "version": "1.0",
  "permissions": [
    "activeTab",
    "storage"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["*://www.facebook.com/messages/*"],
      "js": ["content.js"]
    }
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  }
}

Step 3: Sidebar and Popup Integration
Step 4: Build the Language Adaptability Feature
Step 5: Develop the Core Functionality for Deleting and Archiving
Step 6: Create Error Handling and Status Feedback

Step 7: Test the Extension Locally

    Chrome Testing:
        Load your extension in Chrome via chrome://extensions by enabling Developer Mode and selecting "Load unpacked."
        Test for any issues in functionality, language support, and performance.
    Firefox Testing:
        Load your extension via about:debugging and select "This Firefox."
        Test across various Facebook account languages and ensure it works as expected.

Step 8: Optimize the Performance
Step 9: Publish and Submit to Chrome Web Store & Firefox Add-ons


npm init -y

Install React and TypeScript using the following commands:

npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom

Install Bun (Optional but recommended for faster builds):

    curl -fsSL https://bun.sh/install | bash

Step 2: Set Up the Manifest File



Step 3: Develop the UI (React)
Create the Sidebar and Popup Components

    React Sidebar Component (This appears when the user is on the Facebook Messages page).

    The sidebar will have:
        List of chat threads
        Options to select and delete/archive chats
        Loading indicator during bulk actions

// Sidebar.tsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [selectedChats, setSelectedChats] = useState<string[]>([]);

  const toggleChatSelection = (chatId: string) => {
    setSelectedChats((prev) =>
      prev.includes(chatId) ? prev.filter((id) => id !== chatId) : [...prev, chatId]
    );
  };

  const deleteMessages = () => {
    // Logic to delete selected messages (trigger a content script)
  };

  const archiveMessages = () => {
    // Logic to archive selected messages (trigger a content script)
  };

  return (
    <div className="sidebar">
      <h3>Manage Messages</h3>
      {/* Example of chats */}
      <ul>
        {['Chat1', 'Chat2', 'Chat3'].map((chat, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              onChange={() => toggleChatSelection(`chat-${idx}`)}
            />
            {chat}
          </li>
        ))}
      </ul>
      <button onClick={deleteMessages}>Delete Selected</button>
      <button onClick={archiveMessages}>Archive Selected</button>
    </div>
  );
};

export default Sidebar;

    Popup Component (This appears when the user is not on the Facebook Messages page, prompting the user to navigate there):

// Popup.tsx
import React from 'react';

const Popup = () => {
  const redirectToMessagesPage = () => {
    chrome.tabs.create({ url: 'https://www.facebook.com/messages' });
  };

  return (
    <div>
      <h3>Facebook Messages</h3>
      <button onClick={redirectToMessagesPage}>Go to Facebook Messages</button>
    </div>
  );
};

export default Popup;

Step 4: Implement Language Detection

Since Facebook is used in different languages, we need the extension to adapt to the user's language setting. Here’s how you can detect the language and adjust the UI accordingly.
Language Detection Logic:

    Extract the User's Language from the Page: You can check for the lang attribute in the <html> tag or read specific elements that contain localized text.

const detectLanguage = () => {
  const lang = document.documentElement.lang || 'en'; // Default to English if not found
  return lang;
};

    Use Dynamic Language Mappings: Create a file (e.g., languages.json) to store the translations for different languages.

{
  "en": {
    "delete_button": "Delete",
    "archive_button": "Archive"
  },
  "es": {
    "delete_button": "Eliminar",
    "archive_button": "Archivar"
  }
}


Step 7: Test the Extension

    Load in Chrome:
        Go to chrome://extensions/.
        Enable Developer mode.
        Click Load unpacked and select your project folder.
    Test in Firefox:
        Go to about:debugging.
        Click This Firefox.
        Click Load Temporary Add-on and select your manifest.json.

Test all functionalities: the sidebar, popup, language adaptability, and bulk message deletion.
Step 8: Publish the Extension

After testing and fixing bugs:

    Create Extension Package:
        Zip your extension folder, excluding node_modules and other unnecessary files.
    Publish:
        Chrome Web Store: Follow Chrome’s extension submission guide.
        Firefox Add-ons: Follow Firefox's add-on submission guide.



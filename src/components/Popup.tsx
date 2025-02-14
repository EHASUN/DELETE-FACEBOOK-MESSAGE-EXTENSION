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

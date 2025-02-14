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

import React from "react";

function Message({ message }) {
  return (
    <div className={`chatmessagegpt ${message.user === "gpt" && "chatgpt"}`}>
      <div className="chatmessagecenter">
        <div className={`avatar  ${message.user === "gpt" && "chatgpt"}`}>
          {message.user === "gpt" && <span>&#129302;</span>}
        </div>
        <div className="message">
          <p>{`${message.message}\n`}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;

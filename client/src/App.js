import { useState } from "react";
import Message from "./Message";

function App() {
  const [inputdata, setinputdata] = useState("");
  const [chatlog, setchatlog] = useState([
    {
      user: "gpt",
      message: "hola i'm gpt model based Ai chatbot how can i help you",
    },
    {
      user: "me",
      message: "",
    },
  ]);

  const clearchat = () => {
    setchatlog([]);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let ChatlogNew = [...chatlog, { user: "me", message: `me : ${inputdata}` }];
    setinputdata("");
    setchatlog(ChatlogNew);

    const Messages = ChatlogNew.map((message) => message.message).join("\n");

    const response = await fetch("http://localhost:4000/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: Messages,
      }),
    });

    const data = await response.json();
    setchatlog([...ChatlogNew, { user: "gpt", message: `${data.message}` }]);
  };

  return (
    <div className="App">
      <button onClick={clearchat}>New Chat</button>
      <div className="chatmain">
        <div className="chatlog">
          {chatlog.map((message, index) => {
            return <Message key={index} message={message} />;
          })}
        </div>
        <div className="chatinput">
          <form onSubmit={handlesubmit}>
            <input
              onChange={(e) => setinputdata(e.target.value)}
              placeholder="enter your text"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

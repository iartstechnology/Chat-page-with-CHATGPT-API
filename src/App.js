import {useState} from 'react'
import './styles/App.css';
import'./styles/reset.css'

import { makeRequest } from './api/api'; 
import  {SideMenu}  from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage';


function App() {
    const[ imput, setInput] = useState("")
    const [ chatlog, setChatlog] = useState([{
      user:"gpt",
      message: "Como posso te ajudar hoje?"
    }])
  async function HandleSubmit(e) {
      e.preventDefault()

      let response = await makeRequest ({prompt: input})

      response = response.data.split('\n')
        .map(line => <p>{line}</p>)

        setChatlog([...chatlog, {
          user: 'me',
          message: `${input}`
        },
        {
          user: 'gpt',
          message: response
        }
        ])

        setInput("")
  }

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className='chatbox'>

        <div className='chat-log'>
          {chatlog.map((message, index) =>(
            <ChatMessage
              key={index}
              message={message}
            />
          ))}

        </div>

        <div className='chat-imput-holder'>
          <form onSubmit={HandleSubmit}>
            <input 
            rows = '1'
            className='chat-input-textarea'
            value={input}
            onChange={e =>setInput(e.target.value)}           
            />
          </form>
        </div>

      </section>
    </div>
  );
}

export default App;

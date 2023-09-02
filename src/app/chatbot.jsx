"use client"

import UploadButton from "@/app/upload";
import {useState, useEffect, useRef} from 'react';
import useScrollToBottom from "@/app/useScrollToBottom";

const Chatbot = () => {
    const [userMessages, setUserMessages] = useState([]);
    const [fakeBotResponses, setFakeBotResponses] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const chatContainerRef = useRef(null);

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        const newUserMessage = {
            text: inputMessage,
            type: 'user',
        };
        setUserMessages([...userMessages, newUserMessage]);
        setInputMessage('');

        // Simulate a fake bot response
        const fakeBotResponse = {
            text: 'This is a fake bot response. Replace it with the real response from your API.',
            type: 'bot',
        };

        // Add a delay to simulate bot processing (optional)
        setTimeout(() => {
            setFakeBotResponses([...fakeBotResponses, fakeBotResponse]);
        }, 500); // Adjust the delay as needed


        // Send the user's message to your chatbot backend for processing
        // You'll need to implement this part separately
        // Example API call:
        // fetch('/api/chatbot', {
        //   method: 'POST',
        //   body: JSON.stringify({ message: inputMessage }),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     const botMessage = {
        //       text: data.message,
        //       type: 'bot',
        //     };
        //     setFakeBotResponses([...fakeBotResponses, botMessage]);
        //   })
        //   .catch((error) => {
        //     console.error('Error sending message to chatbot:', error);
        //   });
    };


    useScrollToBottom(chatContainerRef, [userMessages, fakeBotResponses]);
    return (

        <div className="max-h-screen max-w-full mx-auto rounded-lg overflow-auto">

            <div className="py-4 mt-3 mx-4 px-6 flex justify-center  bg-neutral-600 border-4 rounded-full  border-b-amber-600 border-t-blue-900 border-r-cyan-600 border-l-green-600 ">
                <h2 className="  font-2xl text-lg font-bold italic hover:text-red-400 text-white">AI Chatbot</h2>
            </div>


            <div className="py-4 px-6 space-y-4" ref={chatContainerRef}>
                <div className="space-y-2">
                    {userMessages.map((message, index) => (
                        <div
                            key={index}
                            className="p-2 bg-blue-500  text-white rounded-lg  self-end flex "
                        >
                            {message.text}
                        </div>
                    ))}
                    {fakeBotResponses.map((message, index) => (
                        <div
                            key={index}
                            className="p-2 bg-gray-300 text-gray-800 rounded-lg self-start"
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="flex absolute inset-x-0 bottom-0 h-16  m-10 p-3  ">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full focus:outline-none shadow-teal-700 shadow-xl placeholder:text-gray-200 text-sm text-white p-5 pr-16 rounded-xl bg-neutral-400"
                        value={inputMessage}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handleSendMessage}
                        className=" mr-2 ml-1 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-white"
                        >
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                        </svg>
                    </button>
                    <UploadButton />
                </div>
            </div>

        </div>
    );
};

export default Chatbot;

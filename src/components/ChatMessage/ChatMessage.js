import React from "react";
import './ChatMessage.css';
import Avatar from "../../assets/avatar"; // Corrigido 'asstes' para 'assets'

export const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.user === 'gpt' ? "chatgpt" : ""}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' ? "chatgpt" : ""}`}>
                    {message.user === 'gpt' && <Avatar />}
                </div>
                <div className="chat-message-content">
                    {message.message} {/* Assumindo que 'message.message' contém o texto da mensagem */}
                </div>
            </div>
        </div>
    )
}

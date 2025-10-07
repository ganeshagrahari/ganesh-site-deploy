"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  // Debug log
  useEffect(() => {
    console.log("✅ ChatWidget mounted");
  }, []);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          type: "bot",
          content: "Hi! I'm Viag, Ganesh's AI assistant. Ask me anything about his skills, projects, or experience!",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Generate session ID
  useEffect(() => {
    if (!sessionId) {
      setSessionId(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [sessionId]);

  const quickSuggestions = [
    "Tell me about Ganesh's skills",
    "What projects has he built?",
    "How can I contact him?",
    "What's his experience?",
  ];

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      type: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          session_id: sessionId,
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const botMessage = {
        type: "bot",
        content: data.response,
        sources: data.sources,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        type: "bot",
        content: "Sorry, I encountered an error. Please try again or contact Ganesh directly at ganeshagrahari108@gmail.com",
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickSuggestion = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window - Fixed to bottom-right */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '24px',
            width: '380px',
            maxWidth: 'calc(100vw - 48px)',
            height: '550px',
            maxHeight: 'calc(100vh - 120px)',
            backgroundColor: 'rgba(17, 24, 39, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9998,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #9333EA 0%, #2563EB 100%)',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9333EA',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              >
                V
              </div>
              <div>
                <h3 style={{ color: 'white', fontWeight: '600', margin: 0 }}>Viag</h3>
                <p style={{ color: '#E9D5FF', fontSize: '12px', margin: 0 }}>
                  Ganesh's AI Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
              <div
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '16px',
                  backgroundColor: '#020617',
                }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: message.type === "user" ? 'flex-end' : 'flex-start',
                      marginBottom: '16px',
                      animation: 'slideIn 0.3s ease-out',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '85%',
                        padding: '14px 16px',
                        borderRadius: message.type === "user" ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                        background:
                          message.type === "user"
                            ? 'linear-gradient(135deg, #9333EA 0%, #2563EB 100%)'
                            : message.isError
                            ? 'linear-gradient(135deg, #991B1B 0%, #7F1D1D 100%)'
                            : 'rgba(31, 41, 55, 0.8)',
                        color: 'white',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        wordWrap: 'break-word',
                        boxShadow: message.type === "user" 
                          ? '0 4px 12px rgba(147, 51, 234, 0.3)'
                          : '0 2px 8px rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{message.content}</p>
                      <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '8px', marginBottom: 0 }}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px' }}>
                    <div
                      style={{
                        backgroundColor: '#1F2937',
                        borderRadius: '16px',
                        padding: '12px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        animation: 'fadeIn 0.3s ease-in',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          backgroundColor: '#9333EA',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '14px',
                        }}
                      >
                        
                      </div>
                      <div>
                        <p style={{ color: '#E5E7EB', fontSize: '13px', margin: 0, fontWeight: '500' }}>
                          Viag is thinking...
                        </p>
                        <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions */}
              {messages.length === 1 && (
                <div
                  style={{
                    padding: '12px 16px',
                    backgroundColor: '#111827',
                    borderTop: '1px solid #1F2937',
                  }}
                >
                  <p style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '8px', fontWeight: '500' }}>
                    Quick questions:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {quickSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSuggestion(suggestion)}
                        style={{
                          fontSize: '12px',
                          backgroundColor: '#1F2937',
                          color: '#E5E7EB',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#9333EA';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#1F2937';
                          e.currentTarget.style.color = '#E5E7EB';
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  gap: '10px',
                }}
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  disabled={isTyping}
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(31, 41, 55, 0.6)',
                    color: 'white',
                    borderRadius: '14px',
                    padding: '14px 18px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    outline: 'none',
                    fontSize: '14px',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.8)';
                    e.target.style.borderColor = '#9333EA';
                    e.target.style.boxShadow = '0 0 0 3px rgba(147, 51, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isTyping}
                  style={{
                    background: inputMessage.trim() && !isTyping 
                      ? 'linear-gradient(135deg, #9333EA 0%, #2563EB 100%)'
                      : 'rgba(31, 41, 55, 0.6)',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '14px',
                    border: 'none',
                    cursor: inputMessage.trim() && !isTyping ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    minWidth: '48px',
                    boxShadow: inputMessage.trim() && !isTyping 
                      ? '0 4px 12px rgba(147, 51, 234, 0.3)'
                      : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (inputMessage.trim() && !isTyping) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(147, 51, 234, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = inputMessage.trim() && !isTyping 
                      ? '0 4px 12px rgba(147, 51, 234, 0.3)'
                      : 'none';
                  }}
                >
                  <Send size={20} />
                </button>
              </div>
        </div>
      )}

      {/* Chat Button - Fixed to bottom-right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #9333EA 0%, #2563EB 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(147, 51, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(147, 51, 234, 0.3)';
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}

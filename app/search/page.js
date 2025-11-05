"use client";

import { useState, useRef, useEffect } from "react";
import { Send, ArrowLeft, Bot, User as UserIcon, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there, I'm HairiSafe — your ingredient safety guide! 🌿 Scan or upload a product label to see what's really inside.",
    },
    {
      role: "assistant",
      content: "I've analyzed the product image. Here's what I found:",
      ingredients: [
        { name: "Keratin", status: "safe", note: "" },
        { name: "Argan Oil", status: "safe", note: "" },
        { name: "Formaldehyde", status: "caution", note: "Can cause buildup on extensions over time" },
        { name: "Mineral Oil", status: "unsafe", note: "Linked to irritation and potential hair weakening" },
        { name: "Silicones (Dimethicone, Cyclopentasiloxane)", status: "caution", note: "Can cause buildup on extensions over time" },
      ],
    },
    {
      role: "user",
      content: "image",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { role: "user", content: query };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    // Simulate API response
    setTimeout(() => {
      const botMessage = {
        role: "assistant",
        content: `I understand you're asking about "${userMessage.content}". This is a simulated response. In a real application, this would analyze the ingredient and provide safety information.`,
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const userMessage = {
          role: "user",
          content: "image",
          image: reader.result,
        };
        setMessages((prev) => [...prev, userMessage]);
        
        // Simulate AI analysis after image upload
        setTimeout(() => {
          const botMessage = {
            role: "assistant",
            content: "I've analyzed the product image. Here's what I found:",
            ingredients: [
              { name: "Keratin", status: "safe", note: "" },
              { name: "Argan Oil", status: "safe", note: "" },
              { name: "Formaldehyde", status: "caution", note: "Can cause buildup on extensions over time" },
              { name: "Mineral Oil", status: "unsafe", note: "Linked to irritation and potential hair weakening" },
              { name: "Silicones (Dimethicone, Cyclopentasiloxane)", status: "caution", note: "Can cause buildup on extensions over time" },
            ],
          };
          setMessages((prev) => [...prev, botMessage]);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "safe":
        return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "caution":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "unsafe":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "safe":
        return "✅ Safe";
      case "caution":
        return "⚠️ Caution";
      case "unsafe":
        return "❌ Caution";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-4 py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Hairisafe AI Ingredient Analyzer</h1>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto bg-background px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* AI Avatar */}
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <Bot className="h-5 w-5 text-foreground" />
                </div>
              )}

              {/* Message Content */}
              <div
                className={`max-w-[75%] rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                } ${message.role === "user" && message.content === "image" ? "p-0 overflow-hidden" : "px-4 py-3"}`}
              >
                {message.content === "image" && message.image ? (
                  <div className="relative">
                    <img
                      src={message.image}
                      alt="Product label"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center">
                      <UserIcon className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                )}

                {/* Ingredients List */}
                {message.ingredients && (
                  <div className="mt-4 space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full border border-border bg-background text-sm font-medium">
                      Detected Ingredients
                    </div>
                    <ul className="space-y-2 text-sm">
                      {message.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="flex-shrink-0 mt-0.5">
                            {getStatusIcon(ingredient.status)}
                          </span>
                          <span>
                            <span className="font-medium">{ingredient.name}</span> -{" "}
                            <span>{getStatusText(ingredient.status)}</span>
                            {ingredient.note && (
                              <span className="block text-muted-foreground text-xs mt-1">
                                ({ingredient.note})
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              {message.role === "user" && message.content !== "image" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-foreground" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Bot className="h-5 w-5 text-foreground" />
              </div>
              <div className="bg-muted rounded-lg px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Section */}
      <div className="border-t border-border bg-background px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ask about any ingredient..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 h-12 rounded-lg"
              disabled={isLoading}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              disabled={isLoading}
            />
            <label htmlFor="image-upload">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-lg"
                disabled={isLoading}
                asChild
              >
                <span className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </span>
              </Button>
            </label>
            <Button
              type="submit"
              size="icon"
              className="h-12 w-12 rounded-lg bg-foreground text-background hover:bg-foreground/90"
              disabled={isLoading || !query.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

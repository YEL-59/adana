"use client";

import { useState, useRef, useEffect } from "react";
import { Send, ArrowLeft, Bot, User as UserIcon, CheckCircle2, AlertTriangle, XCircle, ShoppingBag } from "lucide-react";
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
      showFeedbackPrompt: true,
    },
    {
      role: "user",
      content: "image",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState({});
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
        setMessages((prev) => {
          const updated = [...prev, userMessage];
          
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
              showFeedbackPrompt: true,
            };
            setMessages((prev) => [...prev, botMessage]);
          }, 1500);
          
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFeedback = (isHairSafe, messageIndex) => {
    // Mark feedback as given for this message
    setFeedbackGiven((prev) => ({ ...prev, [messageIndex]: true }));

    // Add user feedback message
    const feedbackMessage = {
      role: "user",
      content: isHairSafe ? "Yes" : "No",
    };
    setMessages((prev) => [...prev, feedbackMessage]);

    // Remove feedback prompt from the message
    setMessages((prev) =>
      prev.map((msg, idx) =>
        idx === messageIndex && msg.showFeedbackPrompt
          ? { ...msg, showFeedbackPrompt: false }
          : msg
      )
    );

    setIsLoading(true);

    // Simulate API response based on feedback
    setTimeout(() => {
      let recommendationMessage;
      
      if (isHairSafe) {
        // If yes, show other brand recommendations in that category
        recommendationMessage = {
          role: "assistant",
          content: "Great! Since this product is hair safe, here are other recommended brands in this category:",
          recommendations: [
            { name: "Brand A - Natural Hair Care", price: "$24.99", rating: 4.8, safe: true },
            { name: "Brand B - Organic Solutions", price: "$29.99", rating: 4.9, safe: true },
            { name: "Brand C - Premium Hair Care", price: "$34.99", rating: 4.7, safe: true },
          ],
        };
      } else {
        // If no, show safe alternatives for purchase
        recommendationMessage = {
          role: "assistant",
          content: "I understand. Here are safe alternatives that are safe to use for our customers:",
          recommendations: [
            { name: "Safe Alternative 1 - Gentle Formula", price: "$19.99", rating: 4.9, safe: true, inStock: true },
            { name: "Safe Alternative 2 - Natural Blend", price: "$22.99", rating: 4.8, safe: true, inStock: true },
            { name: "Safe Alternative 3 - Organic Choice", price: "$27.99", rating: 5.0, safe: true, inStock: true },
          ],
        };
      }

      setMessages((prev) => [...prev, recommendationMessage]);

      // Generate final summary after a short delay
      setTimeout(() => {
        const summaryMessage = {
          role: "assistant",
          content: `## Final Summary\n\n**Product Analysis:** The product contains both safe and potentially problematic ingredients.\n\n**Your Feedback:** ${isHairSafe ? "Yes - Product is hair safe" : "No - Product is not hair safe"}\n\n**Recommendations:** ${isHairSafe ? "Other brand options in this category have been provided for your consideration." : "Safe alternative products have been listed for purchase."}\n\nThank you for your feedback! This helps us better serve our customers.`,
          isSummary: true,
        };
        setMessages((prev) => [...prev, summaryMessage]);
        setIsLoading(false);
      }, 1000);
    }, 1000);
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
      <header className="bg-background border-b border-border px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <h1 className="text-base sm:text-lg font-semibold truncate">Hairisafe AI Ingredient Analyzer</h1>
        </div>
      </header>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto bg-background px-3 sm:px-4 py-4 sm:py-6">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
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
                className={`max-w-[85%] sm:max-w-[75%] rounded-lg ${
                  message.role === "user"
                    ? "bg-[#5C4033] text-white"
                    : "bg-muted text-foreground"
                } ${message.role === "user" && message.content === "image" ? "p-0 overflow-hidden" : "px-3 sm:px-4 py-2 sm:py-3"}`}
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

                {/* Feedback Prompt */}
                {message.showFeedbackPrompt && !feedbackGiven[index] && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium mb-3">Is this product hair safe?</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleFeedback(true, index)}
                        size="sm"
                        className="bg-[#5C4033] hover:bg-[#4a3328] text-white"
                      >
                        Yes
                      </Button>
                      <Button
                        onClick={() => handleFeedback(false, index)}
                        size="sm"
                        variant="outline"
                        className="border-[#5C4033] text-[#5C4033] hover:bg-[#5C4033]/10"
                      >
                        No
                      </Button>
                    </div>
                  </div>
                )}

                {/* Recommendations */}
                {message.recommendations && (
                  <div className="mt-4 space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full border border-border bg-background text-sm font-medium">
                      {message.content.includes("safe alternatives") ? "Safe Alternatives" : "Recommended Brands"}
                    </div>
                    <div className="grid gap-3">
                      {message.recommendations.map((rec, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <ShoppingBag className="h-4 w-4 text-primary" />
                              <span className="font-medium text-sm">{rec.name}</span>
                              {rec.safe && (
                                <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                                  Safe
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                              <span>{rec.price}</span>
                              <span>⭐ {rec.rating}</span>
                              {rec.inStock && (
                                <span className="text-green-600">In Stock</span>
                              )}
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="ml-2">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Summary */}
                {message.isSummary && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="prose prose-sm max-w-none">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
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
      <div className="border-t border-border bg-background px-3 sm:px-4 py-3 sm:py-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ask about any ingredient..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 h-11 sm:h-12 rounded-lg text-sm sm:text-base"
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
                className="h-11 w-11 sm:h-12 sm:w-12 rounded-lg"
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
              className="h-12 w-12 rounded-lg bg-[#5C4033] text-white hover:bg-[#4a3328] transition-all duration-200"
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

"use client";

import { useState } from "react";
import { Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => crypto.randomUUID()); // ✅ dentro do componente

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Olá 👋 Sou a atendente virtual do Seu Padilha. Posso ajudar com cardápio, reservas, horários e pedidos.",
    },
  ]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: sessionId, // ✅ enviando sessionId para o n8n
        }),
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("DATA:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.raw ||
            data.response ||
            data.reply ||
            data.output ||   
            
            "Desculpe, não consegui responder.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Ocorreu um erro ao conectar com a atendente virtual.",
        },
      ]);
    }

    setLoading(false);
  }

  async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <section id="chat" className="bg-black py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-400 uppercase tracking-[3px] text-sm">
            Demonstração IA
          </span>
          <h2 className="text-white text-5xl font-bold mt-3">
            Teste nossa atendente virtual
          </h2>
          <p className="text-zinc-400 mt-4">
            Faça perguntas sobre cardápio, reservas, localização ou pedidos.
          </p>
        </div>

        <div className="bg-zinc-950 border border-amber-500/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center gap-3">
            <div
                className="
                w-12
                h-12
                rounded-full
                overflow-hidden
                border
                border-amber-500
                "
              >
                <img
                  src="/logo.png"
                  alt="Seu Padilha"
                  className="w-full h-full object-cover"
                />
              </div>
            <div>
              <h3 className="text-white font-semibold">Atendente Seu Padilha</h3>
              <span className="text-green-500 text-sm">Online agora</span>
            </div>
          </div>

          {/* Conversa */}
          <div className="h-[450px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {msg.role === "assistant" ? <Bot size={16} /> : <User size={16} />}
                    <span className="text-xs opacity-70">
                      {msg.role === "assistant" ? "IA" : "Você"}
                    </span>
                  </div>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="bg-zinc-800 text-white rounded-2xl p-4 w-fit">
                Digitando...
              </div>
            )}
          </div>

          {/* Respostas rápidas */}
          <div className="px-4 pb-4 flex flex-wrap gap-2">
            <button
              onClick={() => setMessage("Quero fazer um pedido")}
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded-lg text-sm"
            >
              🍔 Fazer Pedido
            </button>
            <button
              onClick={() => setMessage("Quero reservar uma mesa")}
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded-lg text-sm"
            >
              📅 Reservar Mesa
            </button>
            <button
              onClick={() => setMessage("Quais são os horários?")}
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded-lg text-sm"
            >
              🕒 Horários
            </button>
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4 flex gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-zinc-900 text-white rounded-xl px-4 py-3 outline-none border border-zinc-700 focus:border-amber-500"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 rounded-xl text-white hover:scale-105 transition disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://royaldragonfly-n8n.cloudfy.live/webhook/restaurante-padilha",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    console.log("N8N RAW:", text);

    return NextResponse.json({
      raw: text,
    });
  } catch (error) {
    console.error("ERRO:", error);

    return NextResponse.json(
      { error: "Erro ao conectar ao n8n" },
      { status: 500 }
    );
  }
}
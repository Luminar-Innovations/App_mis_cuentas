// MisCuentas — WhatsApp Webhook (Fase 2)
// Este archivo es un placeholder. Cuando conectemos WhatsApp,
// aquí va la lógica para recibir y procesar mensajes.

export default function handler(req, res) {
  // GET = verificación de Meta
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    
    // TODO: Configurar VERIFY_TOKEN en variables de entorno de Vercel
    if (mode === "subscribe" && token === process.env.WA_VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    }
    return res.status(403).send("Forbidden");
  }

  // POST = mensajes entrantes
  if (req.method === "POST") {
    // TODO: Fase 2 - Procesar mensajes de WhatsApp
    // 1. Parsear el mensaje
    // 2. Usar el mismo parser que el frontend
    // 3. Escribir en Supabase
    // 4. Responder por WhatsApp
    return res.status(200).json({ status: "ok" });
  }

  return res.status(405).send("Method not allowed");
}

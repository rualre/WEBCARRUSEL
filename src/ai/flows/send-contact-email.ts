'use server';
/**
 * @fileOverview Flow para enviar un correo electrónico desde el formulario de contacto.
 *
 * - sendContactEmail: Una función que procesa y envía el correo electrónico.
 * - SendContactEmailInput: El tipo de entrada para la función sendContactEmail.
 * - SendContactEmailOutput: El tipo de retorno para la función sendContactEmail.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const SendContactEmailInputSchema = z.object({
  name: z.string().describe('El nombre de la persona que envía el mensaje.'),
  email: z.string().email().describe('El correo electrónico de la persona.'),
  message: z.string().describe('El contenido del mensaje.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

export const SendContactEmailOutputSchema = z.object({
  success: z.boolean().describe('Indica si el correo fue enviado exitosamente.'),
  error: z.string().optional().describe('Mensaje de error si el envío falló.'),
});
export type SendContactEmailOutput = z.infer<typeof SendContactEmailOutputSchema>;


const emailSenderTool = ai.defineTool(
  {
    name: 'emailSender',
    description: 'Envía un correo electrónico al destinatario especificado.',
    inputSchema: z.object({
      to: z.string().email().describe("La dirección de correo del destinatario."),
      subject: z.string().describe("El asunto del correo."),
      body: z.string().describe("El cuerpo del correo en formato HTML."),
    }),
    outputSchema: z.void(),
  },
  async (input) => {
    // En un entorno de producción real, aquí se integraría un servicio
    // de envío de correos como SendGrid, Mailgun, o Firebase Extensions.
    // Para esta demostración, simularemos el envío y lo mostraremos en la consola.
    console.log('==================== EMAIL SIMULATOR ====================');
    console.log(`Sending email to: ${input.to}`);
    console.log(`Subject: ${input.subject}`);
    console.log('----------------------- Body --------------------------');
    console.log(input.body.replace(/<br\s*\/?>/gi, '\n'));
    console.log('=======================================================');
  }
);


const prompt = ai.definePrompt({
  name: 'sendContactEmailPrompt',
  input: { schema: SendContactEmailInputSchema },
  tools: [emailSenderTool],
  prompt: `Una persona ha enviado un mensaje desde el formulario de contacto de la página web del Centro Educativo Carrusel.

  Datos del remitente:
  - Nombre: {{{name}}}
  - Correo: {{{email}}}
  
  Mensaje:
  {{{message}}}
  
  Tu tarea es utilizar la herramienta 'emailSender' para enviar este mensaje al correo de la institución: 'cecarrusel01@gmail.com'. 
  El asunto del correo debe ser "Nuevo Mensaje de Contacto de: {{{name}}}".
  El cuerpo del correo debe estar en formato HTML y contener toda la información del remitente y su mensaje de forma clara y organizada.`,
});

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: SendContactEmailOutputSchema,
  },
  async (input) => {
    try {
      await prompt(input);
      return { success: true };
    } catch (e: any) {
      console.error("Flow Error:", e);
      return { success: false, error: e.message || 'Error al procesar el envío.' };
    }
  }
);

export async function sendContactEmail(input: SendContactEmailInput): Promise<SendContactEmailOutput> {
  return sendContactEmailFlow(input);
}

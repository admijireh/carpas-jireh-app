import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { inputData } from "./types";
// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const formData: inputData = await request.json();
    const { nombre, email, tipoCarpa, telefono, dataConsent } = formData;

    console.log("sendind emails");

    // Email to customer
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      to: email,
      subject: "Confirmación de solicitud - Carpas Jireh",
      html: `
        <h1>Gracias por contactarnos, ${nombre}!</h1>
        <p>Hemos recibido tu solicitud para una ${tipoCarpa}.</p>
        <p>Nuestro equipo se pondrá en contacto contigo pronto.</p>
        <p>Datos de tu solicitud:</p>
        <ul>
          <li>Teléfono: <a href="tel:${telefono}">${telefono}</a></li>
          <li>Tipo de Carpa: ${tipoCarpa}</li>
        </ul>
      `,
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      to: process.env.NEXT_PUBLIC_SMTP_USER,
      subject: "Nueva solicitud de carpa",
      html: `
        <h1>Nueva solicitud de cliente</h1>
        <p>Detalles del cliente:</p>
        <ul>
          <li>Nombre: ${nombre}</li>
          <li>Email: <a href="mailto:${email}">${email}</a> (${email})</li>
          <li>Teléfono: <a href="tel:${telefono}">${telefono}</a> | <a href="https://wa.me/${telefono
        .toString()
        .replace(/\D/g, "")}" target="_blank">WhatsApp</a> (${telefono})</li>
          <li>Tipo de Carpa: ${tipoCarpa}</li>
          <li>Aceptó tratamiento de datos: ${dataConsent ? "Sí" : "No"}</li>
        </ul>
      `,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

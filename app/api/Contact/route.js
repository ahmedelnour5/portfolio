import Contact from "@/app/(models)/Contact";
import { NextResponse, NextRequest } from "next/server";

export async function POST(NextRequest) {
  const { firstName, lastName, email, message } = await NextRequest.json();
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { message: "Please submit all fields" },
      { status: 500 }
    );
  }

  try {
    const mail = await Contact.create({
      firstName,
      lastName,
      email,
      message,
    });

    if (mail) {
      return NextResponse.json(
        { message: `Thank you ${firstName}, I'll get back to you shortly` },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

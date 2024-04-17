import Experience from "@/app/(models)/Experience";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const experiences = await Experience.find();
    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

import Skills from "@/app/(models)/Skills";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const skills = await Skills.find();
    return NextResponse.json({ skills }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

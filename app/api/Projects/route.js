import Projects from "@/app/projects/page";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

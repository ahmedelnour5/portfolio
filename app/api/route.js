import Experience from "../(models)/Experience";
import Project from "../(models)/Project";
import Skills from "../(models)/Skills";
import { NextResponse } from "next/server";

export async function getExperiences() {
  try {
    const experiences = await Experience.find();
    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function getProjects() {
  try {
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function getSkills() {
  try {
    const skills = await Skills.find();
    return NextResponse.json({ skills }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

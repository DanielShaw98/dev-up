import { getServerSession } from "next-auth/next";
import authOptions from "../../api/auth/authOptions";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

interface ProjectData {
  title: string;
  description: string;
  name?: string;
  styles?: string;
  tools?: string;
}

export async function POST(req: NextRequest) {
  try {
    // Retrieve session information
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Parse the JSON body
    const { title, description, name, styles, tools }: ProjectData = await req.json();

    // Validate the required fields
    if (!title || !description) {
      return NextResponse.json({ message: 'Title and description are required' }, { status: 400 });
    }

    // Create the project in the database
    const project = await prisma.project.create({
      data: {
        title,
        description,
        name,
        styles,
        tools,
        authorId: Number(session.user.id), // Convert the string to a number
      },
    });

    // Return the created project
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    // TypeScript check for error
    const errorMessage = (error as Error).message || 'Unknown error occurred';

    console.error('Failed to add project:', errorMessage);
    return NextResponse.json({ message: 'Failed to add project', error: errorMessage }, { status: 500 });
  }
}

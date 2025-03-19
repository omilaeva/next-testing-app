import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { tickets } from "@/db/schema";

export async function GET() {
  const result = await db.select().from(tickets);
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const body = await request.json();


  const newTicket = {
    title: body.title,
    requestType: body.requestType,
    priority: body.priority,
    bestTime: body.bestTime,
    accessInstructions: body.accessInstructions,
    description: body.description,
  };
  console.log(newTicket);
  const result = await db.insert(tickets).values(newTicket).returning();
  return NextResponse.json(result);
}
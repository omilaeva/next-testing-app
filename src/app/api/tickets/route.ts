import { NextResponse } from "next/server";
import { db } from "@/db/db";
import { tickets } from "@/db/schema";
import { z } from 'zod'
 
const schema = z.object({
    title: z.string().min(1).max(255),
    requestType: z.string().min(1).max(255),
    priority: z.string().min(1).max(255),
    bestTime: z.string(),
    accessInstructions: z.string(),
    description: z.string().min(1).max(500),
    //userId: z.string().uuid(),
  })

export async function GET() {
  const result = await db.select().from(tickets);
  return NextResponse.json(result);
}


export async function POST(request: Request) {
  
  const body = await request.json();
  const newTicket ={...body};
  try{ schema.parse(body);}
  catch(error: unknown){
    
    const errorMessage = error instanceof z.ZodError ? error.errors : "Something went wrong";
    console.log(errorMessage);
    return NextResponse.json({ errorMessage }, { status: 400 });
  }
  
  
  try{
  const result = await db.insert(tickets).values(newTicket).returning();
  return NextResponse.json(result);}
  catch(error: unknown){
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: errorMessage }, { status: 400 });

  }
  
}
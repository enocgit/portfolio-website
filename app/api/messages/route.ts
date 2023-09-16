import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST (request: NextRequest) {
    const body = await request.json()
    try {
        const message = await prisma.message.create({
            data: body
        })
        return new NextResponse(JSON.stringify(message), {status: 201})
    } catch (error) {
        return new NextResponse(JSON.stringify({error}))
    }
}
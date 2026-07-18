import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ status: 'error', message: 'Name, email and message are required.' }, { status: 400 });
    }
    const record = { name, email, subject: subject || '', message, at: new Date().toISOString() };
    try {
      const dir = path.join(process.cwd(), '.data');
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(path.join(dir, 'inquiries.json'), JSON.stringify(record) + '\n');
    } catch {
      /* non-fatal on read-only FS */
    }
    return NextResponse.json({ status: 'ok', message: 'Thank you — we will be in touch soon.' });
  } catch {
    return NextResponse.json({ status: 'error', message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

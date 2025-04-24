import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://script.google.com/macros/s/AKfycbzJyc-HcTsQu5pQU6k4QRXiDr4Tnkbtrb40qIwckdgfSdRLKJJbn-0d_rr8ae7ms6Qpdg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Google Script yanıt vermedi');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form gönderme hatası:', error);
    return NextResponse.json(
      { error: 'Form gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 
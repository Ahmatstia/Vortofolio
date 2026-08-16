import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Harap isi semua kolom formulir.' },
        { status: 400 }
      );
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'c9716441-d1ff-4bf6-8ef1-58f6811c0ddd';

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('subject', `Pesan baru dari Portofolio - ${name}`);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan pada server. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let body: { name?: string; email?: string; message?: string } = {};
    
    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      body = {
        name: formData.get('name')?.toString(),
        email: formData.get('email')?.toString(),
        message: formData.get('message')?.toString(),
      };
    }

    const { name, email, message } = body;

    // Direct Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes (name, email, message)' },
        { status: 400 }
      );
    }

    // Process contact submission (e.g., dispatch notification, database store)
    console.log(`[Contact API] Mensaje recibido de ${name} (${email}): ${message}`);

    // If submitted via standard form submit (non-fetch/AJAX), redirect back with status query
    if (contentType.includes('application/x-www-form-urlencoded')) {
      return NextResponse.redirect(new URL('/?status=success#contact', request.url), 303);
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

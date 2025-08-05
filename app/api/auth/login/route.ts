import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, company_id } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Call your backend API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

    if (!apiUrl) {
      return NextResponse.json(
        { message: 'API configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        email,
        password,
        company_id: company_id || process.env.NEXT_PUBLIC_COMPANY_ID || '1'
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Return success response
      return NextResponse.json({
        success: true,
        token: data.token,
        user: data.user,
        message: 'Login successful'
      });
    } else {
      // Return error from backend
      return NextResponse.json(
        { 
          success: false,
          message: data.message || 'Login failed' 
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
} 
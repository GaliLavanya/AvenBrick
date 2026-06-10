import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, phone, email, company, service, location, message, formType } = await request.json()

    // Validate required fields (at minimum name and contact info should exist)
    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Required fields (Name, and Phone or Email) are missing.' },
        { status: 400 }
      )
    }

    const sheetDbUrl = process.env.SHEETDB_API_URL

    if (!sheetDbUrl) {
      console.warn('SHEETDB_API_URL environment variable is not defined.')
      return NextResponse.json(
        { error: 'SheetDB configuration is missing on the server.' },
        { status: 500 }
      )
    }

    // Format local date/time for the Google Sheet timestamp column
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const payload = {
      data: [
        {
          ID: 'INCREMENT',
          Date: timestamp,
          Form_Type: formType || 'Contact Us',
          Name: name,
          Company: company || 'N/A',
          Phone: phone || 'N/A',
          Email: email || 'N/A',
          Service: service || 'N/A',
          Location: location || 'N/A',
          Message: message || 'N/A',
        },
      ],
    }

    const response = await fetch(sheetDbUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('SheetDB error response:', errorText)
      return NextResponse.json(
        { error: 'Failed to save data to Google Sheet.' },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json({ success: true, result })
  } catch (error: any) {
    console.log('Contact form submission error:', error)
    return NextResponse.json(
      { error: error?.message || 'An internal server error occurred.' },
      { status: 500 }
    )
  }
}

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

async function getSpreadsheet() {
  try {
    // Verify environment variables exist
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 
        !process.env.GOOGLE_PRIVATE_KEY || 
        !process.env.GOOGLE_SHEET_ID) {
      throw new Error('Missing Google Sheets configuration');
    }

    // Create auth client
    const auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file'
      ],
    });

    // Initialize spreadsheet
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
    await doc.loadInfo();
    return doc;
    
  } catch (error) {
    console.error('Auth Error Details:', {
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      keyPresent: !!process.env.GOOGLE_PRIVATE_KEY,
      sheetId: process.env.GOOGLE_SHEET_ID,
      error
    });
    throw new Error('Google Sheets authentication failed');
  }
}

export async function POST(request: NextRequest) {
  console.log('API route called');
  
  try {
    // Parse the form data from the request
    const formData = await request.json();
    console.log('Form data received:', formData);
    
    // Get the spreadsheet
    const doc = await getSpreadsheet();
    console.log('Spreadsheet connected');
    
    // Define the headers
    const headers = [
      'Company Name',
      'Contact Person',
      'Email',
      'Phone Number',
      'Business Location',
      'Number of Employees',
      'Estimated Cups Per Month',
      'Preferred Plan',
      'Additional Information',
      'Submission Date'
    ];
    
    // Get or create the sheet
    let sheet = doc.sheetsByTitle['Form Responses'];
    if (!sheet) {
      console.log('Creating new "Form Responses" sheet');
      sheet = await doc.addSheet({ 
        title: 'Form Responses',
        headerValues: headers 
      });
    } else {
      console.log('Using existing "Form Responses" sheet');
      
      // Ensure headers exist
      const rows = await sheet.getRows();
      if (rows.length === 0 || !rows[0].get('Company Name')) {
        console.log('Adding missing headers');
        await sheet.setHeaderRow(headers);
      }
    }
    
    // Add new row
    const newRow = await sheet.addRow({
      'Company Name': formData.company,
      'Contact Person': formData.contact,
      'Email': formData.email,
      'Phone Number': formData.phone,
      'Business Location': formData.location,
      'Number of Employees': formData.employees,
      'Estimated Cups Per Month': formData.cups,
      'Preferred Plan': formData.preferredPlan,
      'Additional Information': formData.message,
      'Submission Date': new Date().toISOString(),
    });
    
    console.log('Form submission successful');
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form',
        ...(process.env.NODE_ENV === 'development' && {
          error: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : undefined
        })
      },
      { status: 500 }
    );
  }
}
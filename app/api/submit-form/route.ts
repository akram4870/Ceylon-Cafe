import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

// Function to initialize and authenticate with the Google Sheet
async function getSpreadsheet() {
  try {
    // Create JWT client using service account credentials
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix escaped newlines
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
    await doc.loadInfo(); // Load document properties and worksheets
    return doc;
  } catch (error) {
    console.error('Error initializing spreadsheet:', error);
    throw error;
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
    
    // Define the headers we'll use
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
    
    // Look for the "Form Responses" sheet, or create it if it doesn't exist
    let sheet = doc.sheetsByTitle['Form Responses'];
    if (!sheet) {
      console.log('Sheet "Form Responses" not found, creating it');
      sheet = await doc.addSheet({ 
        title: 'Form Responses',
        headerValues: headers 
      });
    } else {
      console.log('Found existing "Form Responses" sheet');
      
      // Check if the sheet has headers, if not add them
      const rows = await sheet.getRows();
      if (rows.length === 0 || !rows[0].get('Company Name')) {
        console.log('Adding headers to sheet');
        await sheet.setHeaderRow(headers);
      }
    }
    
    // Add a new row to the sheet with the form data
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
    
    console.log('Row added to sheet:', newRow);
    
    // Always return proper JSON response
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Make sure we return a proper JSON response even in case of errors
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to submit form',
        errorDetails: JSON.stringify(error)
      },
      { status: 500 }
    );
  }
}
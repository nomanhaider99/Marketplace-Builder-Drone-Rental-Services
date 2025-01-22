import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const {
            fullName,
            address,
            postalCode,
            locality,
            state,
            country,
            phoneNumber,
            // packages TODO: to add packages as well
        } = await request.json();

        if (!fullName || !address || !postalCode || !locality || !state || !country || !phoneNumber) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
          }          

        const data = {
            "shipment": {
              "service_code": "ups_ground",
              "ship_to": {
                "name": fullName,
                "phone": phoneNumber,
                "address_line1": address,
                "city_locality": locality,
                "state_province": state,
                "postal_code": postalCode,
                "country_code": country,
                "address_residential_indicator": "yes"
              },
              "ship_from": {
                "name": "John Doe",
                "company_name": "Example Corp",
                "phone": "+1 555-555-5555",
                "address_line1": "4301 Bull Creek Rd",
                "city_locality": "Austin",
                "state_province": "TX",
                "postal_code": "78731",
                "country_code": "US",
                "address_residential_indicator": "no"
              },
              "packages": [
                {
                  "weight": {
                    "value": 20,
                    "unit": "ounce"
                  },
                  "dimensions": {
                    "height": 6,
                    "width": 12,
                    "length": 24,
                    "unit": "inch"
                  }
                }
              ]
            }
          }
        const response = await fetch('https://api.shipengine.com/v1/labels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': 'TEST_Z6uXMcHRqj7O4r+xNaBhszTbOTyHbRurU1Owm7JNx9Y'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Failed To Create Label for this Order!`, status: response.status },
                { status: response.status }
              );              
        }

        const result = await response.json();

        return NextResponse.json(result);
    } catch (error: any) {
        return NextResponse.json(
            { error: 'An error occurred while processing your request', details: error.message },
            { status: 500 }
          );          
    }
}
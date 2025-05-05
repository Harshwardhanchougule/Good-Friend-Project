# API Documentation

## Good Friend Mortgage Website

This document provides detailed information about the API endpoints available in the Good Friend Mortgage website application.

## API Overview

The API is built using Express.js and provides endpoints for handling form submissions and retrieving data. All API routes are prefixed with `/api`.

## Authentication

Currently, the API does not implement authentication as it's primarily used for public-facing form submissions. If authentication is added in the future, this section will be updated with the authentication mechanism and requirements.

## Base URL

When running locally, the base URL is:
```
http://localhost:5000/api
```

When deployed, the base URL will depend on your deployment domain:
```
https://your-domain.com/api
```

## API Endpoints

### Contact Form Submission

**Endpoint:** `POST /api/contact`

**Description:** Submits a contact form with user information and message.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-123-4567",
  "service": "purchase",
  "message": "I'm interested in learning more about mortgage options for a new home purchase.",
  "consent": true
}
```

**Parameters:**
- `firstName` (string, required): The user's first name
- `lastName` (string, required): The user's last name
- `email` (string, required): The user's email address
- `phone` (string, required): The user's phone number
- `service` (string, optional): The service of interest (purchase, refinance, hecm, other)
- `message` (string, required): The user's message or inquiry
- `consent` (boolean, required): Whether the user has consented to being contacted

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

**Error Responses:**

- **400 Bad Request** - If the request body is missing required fields or has invalid data
  ```json
  {
    "success": false,
    "error": "Missing required fields"
  }
  ```

- **500 Internal Server Error** - If an unexpected error occurs on the server
  ```json
  {
    "success": false,
    "error": "Internal server error"
  }
  ```

### Mortgage Calculator (Future Implementation)

**Endpoint:** `POST /api/calculate/mortgage`

**Description:** Calculates mortgage payments based on input parameters.

**Request Body:**
```json
{
  "loanAmount": 300000,
  "interestRate": 4.5,
  "loanTerm": 30,
  "downPayment": 60000,
  "propertyTax": 2400,
  "insurance": 1200
}
```

**Parameters:**
- `loanAmount` (number, required): The principal loan amount
- `interestRate` (number, required): The annual interest rate (percentage)
- `loanTerm` (number, required): The loan term in years
- `downPayment` (number, optional): The down payment amount
- `propertyTax` (number, optional): Annual property tax amount
- `insurance` (number, optional): Annual insurance amount

**Response:**
```json
{
  "monthlyPayment": 1520.06,
  "principalAndInterest": 1216.04,
  "propertyTax": 200,
  "insurance": 100,
  "totalPayment": 547221.6,
  "totalInterest": 187774.4
}
```

**Error Responses:**

- **400 Bad Request** - If the request body is missing required fields or has invalid data
  ```json
  {
    "success": false,
    "error": "Invalid loan parameters"
  }
  ```

## Data Models

### Contact Form Data

```typescript
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}
```

### Mortgage Calculation Data

```typescript
interface MortgageCalculationData {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  downPayment?: number;
  propertyTax?: number;
  insurance?: number;
}
```

### Mortgage Calculation Result

```typescript
interface MortgageCalculationResult {
  monthlyPayment: number;
  principalAndInterest: number;
  propertyTax: number;
  insurance: number;
  totalPayment: number;
  totalInterest: number;
}
```

## Using the API with JavaScript

### Example: Submitting the Contact Form

```javascript
async function submitContactForm(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'An error occurred');
    }
    
    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// Usage example
const formData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '555-123-4567',
  service: 'purchase',
  message: 'I\'m interested in learning more about mortgage options.',
  consent: true
};

submitContactForm(formData)
  .then(result => {
    console.log('Form submitted successfully:', result);
  })
  .catch(error => {
    console.error('Form submission failed:', error);
  });
```

## Error Handling

The API uses standard HTTP status codes to indicate success or failure of requests:

- **200 OK** - The request was successful
- **400 Bad Request** - The request was invalid or missing required parameters
- **404 Not Found** - The requested resource was not found
- **500 Internal Server Error** - An unexpected error occurred on the server

Error responses include a JSON object with `success: false` and an `error` message explaining the issue.

## Rate Limiting

Currently, the API does not implement rate limiting. If rate limiting is added in the future, this section will be updated with the rate limits and throttling behavior.

## CORS Configuration

Cross-Origin Resource Sharing (CORS) is configured to allow requests from the following origins:

- When running locally: `http://localhost:5000`
- When deployed: The domain of the deployed application

## Future API Enhancements

The following enhancements are planned for future releases:

1. **Authentication**: Adding secure authentication for protected endpoints
2. **Rate Limiting**: Implementing rate limiting to prevent abuse
3. **Additional Calculators**: Adding endpoints for other financial calculations
4. **Data Persistence**: Storing contact form submissions and other data

## API Versioning

Currently, the API does not use versioning. When versioning is implemented, endpoints will be prefixed with version numbers (e.g., `/api/v1/contact`).

## Support and Feedback

For questions, issues, or feedback regarding the API, please contact the development team.

---

This API documentation is a living document and will be updated as the API evolves.

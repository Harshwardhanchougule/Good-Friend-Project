import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const formData: ContactFormData = req.body;
      
      // Validate form data
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.phone || !formData.message || !formData.consent) {
        return res.status(400).json({ 
          message: "Please fill out all required fields and provide consent" 
        });
      }
      
      // In a real implementation, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Set up auto-responder
      
      // For now, we'll just simulate a successful submission
      setTimeout(() => {
        return res.status(200).json({ 
          message: "Thank you for your message. Our team will contact you shortly!" 
        });
      }, 1000);
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      return res.status(500).json({ 
        message: "There was an error processing your request. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

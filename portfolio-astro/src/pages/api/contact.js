export const prerender = false;

export async function POST(context) {
  try {
    const formData = await context.request.formData();
    
    // Extract form data
    const submission = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      role: formData.get('role'),
      project_type: formData.get('project_type'),
      timeline: formData.get('timeline'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };

    // Validate required fields
    if (!submission.name || !submission.email || !submission.message) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Please fill in all required fields.' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Format email content
    const emailContent = `
New Contact Form Submission from jeff.inert.io

Name: ${submission.name}
Email: ${submission.email}
Company: ${submission.company || 'Not provided'}
Role: ${submission.role || 'Not provided'}
Project Type: ${submission.project_type || 'Not specified'}
Timeline: ${submission.timeline || 'Not specified'}

Message:
${submission.message}

Submitted: ${submission.timestamp}
    `.trim();

    // Access Cloudflare runtime environment for email sending
    const { env } = context.locals.runtime;
    
    // For now, we'll log the submission (you'll need to set up email routing)
    console.log('Contact form submission:', submission);
    
    // TODO: Implement actual email sending once contact@inert.io alias is set up
    // This will require Cloudflare Email Workers or external service integration
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Thank you for your message! I\'ll be in touch within 24 hours.' 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Something went wrong. Please try again or email directly.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
# Akhilesh Exports - Garment Craft Website

A standalone website for Akhilesh Exports showcasing their garment manufacturing business.

## Features

- Responsive design for all devices
- Product showcase with categories
- Company information pages
- Contact form functionality
- Content management system

## Technology Stack

- React with TypeScript
- Vite for build tooling
- Express.js for backend server
- Tailwind CSS for styling
- Nodemailer for contact form

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

## Building for Production

To build the project for production:

```bash
npm run build
```

This will create a `dist` folder with the compiled assets.

## Deployment

### Option 1: Using the included Express server

1. Build the project: `npm run build`
2. Start the server: `node server.js`
3. The website will be available at http://localhost:5000

### Option 2: Using Apache/Nginx

1. Build the project: `npm run build`
2. Copy the contents of the `dist` folder to your web server's root directory
3. Configure your web server to serve the `index.html` file for all routes

#### Apache Configuration Example (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx Configuration Example

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  root /path/to/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Contact Form Configuration

The contact form uses Nodemailer to send emails. Update the email configuration in `server.js` with your email credentials:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});
```

## License

ISC
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

const pages = {
  about: {
    title: 'About Sarojini Devi Skin Hospital | Kakinada',
    description:
      'Learn about Sarojini Devi Skin Hospital in Bhanugudi Junction, Kakinada, providing dermatology-focused medical consultation and skin disease care.',
  },

  doctor: {
    title: 'Dr. Satyanarayana | Dermatologist in Kakinada',
    description:
      'Learn about Dr. Satyanarayana, MD (Dermatology), consultant dermatologist at Sarojini Devi Skin Hospital in Kakinada.',
  },

  treatments: {
    title: 'Dermatology Treatments & Skin Care | Kakinada',
    description:
      'Explore dermatology-focused skin disease care and clinical dermatology consultation at Sarojini Devi Skin Hospital in Kakinada.',
  },

  hospital: {
    title: 'Sarojini Devi Skin Hospital | Facilities in Kakinada',
    description:
      'Explore the clinical environment, consultation room, patient waiting area and hospital facilities at Sarojini Devi Skin Hospital in Kakinada.',
  },

  'patient-information': {
    title: 'Patient Information | Sarojini Devi Skin Hospital',
    description:
      'Find patient information about dermatology consultations, payment arrangements, what to bring and preparation for a visit to Sarojini Devi Skin Hospital.',
  },

  contact: {
    title: 'Contact Sarojini Devi Skin Hospital | Kakinada',
    description:
      'Contact Sarojini Devi Skin Hospital and Dr. Satyanarayana at Bhanugudi Junction, Kakinada, Andhra Pradesh.',
  },

  appointment: {
    title: 'Book a Dermatology Appointment | Kakinada',
    description:
      'Request a dermatology consultation appointment with Dr. Satyanarayana at Sarojini Devi Skin Hospital in Kakinada.',
  },

  'privacy-policy': {
    title: 'Privacy Policy | Sarojini Devi Skin Hospital',
    description:
      'Read the privacy policy of Sarojini Devi Skin Hospital covering appointment requests, contact information and medical confidentiality.',
  },

  terms: {
    title: 'Terms & Medical Disclaimer | Sarojini Devi Skin Hospital',
    description:
      'Read the terms of service and medical disclaimer for the Sarojini Devi Skin Hospital website and clinical consultation information.',
  },
};

const siteUrl = 'https://sdh-tau.vercel.app';

const sourceIndex = path.join(distDir, 'index.html');

if (!fs.existsSync(sourceIndex)) {
  throw new Error('dist/index.html was not found. Run the Vite build first.');
}

const baseHtml = fs.readFileSync(sourceIndex, 'utf8');

for (const [route, seo] of Object.entries(pages)) {
  const routeDir = path.join(distDir, route);

  fs.mkdirSync(routeDir, { recursive: true });

  const canonicalUrl = `${siteUrl}/${route}`;

  let html = baseHtml;

  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${seo.title}</title>`
  );

  html = html.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${seo.description}">`
  );

  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${canonicalUrl}">`
  );

  if (!/<link\s+rel=["']canonical["']/i.test(html)) {
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalUrl}">\n</head>`
    );
  }

  fs.writeFileSync(
    path.join(routeDir, 'index.html'),
    html,
    'utf8'
  );

  console.log(`Generated /${route}/index.html`);
}
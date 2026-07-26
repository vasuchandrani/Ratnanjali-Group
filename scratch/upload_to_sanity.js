import fs from 'fs';
import path from 'path';

const token = 'skLszeCe0EpmNcRq8EjfhFLUwWyP70oaqPcis0tw3UYeXDTEvegQiAEzSUFAnFqmEVSbniSohG2nFyA6oRW38TgOWYB5XtOrZurKXjSRPZe8eoNPOpa07ZSlSnQSYSygITrxoDRVWzbYhGlXqugd9WvDU8VgAsv5iiEiQWvYqmM1agbu0EV3';
const projectId = '72qij255';
const dataset = 'production';
const filePath = 'd:\\@Vatsal\\Ratnanjali Group\\public\\WhatsApp Image 2026-07-26 at 4.43.26 PM.jpeg';

async function upload() {
  try {
    console.log('Reading file:', filePath);
    const fileData = fs.readFileSync(filePath);
    
    console.log('Uploading to Sanity...');
    const response = await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/assets/images/${dataset}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'image/jpeg'
      },
      body: fileData
    });
    
    const data = await response.json();
    console.log('Response Status:', response.status);
    console.log('Result:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Upload failed:', error);
  }
}

upload();

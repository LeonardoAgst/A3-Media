import { defineConfig } from 'astro/config';
import tina from '@tinacms/astro'; 
import tailwind from '@astro/tailwind'; 


// https://astro.build/config
export default defineConfig({
  // Diretórios
  srcDir: './src', 
  outDir: './dist', 

  // Configuração do TinaCMS 
  integrations: [
    tina({
      cmsCallback: (cms) => {
        
      },
    }),
    tailwind(), 

    
  ],

  // Configuração do roteamento 
  base: '/', 
  trailingSlash: 'ignore', 

  // Outras configurações
  buildOptions: {
    site: 'http://localhost:4321', 
  },

  // Configurações de ambiente
  markdownOptions: {
    syntaxHighlight: 'prism', 
  },

});


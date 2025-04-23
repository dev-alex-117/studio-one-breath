import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './schemas';
import deskStructure from './deskStructure.js';

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID  || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',
  studioHost: process.env.SANITY_STUDIO_HOSTNAME || '',

  plugins: [
    structureTool({
      structure: deskStructure
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
})

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './schemas';
import deskStructure from './deskStructure.js';

export default defineConfig({
  name: 'default',
  title: 'One Breath',

  projectId: 'tmgo6aq6',
  dataset: 'production',

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

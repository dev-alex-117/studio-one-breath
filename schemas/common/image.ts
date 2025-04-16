export const image = {
  name: 'imageWithMetadata',
  type: 'object',
  title: 'Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'Important for SEO and accessibility.'
    }
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image'
    }
  }
}

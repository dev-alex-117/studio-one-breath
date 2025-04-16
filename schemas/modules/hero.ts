export const hero = {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'blockContent',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'blockContent',
      title: 'Subtitle',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'heroImage',
      type: 'imageWithMetadata',
      title: 'Hero Image'
    },
    {
      name: 'cta',
      type: 'link',
      title: 'Call to Action',
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero'
      }
    }
  }
};

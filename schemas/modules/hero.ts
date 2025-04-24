export const hero = {
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    {
      name: 'sectionId',
      type: 'string',
      title: 'Section ID',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'basicRichTextEditor',
      title: 'Subtitle',
    },
    {
      name: 'description',
      type: 'basicRichTextEditor',
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
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Hero'
      }
    }
  }
};

export const contentImageBlock = {
  name: 'contentImageBlock',
  type: 'object',
  title: 'Content Image Block',
  fields: [
    {
      name: 'title',
      type: 'blockContent',
      title: 'Title',
      options: {
        spellCheck: true,
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ]
      }
    },
    {
      name: 'subtitle',
      type: 'blockContent', 
      title: 'Subtitle',
      options: {
        spellCheck: true,
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'}
        ]
      }
    },
    {
      name: 'image',
      type: 'imageWithMetadata',
      title: 'Image'
    },
    {
      name: 'cta',
      type: 'link',
      title: 'CTA',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Content Image Block'
      }
    }
  }
}

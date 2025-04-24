export const contentImageBlock = {
  name: 'contentImageBlock',
  type: 'object',
  title: 'Content Image Block',
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
      name: 'description',
      type: 'basicRichTextEditor',
      title: 'Description',
    },
    {
      name: 'image',
      type: 'imageWithMetadata',
      title: 'Image'
    },
    {
      name: 'link',
      type: 'link',
      title: 'Link',
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection: any) {
      const { title } = selection;
      return {
        title: title || 'Content Image Block'
      }
    }
  }
}

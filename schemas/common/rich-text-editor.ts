export const basicRichTextEditor = {
  name: 'basicRichTextEditor',
  type: 'array',
  title: 'Basic Rich Text Editor',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'newTab',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: true,
              }
            ]
          }
        ]
      }
    }
  ]
};

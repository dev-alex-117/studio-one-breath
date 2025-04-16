export const footer = {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        { type: 'dropdown' },
        { type: 'link' },
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Footer'
      }
    }
  }
}

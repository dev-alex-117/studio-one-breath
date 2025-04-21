import type { Rule } from 'sanity';

export const contentImageBlock = {
  name: 'contentImageBlock',
  type: 'object',
  title: 'Content Image Block',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',
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
      name: 'link',
      type: 'object',
      title: 'Link',
      fields: [
        { name: 'label', type: 'string', title: 'Label' },
        {
          name: 'url',
          type: 'string',
          title: 'URL',
          description: 'Can be a relative or absolute URL',
          validation: (rule: Rule) => rule.uri({
            allowRelative: true,
            scheme: ['http', 'https', 'mailto', 'tel']
          }),
        },
      ],
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Content Image Block'
      }
    }
  }
}

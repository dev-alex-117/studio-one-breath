import { type Rule } from "sanity"

export const link = {
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
    { name: 'isExternal', type: 'boolean', title: 'Open in new tab?' },
    { name: 'icon', type: 'image', title: 'Icon' },
  ],
  preview: {
    select: {
      title: 'label',
    },
  }
}

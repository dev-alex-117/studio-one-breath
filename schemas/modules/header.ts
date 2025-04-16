import { type Rule } from 'sanity'

export const header = {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'imageWithMetadata',
      title: 'Logo'
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        { type: 'link' },
      ],
      validation: (rule: Rule) => rule.max(4)
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'CTAs',
      of: [
        { type: 'link' },
      ],
      validation: (rule: Rule) => rule.max(2)
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Header'
      }
    }
  }
}

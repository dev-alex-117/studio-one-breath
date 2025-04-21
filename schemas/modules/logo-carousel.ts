import type { Rule } from 'sanity';

export const logoCarousel = {
  name: 'logoCarousel',
  type: 'object',
  title: 'Logo Carousel',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
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
    },
    {
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [
        {
          type: 'object',
          title: 'Logo',
          fields: [
            {
              name: 'image',
              type: 'imageWithMetadata',
              title: 'Image',
            },
          ],
          options: {
            collapsible: true,
            collapsed: false,
          },
        }
      ],
      validation: (rule: Rule) =>
        rule
          .required()
          .min(1)
          .error('At least 1 logo is required.'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Logo Carousel',
      };
    },
  },
};

import type { Rule } from 'sanity';

export const logoCarousel = {
  name: 'logoCarousel',
  type: 'object',
  title: 'Logo Carousel',
  fields: [
    {
      name: 'sectionId',
      type: 'string',
      title: 'Section ID',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'The title of the logo',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL',
              description: 'Where the logo should navigate to when clicked',
            },
          ],
          options: {
            collapsible: true,
            collapsed: false,
          },
          preview: {
            select: {
              title: 'title',
            },
            prepare(selection: any) {
              const { title } = selection;
              return {
                title: title || 'Logo',
              };
            },
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
    select: {
      title: 'title'
    },
    prepare(selection: any) {
      const { title } = selection;
      return {
        title: title || 'Logo Carousel'
      }
    }
  }
};

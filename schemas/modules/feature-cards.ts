import type { Rule } from 'sanity';

export const featureCards = {
  name: 'featureCards',
  type: 'object',
  title: 'Feature Cards',
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
      title: 'Description',
      type: 'basicRichTextEditor',
    },
    {
      name: 'cards',
      type: 'array',
      title: 'Cards',
      of: [
        {
          type: 'object',
          title: 'Card',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'basicRichTextEditor',
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
          .error('At least 1 feature is required.'),
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection: any) {
      const { title } = selection;
      return {
        title: title || 'Feature Cards'
      }
    }
  }
};

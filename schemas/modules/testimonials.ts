import type { Rule } from 'sanity';

export const testimonials = {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        {
          type: 'object',
          title: 'Testimonial',
          fields: [
            {
              name: 'quote',
              type: 'string',
              title: 'Quote',
            },
            {
              name: 'avatar',
              type: 'imageWithMetadata',
              title: 'Avatar',
            },
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'occupation',
              type: 'string',
              title: 'Occupation',
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
          .min(3)
          .max(3)
          .error('Exactly 3 testimonials are required.'),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
      };
    },
  },
};

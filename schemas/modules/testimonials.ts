import type { Rule } from 'sanity';

export const testimonials = {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
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
              type: 'image',
              title: 'Avatar',
              options: {
                hotspot: true
              }
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
    select: {
      title: 'title'
    },
    prepare(selection: any) {
      const { title } = selection;
      return {
        title: title || 'Testimonials'
      }
    }
  }
};

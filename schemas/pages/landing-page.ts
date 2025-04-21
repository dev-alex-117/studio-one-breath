export const landingPage = {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Used for internal reference',
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'items',
      type: 'array',
      title: 'Sections',
      of: [
        { type: 'hero' },
        { type: 'contentImageBlock' },
        { type: 'testimonials' },
        { type: 'logoCarousel' },
        { type: 'featureCards' },
        { type: 'contactForm' },
      ]
    },
  ],
};

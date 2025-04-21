import type { Rule } from 'sanity';

export const featureCards = {
  name: 'featureCards',
  type: 'object',
  title: 'Feature Cards',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' }
          ],
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
    prepare() {
      return {
        title: 'Feature Cards',
      };
    },
  },
};

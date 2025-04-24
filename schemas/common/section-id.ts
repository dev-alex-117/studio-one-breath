import type { Rule } from 'sanity';

export const sectionId = {
  name: 'sectionId',
  type: 'string',
  title: 'Section ID',
  description: 'Used for on-page links (e.g., #testimonials)',
  validation: (rule: Rule) =>
    rule.regex(/^[a-z0-9-]+$/).error('Section ID should only contain lowercase letters, numbers, and hyphens'),
};

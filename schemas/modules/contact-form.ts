export const contactForm = {
  name: 'contactForm',
  type: 'object',
  title: 'Contact Form',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Form Title',
    },
    {
      name: 'nameField',
      type: 'object',
      title: 'Name Field',
      fields: [
        { name: 'label', type: 'string', title: 'Label', initialValue: 'Name' },
        { name: 'placeholder', type: 'string', title: 'Placeholder', initialValue: 'Enter your first name' },
        { name: 'required', type: 'boolean', title: 'Required', initialValue: true },
      ]
    },
    {
      name: 'emailField',
      type: 'object',
      title: 'Email Field',
      fields: [
        { name: 'label', type: 'string', title: 'Label', initialValue: 'Email' },
        { name: 'placeholder', type: 'string', title: 'Placeholder', initialValue: 'Enter your email address' },
        { name: 'required', type: 'boolean', title: 'Required', initialValue: true },
      ]
    },
    {
      name: 'messageField',
      type: 'object',
      title: 'Message Field',
      fields: [
        { name: 'label', type: 'string', title: 'Label', initialValue: 'Message' },
        { name: 'placeholder', type: 'string', title: 'Placeholder', initialValue: 'Write your message here...' },
        { name: 'required', type: 'boolean', title: 'Required', initialValue: true },
      ]
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Form'
      }
    }
  }
};

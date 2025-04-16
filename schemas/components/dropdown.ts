export const dropdown = {
  name: 'dropdown',
  type: 'object',
  title: 'Dropdown Menu',
  fields: [
    { name: 'label', type: 'string', title: 'Dropdown Label' },
    {
      name: 'links',
      type: 'array',
      title: 'Dropdown Links',
      of: [{ type: 'link' }]
    }
  ]
}

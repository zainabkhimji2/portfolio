// experience.js (Sanity schema for the experience section)
export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'experienceid',
            title: 'Experience ID',
            type: 'string',
            description: 'Unique identifier for the book',
          },
      {
        name: 'name',
        title: 'Company Name',
        type: 'string',
        description: 'Name of the company or place of work.',
      },
      {
        name: 'image',
        title: 'Company Logo or Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image hotspot for cropping
        },
      },
      {
        name: 'title',
        title: 'Job Title or Position',
        type: 'string',
        description: 'Your job title or position at the company.',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Brief description of your role and responsibilities.',
      },
    ],
  };
  
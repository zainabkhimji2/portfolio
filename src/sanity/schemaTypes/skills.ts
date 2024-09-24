// skills.js (Sanity schema for the skills section)
export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Skill ID',
        type: 'string',
        description: 'Unique ID for the skill (optional if using Sanity’s default _id).',
      },
      {
        name: 'image',
        title: 'Skill Icon or Image',
        type: 'image',
        options: {
          hotspot: true, // Allow image cropping
        },
        description: 'Icon or image representing the skill (e.g., HTML, CSS, JavaScript logos).',
      },
      {
        name: 'progress',
        title: 'Skill Proficiency (%)',
        type: 'number',
        
        description: 'Your proficiency level in this skill (0 to 100).',
      },
      {
        name: 'type',
        title: 'Skill Type',
        type: 'string',
        description: 'The category of the skill (e.g., Frontend, Backend, Design).',
      },
    ],
  };
  
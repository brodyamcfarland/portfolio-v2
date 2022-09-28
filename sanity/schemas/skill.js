export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of Skill',
            type: 'string',
        },
        {
            name: 'hoverName',
            title: 'HoverName',
            type: 'string',
            description: 'Shows the name of the skill upon hover',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
  
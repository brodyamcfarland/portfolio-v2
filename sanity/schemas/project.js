export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Project Title",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "summary",
            title: "Summary",
            type: "text",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        },
        {
            name: "demoLink",
            title: "DemoLink",
            type: "url",
        },
        {
            name: "githubLink",
            title: "GithubLink",
            type: "url",
        },
    ],
};

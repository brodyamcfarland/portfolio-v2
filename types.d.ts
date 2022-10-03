interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    hoverName: string;
    image: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    hoverName: string;
    image: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    summary: string;
    technologies: Technology[];
    demoLink: string;
    githubLink: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: Date;
    datedEnded: Date;
    isCurrentlyWorkingHere: boolean;
    technologies: Technology[];
    address: string;
    points: string[];
}

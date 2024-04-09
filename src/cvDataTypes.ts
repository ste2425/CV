interface IContactDetails {
    emailAddress: string,
    mobileNumber: string
}

interface ISocial {
    name: string,
    url: string
}

export interface IEntityDescription {
    name: string,
    subName?: string,
    date?: string,
    summary?: string,
    description: string,
    link?: string
}

export interface ICV {
    name: string,
    jobTitle: string,
    contactDetails: IContactDetails,
    introduction: string[],
    socials: ISocial[],
    knownTechnologies: string[],
    projects: IEntityDescription[],
    openSourceContributions: IEntityDescription[],
    certifications: IEntityDescription[],
    jobs: IEntityDescription[]
}

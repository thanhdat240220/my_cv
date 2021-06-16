import { listTechDefault } from './common';

type TDetailProject = {
    repository?: string;
    teamSize?: number;
    listTech?: Array<listTechDefault>;
    libraries?: Array<{
        name: string;
        link?: string;
    }>;
};

export interface IProject {
    name: string,
    key: number;
    time: string;
    thumbnail?: string;
    desc?: string;
    linkDemo?: string;
    detail?: TDetailProject;
}

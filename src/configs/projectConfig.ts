import { IProject } from '@interface/Model/project';

export const projectList: Array<IProject> = [
    {
        key: 1,
        name: "a",
        time: "1-2",
        thumbnail: "https://my-quizz-greenwich.web.app/static/media/logo.d6b16a3f.png",
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        detail: {
            repository: "repository",
            teamSize: 4,
            listTech: ["javascript", "html", "scss/sass", "react", "typescript"],
            libraries: [{
                name: "ant",
                link: "https://ant.design/docs/react/introduce",
            }],
        },
    },
];

import fs from 'fs';
import matter from 'gray-matter';
import { ProjectMetadata } from "./ProjectMetadata";

const getProjectMetadata = (): ProjectMetadata[] => {
    const folder = "projects/";
    const files = fs.readdirSync(folder);
    const markdownProjects = files.filter((file) => file.endsWith(".md"));

    const projects = markdownProjects.map((filename) => {
        const fileContents = fs.readFileSync(`projects/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            type: matterResult.data.type,
            image: matterResult.data.image,
            slug: filename.replace(".md", "")
        }
    })

    return projects;
}

export default getProjectMetadata;


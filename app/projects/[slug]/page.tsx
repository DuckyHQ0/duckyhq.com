import fs from "fs";
import Markdown from "markdown-to-jsx";
import getProjectMetadata from "../../../components/projects/getProjectMetadata";
import matter from "gray-matter";

const getProjectContent = (slug: string) => {
	const folder = "projects/";
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return matterResult.content;
};

export const generateStaticParams = async () => {
	const projects = getProjectMetadata();
	return projects.map((project) => ({
		slug: project.slug,
	}));
};

export default function Project(props: any) {
	const slug = props.params.slug;
	const content = getProjectContent(slug);
	return (
		<div className="flex place-content-center align-middle">
			<article className="prose w-full prose-img:rounded-out lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h6:text-white prose-p:text-[#d3d3d3] prose-a:text-brand-blue hover:prose-a:text-brand-blue/75 prose-code:text-[#b3b3b3] prose-li:text-[#e1e1e1] prose-ul:text-[#d3d3d3] prose-blockquote:text-[#d3d3d3]">
				<Markdown>{content}</Markdown>
			</article>
		</div>
	);
}

import * as React from "react";
import TimelineEntry from "./TimelineEntry";

interface Data {
	allMarkdownRemark: {
		nodes: [
			{
				html: string;
				frontmatter: {
					date: string;
					slug: string;
					title: string;
				};
			}
		];
	};
}

export default function EntriesCol({ data }: { data: Data }) {
	return (
		<div className="grow">
			<h1 className="text-3xl p-4">Timeline (red means clickable)</h1>
			{data.allMarkdownRemark.nodes.map(
				({ html, frontmatter: { date, slug, title } }) => (
					<TimelineEntry date={date} title={title} slug={slug} peek={html} />
				)
			)}
		</div>
	);
}
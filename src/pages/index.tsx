import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import TitleBar from "../components/TitleBar";
import ContactsCol from "../components/ContactsCol";
import EntriesCol from "../components/Timeline";

const IndexPage: React.FC<PageProps> = () => {
	return (
		<div className="flex flex-col items-center min-h-screen">
			<TitleBar />
			<div className="max-w-6xl w-full grow flex">
				<ContactsCol />
				<EntriesCol />
			</div>
		</div>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>blog.ashkan.zone</title>;

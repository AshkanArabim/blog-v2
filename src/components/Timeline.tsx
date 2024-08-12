import * as React from "react";
import TimelineEntry from "./TimelineEntry";

const EntriesCol = () => {
	return (
    <div className="grow">
      <h1 className="text-3xl p-4">Timeline</h1>
      <TimelineEntry />
      <TimelineEntry />
      <TimelineEntry />
      <TimelineEntry />
      <TimelineEntry />
      <TimelineEntry />
      <TimelineEntry />
      <TimelineEntry />
    </div>
  );
};

export default EntriesCol;

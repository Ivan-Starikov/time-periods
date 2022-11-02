type event = {
  year: string;
  event: string;
};

type topicType = {
  number: number,
  topic: string,
  angle: number,
  startYear: string;
  endYear: string;
  events: event[];
};

export type topicsType = topicType[];

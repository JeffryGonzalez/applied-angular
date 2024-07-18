export type User = {
  sub: string;
  prefs: Prefrences;
};

export type Range = 1|3|5;

export type Prefrences = {
  countVariable: Range ;
};

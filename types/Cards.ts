export type Cards = {
  number: number;
  name: string;
  exp: {expMonth: number; expYear: number};
  cvv: number;
};

export type JSONObject = {[k: string]: string};

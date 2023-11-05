import {ImageTypes} from '~/components/shared/Icons';

export type Cards = {
  number: number;
  name: string;
  exp: {expMonth: number; expYear: number};
  cvv: number;
  type: ImageTypes;
};

export type JSONObject = {[k: string]: string};

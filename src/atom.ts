import { atom } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDarkAtom',
  default: true,
});

/* music Search Data */
export interface musicData {
  title: string;
  id: string;
  duration: string;
  owner: string;
  thumbnail: string;
}

export const searchDataAtom = atom<musicData[]>({
  key: 'searchDataAtom',
  default: [],
});

/* music Search Toggle */
export type searchToggleState = boolean;

export const searchToggleAtom = atom<searchToggleState>({
  key: 'searchToggleAtom',
  default: true,
});

/* loadingAtom */
export type loadingState = boolean;

export const loadingAtom = atom<loadingState>({
  key: 'loadingAtom',
  default: false,
});

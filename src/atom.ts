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

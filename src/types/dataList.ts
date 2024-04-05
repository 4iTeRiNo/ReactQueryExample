export type State = {
  status: 'empty' | 'loading' | 'error' | 'success';
  data: TResults[] | undefined;
  error: string | null;
};

export type Action = {
  type: 'request' | 'loading' | 'success' | 'failure';
  payload: [];
  error: string | null;
};

export const initialState: State = {
  status: 'empty',
  data: [],
  error: '',
};

export type TResults =
  | {
      created: string;
      episode: string[];
      gender: string;
      id: number;
      image: string;
      location: {
        name: string;
        url: string;
      };
      name: string;
      origin: {
        name: string;
        url: string;
      };
      species: string;
      status: string;
      type: string;
      url: string;
    }
  | {
      id: number;
      name: string;
      created: string;
      type: string;
      dimension: string;
      residents: string[];
      url: string;
    };

export interface Behaviours {
  loading: boolean;
}

export type StateOfType<T> = T & {
  behaviours: Behaviours;
};

export type ResponseOfType<T> = T;

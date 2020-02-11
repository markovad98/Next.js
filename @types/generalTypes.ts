export interface ICollection {
    [key: string]: string;
}

export interface IAction {
    type: string;
    payload: any;
}

export type TPrimitive = string | boolean | number | null | undefined | symbol;
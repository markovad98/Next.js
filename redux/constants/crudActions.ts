import { ICollection } from "../../@types/generalTypes";

interface I_TYPES {
    [key: string]: ICollection;
}

export const TYPES: I_TYPES = {
    CRUD: {
        CREATE: '_CREATE',
        GET: '_GET',
        UPDATE: '_UPDATE',
        DELETE: '_DELETE',
    },
    FILTER: {
        BY_ID: '_BY_ID',
        BY_FILTER: '_BY_FILTER',
    }
}

import { atom } from "jotai";

const userAtom = atom([]);

const authStatus = atom(false);

export { userAtom, authStatus };

import { atom } from "jotai";

const userAtom = atom([]);

const authStatus = atom(false);

const totalAtom = atom([]);

export { userAtom, authStatus, totalAtom };

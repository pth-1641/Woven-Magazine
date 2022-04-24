import db from '.';
import {
    collection,
    getDocs,
    query,
    limit,
    startAfter,
} from 'firebase/firestore/lite';

export const getData = (dbName) => getDocs(collection(db, dbName));

export const getDataWithLimit = (dbName, amount) => {
    const ref = collection(db, dbName);
    const q = query(ref, limit(amount));
    return getDocs(q);
};

export const getScrollData = async (dbName, amount) => {
    const next = query(
        collection(db, dbName),
        startAfter(lastVisible),
        limit(amount)
    );
    return getDocs(next);
};

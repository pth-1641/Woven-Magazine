import db from '.';
import {
    collection,
    getDocs,
    query,
    limit,
    startAfter,
    where,
    orderBy,
} from 'firebase/firestore/lite';

export const getData = (dbName) => getDocs(collection(db, dbName));

export const getDataWithLimit = (dbName, amount) => {
    const ref = collection(db, dbName);
    const q = query(ref, limit(amount));
    return getDocs(q);
};

export const getNextData = (dbName, amount, lastVisible) => {
    const next = query(
        collection(db, dbName),
        orderBy('id'),
        startAfter(lastVisible),
        limit(amount)
    );
    return getDocs(next);
};

export const getDetail = (dbName, id) => {
    const ref = collection(db, dbName);
    const q = query(ref, where('id', '==', Number(id)));
    return getDocs(q);
};

export const getDataByCategory = (dbName, category) => {
    category = category
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    const ref = collection(db, dbName);
    const q = query(ref, where('category', '==', category));
    return getDocs(q);
};

export const getDataBySearch = (dbName, keyword) => {
    const ref = collection(db, dbName);
    const q = query(ref, where('author', '>=', keyword));
    return getDocs(q);
};

async function fetchData() {
    const data = await getDataBySearch('Stories', 'Esby');
    console.log(data);
    // data.forEach((doc) => console.log(doc.data()));
}

fetchData();

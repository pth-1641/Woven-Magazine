import create from 'zustand';

const useStore = create((set) => ({
    amount: 0,
    books: JSON.parse(localStorage.getItem('books')) ?? [],

    calculatingAmount: () =>
        set((state) => ({
            amount: state.books.reduce(
                (total, cur) => (total += cur.price * cur.quantity),
                0
            ),
        })),

    addBook: (product) =>
        set((state) => {
            const isExist = state.books.find((book) => book.id === product.id);
            const newBook = isExist
                ? (isExist.quantity += product.quantity)
                : product;
            const result =
                typeof newBook === 'object'
                    ? [...state.books, newBook]
                    : [...state.books];

            localStorage.setItem('books', JSON.stringify(result));
            return {
                books: result,
            };
        }),

    increaseBook: (id) =>
        set((state) => {
            const selectedBook = state.books.find((book) => book.id === id);
            selectedBook.quantity += 1;
            localStorage.setItem('books', JSON.stringify([...state.books]));
            return {
                books: [...state.books],
            };
        }),

    decreaseBook: (id) =>
        set((state) => {
            const selectedBook = state.books.find((book) => book.id === id);
            if (selectedBook.quantity <= 1) {
                const index = state.books.findIndex((book) => book.id === id);
                state.books.splice(index, 1);
                localStorage.setItem('books', JSON.stringify([...state.books]));
                return {
                    books: [...state.books],
                };
            } else {
                selectedBook.quantity -= 1;
            }
            localStorage.setItem('books', JSON.stringify([...state.books]));
            return {
                books: [...state.books],
            };
        }),
}));

export default useStore;

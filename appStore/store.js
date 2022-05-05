import create from 'zustand';

const useStore = create((set) => ({
    blogInfo: { title: '', time: '' },
    setBlogInfo: (title, time) => {
        set(() => ({ blogInfo: { title, time } }));
    },
}));

export default useStore;

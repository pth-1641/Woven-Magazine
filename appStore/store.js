import create from 'zustand';

const useStore = create((set) => ({
    blogInfo: 'title',
    setBlogInfo: (title) => {
        set((state) => (state.blogInfo = title));
    },
}));

export default useStore;

export default {
    handleSearchFocus({
        commit
    }) {
        commit('SEARCH_FOCUS', true);
    },
    handleSearchBlur({
        commit
    }) {
        commit('SEARCH_BLUR', false);
    },
    handleUserMouseenter({
        commit
    }) {
        commit('USER_MOUSEENTER', true);
    },
    handleUserMouseleave({
        commit
    }) {
        commit('USER_MOUSELEAVE', false);
    }
}
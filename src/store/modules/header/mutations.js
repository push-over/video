const SEARCH_FOCUS = 'SEARCH_FOCUS';
const SEARCH_BLUR = 'SEARCH_BLUR';
const USER_MOUSEENTER = 'USER_MOUSEENTER';
const USER_MOUSELEAVE = 'USER_MOUSELEAVE';
export default {
    [SEARCH_FOCUS](state, value) {
        state.focused = value;
    },
    [SEARCH_BLUR](state, value) {
        state.focused = value;
    },
    [USER_MOUSEENTER](state, value) {
        state.user_layer = value;
    },
    [USER_MOUSELEAVE](state, value) {
        state.user_layer = value;
    }
}
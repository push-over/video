import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import tv from "../../../assets/images/tv.png";
import movie from "../../../assets/images/movie.png";
import variety from "../../../assets/images/variety.png";
import cartoon from "../../../assets/images/cartoon.png";
import child from "../../../assets/images/child.png";
import doco from "../../../assets/images/doco.png";
import music from "../../../assets/images/music.png";

const state = {
    focused: false,
    user_layer: false,
    menu_list: [{
            menu_url: "/tv",
            icon_name: tv,
            menu_name: "电视剧"
        },
        {
            menu_url: "/movie",
            icon_name: movie,
            menu_name: "电影"
        },
        {
            menu_url: "/variety",
            icon_name: variety,
            menu_name: "综艺"
        },
        {
            menu_url: "/cartoon",
            icon_name: cartoon,
            menu_name: "动漫"
        },
        {
            menu_url: "/child",
            icon_name: child,
            menu_name: "少儿"
        },
        {
            menu_url: "/doco",
            icon_name: doco,
            menu_name: "记录片"
        },
        {
            menu_url: "/vip",
            menu_name: "VIP会员"
        },
        {
            menu_url: "/music",
            icon_name: music,
            menu_name: "音乐"
        },
        {
            menu_url: "/sports",
            menu_name: "体育"
        }
    ],
    subnav_list: [
        "院线大片",
        "网络电影",
        "内地",
        "中国香港",
        "美国",
        "动作",
        "喜剧",
        "科幻",
        "犯罪",
        "爱情",
        "独播"
    ]
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};
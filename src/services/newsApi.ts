import api from './index';

export const newsApi = {
    getNewsList: (item_name : string, item_count: number) =>
        api.get(`/news?item_name=${item_name}&item_count=${item_count}`),
}


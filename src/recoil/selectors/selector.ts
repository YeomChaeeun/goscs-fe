import {selectorFamily} from 'recoil';
import {newsApi} from '../../services/newsApi';

export const newsListSelector = selectorFamily({
  key: 'newsListSelector',
  get: (params: { itemName: string, itemCount: number }) => async () => {
    try {
      const response = await newsApi.getNewsList(
        encodeURIComponent(params.itemName),
        params.itemCount
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
});
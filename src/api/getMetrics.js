import { API_STATISTIC } from '../constants/api';
import getData from './getData';

export default async function getMetrics() {
  try {
    const reponse = await getData(API_STATISTIC + 123);

    if (!reponse.ok) {
      throw new Error(`HTTP error! status: ${reponse.status}`);
    }

    return await reponse.statistic;
  } catch (error) {
    throw new Error(error);
  }
}

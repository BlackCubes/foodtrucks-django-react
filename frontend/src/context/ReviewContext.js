import { createContext, useContext } from 'react';

const ReviewContext = createContext([]);

export const useReviewContext = () => useContext(ReviewContext);

export default ReviewContext;

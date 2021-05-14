import { createContext, useContext } from 'react';

const SocialContext = createContext([]);

export const useSocialContext = () => useContext(SocialContext);

export default SocialContext;

import { createContext } from 'react';
import { Data } from '../api/types';

type MoviesContextType = {
    data: Data | undefined
    url: URL
    setUrl: (url: URL) => void
    currentPage: number
    setCurrentPage: (page: number) => void
}

const MoviesContext = createContext<MoviesContextType>({} as MoviesContextType);

export default MoviesContext;

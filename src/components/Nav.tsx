import { useContext } from "react"
import SearchInput from "./SearchInput"
import MoviesContext from "../context/MoviesContext"

const Nav = () => {
    const { setUrl, setCurrentPage } = useContext(MoviesContext)

    const handleIconClick = () => {
        setUrl(new URL('titles?list=top_boxoffice_200&limit=12', import.meta.env.VITE_MOVIES_API_BASE_URL))
        setCurrentPage(1)
    }

    return (
        <div className=' grid grid-cols-2 bg-gray-300 sticky top-0 z-50'>
            <div className='w-12 ml-2 flex items-center cursor-pointer' onClick={handleIconClick}>
                <img src="movie.svg" alt="Movie logo" />
                <span> Movies </span>
            </div>
            <SearchInput />
        </div >
    )
}

export default Nav
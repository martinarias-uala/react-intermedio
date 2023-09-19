import { useContext } from "react"
import MoviesContext from "../context/MoviesContext"

export const usePagination = () => {

    const { url, setUrl, currentPage, setCurrentPage, data } = useContext(MoviesContext)

    const handlePrev = () => {
        if (currentPage === 1) {
            return
        }
        url.searchParams.set('page', (currentPage - 1).toString())
        setUrl(url)
        setCurrentPage(currentPage - 1)
    }
    const handleNext = () => {
        if (data?.next == null) {
            return
        }
        url.searchParams.set('page', (currentPage + 1).toString())
        setUrl(url)
        setCurrentPage(currentPage + 1)
    }
    
    return {handlePrev, handleNext, currentPage}
}

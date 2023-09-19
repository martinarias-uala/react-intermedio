import { FormEvent, useState, useContext } from "react"
import MoviesContext from "../context/MoviesContext"

const SearchInput = () => {
    const { url, setUrl, setCurrentPage } = useContext(MoviesContext)

    const [searchValue, setSearchValue] = useState("")
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (searchValue.length) {
            url.pathname = `titles/search/title/${searchValue}`
            url.searchParams.delete('list')
            url.searchParams.set('titleType', 'movie')
            url.searchParams.set('page', (1).toString())
            setUrl(new URL(url))
            setCurrentPage(1)
        }
    }

    return (
        <div className="m-2">
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    placeholder='Search movie...'
                    className='p-2 rounded-sm w-full bg-black text-gray-300'
                    id="search"
                    name="search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default SearchInput
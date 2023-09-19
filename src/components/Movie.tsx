import { Result } from '../api/types'

const Movie = (movie: Result) => {
    const addImageFallback = (event: { currentTarget: { src: string; }; }) => {
        event.currentTarget.src = '/movie.svg';
    };
    return (
        <li className="cursor-pointer text-black bg-gray-300 rounded-sm transition ease-in-out delay-150 hover:scale-105 hover:bg-gray-300 outline outline-offset-1 hover:outline-gray-300 duration-300">
            <div className="grid" >
                <img className="rounded-sm h-60 w-full" src={movie.primaryImage?.url} alt={movie.primaryImage?.caption.plainText} onError={addImageFallback} />
                <div className='grid p-2'>
                    <span>Title: {movie.originalTitleText?.text}</span>
                    <span>Release year: {movie.releaseYear?.year}</span>

                </div>
            </div>
        </li>
    )
}

export default Movie
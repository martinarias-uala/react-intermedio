import { Key, useContext } from "react";
import Movie from "./Movie";
import MovieSkeleton from "./MovieSkeleton";
import MoviesContext from "../context/MoviesContext";
import { JSX } from "react/jsx-runtime";
import { Result } from "../api/types";
import Pagination from "./Pagination";

const Movies = () => {

    const { data } = useContext(MoviesContext)

    return (
        <div className="container mx-auto p-10">
            {
                data ?
                    (
                        <div className="animate-fade animate-once">
                            {data.results.length > 0 ? (
                                <>
                                    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-12">
                                        {data?.results.map((movie: JSX.IntrinsicAttributes & Result, i: Key | null | undefined) => (
                                            <Movie {...movie} key={i} />
                                        ))}
                                    </ul>
                                    <Pagination />
                                </>

                            ) : (<h1>No hay resultados</h1>)

                            }


                        </div>
                    ) :
                    (
                        <div className="animate-pulse grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-12">
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                            <MovieSkeleton />
                        </div>
                    )
            }
        </div >
    )
}

export default Movies
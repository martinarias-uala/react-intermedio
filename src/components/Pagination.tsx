import { usePagination } from "../hooks/usePagination"
import Button from "./Button"



const Pagination = () => {

    const { handlePrev, handleNext/* , currentPage */ } = usePagination()

    return (
        <div className="flex justify-center mt-10 gap-2">
            <Button onClick={handlePrev}>
                <span>Prev</span>
            </Button>
            {/* <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                <span className="mx-2">1</span>
            </div>
            {
                currentPage > 2 && (
                    <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                        <span className="mx-2">...</span>
                    </div>)
            }
            <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                <span className="mx-2">{currentPage}</span>
            </div>
            <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                <span className="mx-2">{1 + currentPage}</span>
            </div>
            <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                <span className="mx-2">{2 + currentPage}</span>
            </div>
            <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                <span className="mx-2">{3 + currentPage}</span>
            </div>
            <div className="flex items-center justify-center bg-gray-300 px-2 rounded-sm">
                <span className="mx-2">{4 + currentPage}</span>
            </div> */}
            <Button onClick={handleNext}>
                <span>Next</span>
            </Button>
        </div >
    )
}

export default Pagination
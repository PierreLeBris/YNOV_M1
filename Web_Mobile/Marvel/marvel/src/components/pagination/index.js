import React, {useState, useEffect} from 'react';

const pageCreator = (pageNumber,setCurrentPage) => {
    let pageElement = []

    for (let i = 0; i <= pageNumber; i++) {
        pageElement.push(
        <p 
            onClick={() => {
                setCurrentPage(i)}
            }>{i}</p>)
    }
    return pageElement
}

const Pagination = ({total, setCurrentPage, valueOffset}) => {
    const [pages, setPages] = useState(0)
    useEffect(() => {
        const numberOfPages = total / valueOffset
        setPages (Math.ceil(numberOfPages))
    }, [total])

    if (total === 0) return null ;

    return (
        <div>
            {pageCreator(pages, setCurrentPage)}
        </div>
    )

}

export default Pagination
import React, { useState, useEffect } from 'react';

export default function DisplayPhoto() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    const getImages = () => {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
            .then((resp) => resp.json())
            .then((data) => {
                setImages([
                    ...images,
                    ...data,
                ]);
            });
    }
    const setNextPage = () => {
        setPage(page + 1);
    }

    useEffect(() => {
        getImages();
    }, [page])

    return (
        <div className="container">
            {images.map((image) => (
                <img style={{ width: "20%", height: "100px" }} src={image.download_url} />
            ))}

            <button onClick={setNextPage}>Download more</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles
})
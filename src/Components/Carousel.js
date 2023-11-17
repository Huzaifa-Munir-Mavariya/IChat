import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://source.unsplash.com/1100x700/?Computer,chat" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/1100x700/?Computer,network" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/1100x700/?Computer,world" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
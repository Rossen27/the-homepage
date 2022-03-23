<template>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
                <img src="https://picsum.photos/3000/1000?random=1" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="https://picsum.photos/3000/1000?random=2" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="https://picsum.photos/3000/1000?random=3" class="d-block w-100" alt="..." />
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <figure class="text-end">
        <blockquote class="blockquote">
            <p>Trust yourself you know more than you think you do.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
            Benjamin Spock,
            <cite title="Source Title">Pediatrician</cite>
        </figcaption>
    </figure>
</template>


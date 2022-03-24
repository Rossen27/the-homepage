<template>
    <div class="bg-gray-50">
        <div
            class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block">Ready to dive in?</span>
                <span class="block text-indigo-600">Start your free trial today.</span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
                    <a
                        href="#"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >Get started</a>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                    <a
                        href="#"
                        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                    >Learn more</a>
                </div>
            </div>
        </div>
    </div>
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


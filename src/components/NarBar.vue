<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Home</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link active">公司介紹</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >服務宣告</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link to="/serve1">
                                    <div class="dropdown-item" href="#">服務條款</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/serve2">
                                    <div class="dropdown-item" href="#">隱私政策</div>
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <router-link to="/serve3">
                                    <div class="dropdown-item" href="#">著作權/智慧財產權</div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >會員中心</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link to="/userInfo">
                                    <a href @click.prevent="logout" class="dropdown-item">Logout</a>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/about">
                                    <div class="dropdown-item" href="#">產品下載</div>
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <router-link to="/about">
                                    <div class="dropdown-item" href="#">結果</div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >付款</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link to="/about">
                                    <div class="dropdown-item" href="#">購買商品</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/about">
                                    <div class="dropdown-item" href="#">付款頁面</div>
                                </router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li>
                                <router-link to="/about">
                                    <div class="dropdown-item" href="#">結果</div>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <router-link to="/" class="nav-link active">聯絡我們</router-link>
                </ul>
                <form class="d-flex">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
}
</script>
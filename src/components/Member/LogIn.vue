<template>
    <div class="container container-fluid">
        <div class="row g-1 justify-content-center">
            <div class="col-lg-3">
                <img src="https://picsum.photos/1000/500" class="img-thumbnail" alt="..." />
                <h1>Login Page</h1>
                <form @submit.prevent="login">
                    <label for="formGroupExampleInput" class="form-label">User Name</label>
                    <input
                        class="form-control"
                        placeholder="User Name"
                        type="text"
                        v-model="userName"
                        required
                    />
                    <br />
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input
                        class="form-control"
                        placeholder="Password"
                        type="password"
                        v-model="password"
                        required
                    />
                    <br />
                    <button type="submit" class="btn btn-outline-secondary">Log In</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
        }
    },
    methods: {
        login() {
            //write login authencation logic here!
            if (this.userName == 'abcd' && this.password == '1234') {
                localStorage.setItem('token', 'ImLogin')
                this.$router.push('/');
            } else {
                alert('login failed')
            }
        }
    }
}
</script>
<style scoped>
.col-lg-3 .btn {
    border-width: 2px 3px 2px 5px;
    border-radius: 90% 6% 93% 5% / 5% 94% 7% 95%;
    /* 做出傾斜的視覺感 */
    transform: rotate(2deg);
    border: dashed black 2px;
    transform: rotate(-2deg);
    /* 將傾斜的部分修正 */
}

</style>
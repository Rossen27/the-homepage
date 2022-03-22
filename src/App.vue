<template>
    <div>
        <div>
            <Navbar />
            <div>
                <div>
                    <div>
                        
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            <FooTer />
        </div>
    </div>
</template>

<script>
import Navbar from '../src/components/NarBar.vue'
import FooTer from '../src/components/FooTer.vue'
export default {
    name: 'App',
    components: {
        Navbar,
        FooTer
    }
}
</script>


<style>
html,
body {
    height: 100%;
    background: #f2f6fa;
}
</style>

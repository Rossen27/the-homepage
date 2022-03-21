<template>
    <div class="footer">
        <div id="button"></div>
        <div id="container">
            <h3></h3>
            <div id="cont">
                <h3></h3>
                <div class="footer_center-between">
                    <div class="row">
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <h3 class="p-4 bd-highlight">關於品牌</h3>
                                <h3 class="p-4 bd-highlight">隱私宣告</h3>
                                <h3 class="p-4 bd-highlight">聯絡我們</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400);
body {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 5px;
    color: LightGray;
}
.footer #button {
    width: 35px;
    height: 35px;
    border: #727172 12px solid;
    border-radius: 35px;
    margin: 0 auto;
    position: relative;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
}
.footer #button:hover {
    width: 10x;
    height: 1em;
    border: #3a3a3a 12px solid;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    position: relative;
}
.footer {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 1em;
    overflow: hidden;
    margin: 0 auto;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    z-index: auto;
}
.footer:hover {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    height: 20em;
}
.footer #container {
    margin-top: 1px;
    width: 100%;
    height: 100%;
    position: relative;
    /* top: 0;
    left: 0; */
    background: #3a3a3a;
}
.footer #cont {
    position: relative;
    top: -45px;
    right: auto;
    width: auto;
    height: auto;
    margin: 0 auto;
}
.footer_center {
    width: 50px;
    float: left;
    text-align: center;
}
.footer h3 {
    color: lightgrey;
    font-family: "Helvetica";
    font-size: 15px;
    font-weight: 100px;
    margin-top: 70px;
    margin-left: 40px;
}
</style>
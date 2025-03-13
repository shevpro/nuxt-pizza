<script setup lang="ts"></script>

<template>
    <nav class="nav">
        <div class="container">
            <nav class="nav-menu">
                <ul>
                    <li>
                        <a href="#">Пиццы</a>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    &-menu { 
        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            a {
                text-decoration: none;
            }
        }
    }
}
</style>
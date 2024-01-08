<template>
<nav>
    <div id="logo">
        <button>
            <span></span>
        </button>
        <h1 id="company__name">Adilo</h1>
    </div>
    <ul class="nav__list">
        <li 
            v-for="(link, index) in navLinks" 
            :key="index" 
            :class="( $route.name === link.name ) || ( link.children && link.children.filter(item =>item.name === $route.name).length > 0 ) ? 'active__nav' : ''"
            @click="link.showChildren = !link.showChildren"
        >
            {{ link.text }}
            <Menu 
                @close-menu="link.showChildren = false" 
                v-if="link.children?.length > 0 && link.showChildren == true"
            >
                <p v-for="(item, index) in link.children" :key="index">
                    {{ item.text }}
                </p>
            </Menu>
        </li>
    </ul>
    <div class="profile__nav">
        <a href="">Help</a>
        <div>
            <img :src="authUser.avatar" alt="User Avatar" class="size-8 rounded-md" />
            <div>
                <p id="user__fullname">{{ authUser.full_name }}</p>
                <p id="user__email">{{ authUser.email }}</p>
            </div>
        </div>
    </div>
</nav>
</template>

<script setup>
import Menu from "./Menu.vue"
import { useStore } from "vuex";
import { computed, reactive } from "vue";

const navLinks = reactive([
    {
        text: 'Projects',
        route: '',
        name: 'Project'
    },
    {
        text: 'Tools & App',
        route: '',
        children:[
            {
                text: 'Snapbyte Recorder',
                route: '',
                name: 'Recordings'
            },
            {
                text: 'AudioBounce',
                route: '',
                name: 'AudioBounce'
            },
            {
                text: 'Sugar Voice',
                route: '',
                name: 'SugarVoice'
            },
        ]
    },
    {
        text: 'Channels',
        route: '',
        name: 'Channels'
    },
    {
        text: 'Contacts',
        route: '',
        name: 'Contacts'
    },
    {
        text: 'Analytics',
        route: '',
        name: 'Analytics'
    },
    {
        text: 'Settings',
        route: '',
        name: 'Settings'
    },
    
]);

const store = useStore()
const authUser = computed(() => store.state.auth.user)
</script>

<style lang="less" scoped>
@blue: "#21455E";
@yellow: "#FBBD71";
@gray: "#707070";

.active__nav {
    &:before {
        content: "";
        @apply absolute top-0 left-0 right-0 w-full h-1 bg-[#0DABD8] rounded-full transition ease-linear duration-150;
    }
}
nav {
    @apply px-12 border-b flex justify-between gap-x-6 items-center font-primary h-16 max-w-full fixed top-1 left-0 right-0 z-50 bg-white;
    #logo {
        @apply flex items-center gap-x-2 lg:gap-x-4;
        button{
            @apply bg-[@yellow] rounded-md p-1 flex justify-center items-center;
            span {
                @apply rounded-full size-4 lg:size-6 bg-white;
            }
        }
        #company__name {
            @apply text-[@blue] font-bold text-base lg:text-xl;
        }
    }
    .nav__list{
        @apply flex gap-x-6 lg:gap-x-12 items-center font-semibold text-gray-400 relative;
        li{
            @apply text-xs lg:text-base whitespace-nowrap hover:text-[@blue] cursor-pointer transition ease-linear duration-150 relative py-6;
            &:hover::before{
                content: "";
                @apply absolute top-0 left-0 right-0 w-full h-1 bg-[#0DABD8] rounded-full transition ease-linear duration-150;
            }
        }
    }
    .profile__nav {
        @apply flex items-center;
        a {
            @apply text-[@blue] cursor-pointer font-semibold border-r px-3 lg:px-6 mr-3 lg:mr-6;
        }
        >div{
            @apply flex items-center gap-x-4 pr-12;
            img{
                @apply cursor-pointer;
            }
            #user__fullname {
                @apply font-semibold text-xs lg:text-sm;
            }
            #user__email {
                @apply font-normal lg:font-medium text-xs text-[@gray];
            }
        }
    }
}
</style>
<template>
    <div class="w-screen h-screen overflow-hidden flex justify-center items-center bg-stone-900 text-gray-200">
        <div class="sm:3/3 w-2/3 lg:w-1/3 h-4/5 border border-gray-200 bg-stone-800 rounded-lg p-3 flex flex-col justify-around items-center">
            <div class="flex flex-col w-full h-fit items-center justify-center">
                <img src="./images/ratiomail.png" alt="RatioMail logo" class="w-1/4">
                <h2 class="text-4xl">Login</h2>
            </div>
            <div class="flex flex-col w-2/3 h-fit items-center justify-center gap-3">
                <button class="p-0 flex flex-row w-full items-center h-12 rounded-lg overflow-hidden border border-gray-200 cursor-not-allowed">
                    <span class="flex flex-row w-full md:w-1/3 h-full items-center justify-center bg-white">
                        <img class="object-contains h-4/5" src="./images/ratiomail.png" alt="RatioMail logo">
                    </span>
                    <span class="hidden md:block w-full text-md lg:text-xl font-bold p-3 ">
                        Login with RatioMails
                    </span>
                </button>
                <button class="p-0 flex flex-row w-full items-center h-12 rounded-lg overflow-hidden border border-gray-200 hover:bg-stone-600" @click="signIn">
                    <span class="flex flex-row w-full md:w-1/3 h-full items-center justify-center bg-white">
                        <img class="object-contains h-4/5" src="./images/microsoft-logo.png" alt="RatioMail logo">
                    </span>
                    <span class="hidden md:block w-full text-md lg:text-xl font-bold p-3">
                        Login with Microsoft
                    </span>
                </button>
                <button class="p-0 flex flex-row w-full items-center h-12 rounded-lg overflow-hidden border border-gray-200 cursor-not-allowed">
                    <span class="flex flex-row w-full md:w-1/3 h-full items-center justify-center bg-white">
                        <img class="object-contains h-4/5" src="./images/google-logo.png" alt="RatioMail logo">
                    </span>
                    <span class="hidden md:block w-full text-md lg:text-xl font-bold p-3">
                        Login with Google
                    </span>
                </button>
            </div>
        </div>
    </div>
    </template>
    
    
    <script>
    import { signInAndGetUser } from '@/lib/microsoftGraph.js'
    export default {
        name: 'loginView',
        data() {
            return {
                userName: "",
            }
        },
        methods: {
            signIn() {
                const promise = new Promise(function(resolve){
                    resolve(signInAndGetUser())
                })
                promise.then((user) => {
                this.$store.commit('signInAndGetUser', { name: user.displayName, email: user.mail })
                console.log('User signed in', user)
                }
                ).catch(err => console.log('An error was raised', err))
            }
        }
    }
    </script>
<template>
    <div class="w-screen h-screen overflow-hidden flex justify-end items-end text-stone-600">
        <div class="mr-5 mb-5 px-3 py-4 bg-white shadow-md rounded-md border border-stone-300" v-show="showMail">
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold">New Message</h1>
                <div class="flex justify-between items-center mb-3">
                    <button class="text-blue-500 hover:text-blue-700 mx-4" @click="reduceMail"><font-awesome-icon :icon="icons.minus"/></button>
                    <button class="text-blue-500 hover:text-blue-700" @click="discardMail"><font-awesome-icon :icon="icons.xmark"/></button>
                </div>
            </div>
            <div v-show="!reducedMail">
                <input type="email" class="w-full border rounded-md p-2 mb-4" placeholder="To">
                <input type="text" class="w-full border rounded-md p-2 mb-4" placeholder="Subject">
                <textarea class="w-full border rounded-md p-2 mb-4" rows="10" placeholder="Compose your email..."></textarea>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="sendMail">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'NewMailWidget',
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            icons: {
                xmark: faXmark,
                minus: faMinus
            },
            showMail: true,
            reducedMail: false
        }
    },
    methods: {
        discardMail() {this.showMail = false;},
        reduceMail() {this.reducedMail = !this.reducedMail;},
        sendMail() {}
    }
}
</script>
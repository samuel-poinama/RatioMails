<template>
<div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div id="app" class="bg-white rounded shadow-md p-6 w-full max-w-3xl">
        <div class="flex justify-between items-center mb-4">
            <h1 class="text-xl font-semibold">Mail Inbox</h1>
            <div class="flex items-center space-x-4">
                <button @click="deleteSelectedEmails" :disabled="!selectedEmails.length"
                    class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    <font-awesome-icon :icon="icons.trash"/>
                </button>
                <button @click="openComposeModal" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <font-awesome-icon :icon="icons.pen"/>
                </button>
            </div>
        </div>
        <div>
            <div class="flex items-center space-x-2 mb-4">
                <input type="checkbox" v-model="selectAll" @change="selectAllEmails">
                <span class="text-sm">Select All</span>
            </div>
            <div v-if="emails.length === 0" class="text-gray-600">No emails to display.</div>
            <div v-else>
                <div v-for="(email, index) in emails" :key="index"
                    class="flex items-center justify-between border-b border-gray-200 py-2">
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" :value="email" v-model="selectedEmails">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                            <p class="text-blue-500"><font-awesome-icon :icon="icons.user"/></p>
                        </div>
                        <div>
                            <div class="font-semibold">{{ email.sender }}</div>
                        </div>
                    </div>
                    <div class="flex-grow px-4">{{ email.subject }}</div>
                    <div class="flex-grow px-4">{{ truncateText(email.body, 50) }}</div>
                    <div class="text-sm text-gray-600">{{ email.body.length > 50 ? '...' : '' }}</div>
                    <div class="text-sm text-gray-600">{{ email.date }}</div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="createComposeModal">
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-end justify-end mr-5 mb-5 px-3 py-4 shadow-md rounded-md border border-stone-300 text-stone-600">
            <div class="bg-white rounded shadow-md p-6 w-full max-w-md">
                <div class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold">New Message</h1>
                    <div class="flex justify-between items-center mb-3">
                        <button class="text-blue-500 hover:text-blue-700 mx-4" @click="minimizeComposeModal"><font-awesome-icon :icon="icons.minus"/></button>
                        <button class="text-blue-500 hover:text-blue-700" @click="closeComposeModal"><font-awesome-icon :icon="icons.xmark"/></button>
                    </div>
                </div>
                <form @submit.prevent="sendEmail" v-show="showComposeModal">
                    <input type="email" id="recipient" placeholder="To" v-model="newEmail.recipient"
                        class="w-full border p-2 mb-4 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                    <input type="text" id="subject" placeholder="Subject" v-model="newEmail.subject"
                        class="w-full border p-2 mb-4 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                    <textarea id="body" v-model="newEmail.body" rows="7" placeholder="Compose your email..."
                        class="w-full border p-2 mb-4 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                    <div class="flex justify-end">
                        <button type="submit"
                            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
                        <button type="button" @click="closeComposeModal"
                            class="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faMinus, faTrash, faXmark, faUser, faPen } from '@fortawesome/free-solid-svg-icons'

export default {
    name: 'MailInbox',
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            icons: {
                xmark: faXmark,
                minus: faMinus,
                mail: faEnvelope,
                trash: faTrash,
                user: faUser,
                pen: faPen
            },
            emails: [
                { id: '1', sender: 'Jane Smith', date: '2024-01-23', subject: 'Meeting', body: 'Regarding our meeting tomorrow.' },
                { id: '2', sender: 'John Doe', date: '2024-01-24', subject: 'Hello', body: 'This is a test email.' },
                { id: '3', sender: 'Jane Smith', date: '2024-02-23', subject: 'Meeting', body: 'Regarding our meeting tomorrow.' },
                { id: '4', sender: 'John Doe', date: '2024-02-24', subject: 'Hello', body: 'This is a test email.' },
                { id: '5', sender: 'Jane Smith', date: '2024-03-23', subject: 'Meeting', body: 'Regarding our meeting tomorrow.' },
                { id: '7', sender: 'Jane Smith', date: '2024-04-23', subject: 'Meeting', body: 'Regarding our meeting tomorrow.' },
                { id: '8', sender: 'John Doe', date: '2024-04-24', subject: 'Hello', body: 'This is a test email.' },
                { id: '9', sender: 'Jane Smith', date: '2024-05-23', subject: 'Meeting', body: 'Regarding our meeting tomorrow.' },
                { id: '6', sender: 'John Doe', date: '2024-03-24', subject: 'Hello', body: 'This is a test email.' },
                { id: '10', sender: 'John Doe', date: '2024-05-24', subject: 'Hello', body: 'This is a test email.' },
                { id: '11', sender: 'Jane Smith', date: '2024-06-23', subject: 'Meeting', body: 'Regarding our meeting tomorrow.' },
                { id: '12', sender: 'John Doe', date: '2024-06-24', subject: 'Hello', body: 'This is a test email.' },
                { id: '13', sender: 'John Doe', date: '2024-06-24', subject: 'Hello', body: 'This is a test email.' },
            ],
            selectedEmails: [],
            selectAll: false,
            createComposeModal: false,
            // minimizeComposeModal: false,
            showComposeModal: true,
            newEmail: {
                recipient: '',
                subject: '',
                body: ''
            }
        };
    },
    methods: {
        deleteSelectedEmails() {
            this.emails = this.emails.filter(email => !this.selectedEmails.includes(email));
            this.selectedEmails = [];
        },
        selectAllEmails() {
            if (this.selectAll) {
                this.selectedEmails = [...this.emails];
            } else {
                this.selectedEmails = [];
            }
        },
        openComposeModal() {
            this.createComposeModal = true;
            this.showComposeModal = true;
            console.log("modal clicked")
        },
        minimizeComposeModal() {
            this.showComposeModal = !this.showComposeModal;
        },
        closeComposeModal() {
            this.createComposeModal = false;
        },
        sendEmail() {
            // Logic to send the email
            // For demo, let's just log the new email
            console.log('New Email:', this.newEmail);
            this.emails.unshift(this.newEmail);
            this.emails[0]['sender'] = this.emails[0]['recipient'];
            delete this.emails[0]['recipient'];
            this.emails[0]['id'] = '0';
            this.createComposeModal = false;
            this.newEmail = { recipient: '', subject: '', body: '' }; // Reset form fields
            console.log(this.emails);
        },
        truncateText(text, maxLength) {
            if (text.length <= maxLength) {
                return text;
            } else {
                return text.substring(0, maxLength);
            }
        }
    }
}
</script>
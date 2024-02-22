<template>
  <div class="home">
    <div class="email-view-container">
      <EmailView :emails="emails" @email-selected="selectEmail" />
    </div>
    <div class="email-list-container">
      <EmailList :emails="emails" @email-selected="selectEmail" />
    </div>
  </div>
</template>

<script>
import EmailView from '@/components/EmailView.vue';
import EmailList from '@/components/EmailList.vue';

export default {
  name: 'HomeView',
  components: {
    EmailView,
    EmailList
  },
  data() {
    return {
      // Une liste factice d'e-mails pour l'exemple
      emails: [
        {
          id: 1,
          subject: "Meeting Reminder",
          sender: "john.doe@example.com",
          recipient: "you@example.com",
          date: "2024-02-22",
          body: "Don't forget about our meeting tomorrow at 10 AM. See you there!"
        },
        {
          id: 2,
          subject: "Task Assignment",
          sender: "manager@example.com",
          recipient: "you@example.com",
          date: "2024-02-21",
          body: "You have been assigned a new task. Please review the details in the attached document."
        },
        {
          id: 3,
          subject: "Task Assignment",
          sender: "manager@example.com",
          recipient: "you@example.com",
          date: "2024-02-21",
          body: "You have been assigned a new task. Please review the details in the attached document."
        },
        {
          id: 4,
          subject: "Task Assignment",
          sender: "manager@example.com",
          recipient: "you@example.com",
          date: "2024-02-21",
          body: "You have been assigned a new task. Please review the details in the attached document."
        },
        {
          id: 5,
          subject: "Task Assignment",
          sender: "manager@example.com",
          recipient: "you@example.com",
          date: "2024-02-21",
          body: "You have been assigned a new task. Please review the details in the attached document."
        }
      ],
      selectedEmailIndex: null
    };
  },
  methods: {
    selectEmail(index) {
      this.selectedEmailIndex = index;
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  height: 90vh;
}

.email-view-container {
  flex: 1;
}

.email-list-container {
  width: 500px;
}
</style>

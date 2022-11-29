<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bg-color="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <RouterLink
          :to="{ name: 'notes', path: '/' }"
          class="button is-link is-light mr-4"
        >
          Cancel
        </RouterLink>

        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";

const noteContent = ref("");
</script>

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
          @click="handleUpdateNote"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStoreNotes } from "@/stores/storeNotes";

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref("");

const noteId = route.params.id;

noteContent.value = storeNotes.getNoteContent(noteId);

const handleUpdateNote = () => {
  storeNotes.updateNote(noteId, noteContent.value);
  router.push({ name: "notes", path: "/" });
};
</script>

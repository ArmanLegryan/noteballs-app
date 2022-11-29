<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          class="button is-link has-background-success"
          :disabled="!newNote"
          @click="addNote"
        >
          Add a New Note
        </button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const newNote = ref("");
const addEditNoteRef = ref(null);

const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = "";
  addEditNoteRef.value.focusTextarea();
};
</script>

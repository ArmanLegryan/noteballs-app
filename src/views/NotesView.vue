<template>
  <div class="notes">
    <div class="has-background-success-dark mb-5 p-4">
      <div class="field">
        <div class="control">
          <textarea
            v-model.trim="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            :disabled="!newNote"
            @click="addNote"
          >
            Add a New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const newNote = ref("");
const newNoteRef = ref(null);

const storeNotes = useStoreNotes();

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  newNoteRef.value.focus();
};
</script>

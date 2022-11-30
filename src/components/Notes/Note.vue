<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{ name: 'edit-note', params: { id: note.id } }"
        class="card-footer-item"
      >
        Edit
      </RouterLink>
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
      >
        Delete
      </a>
    </footer>

    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" />
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});

const storeNotes = useStoreNotes();

const characterLength = computed(() => {
  const length = props.note.content.length;
  const description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});

const modals = reactive({
  deleteNote: false
});
</script>

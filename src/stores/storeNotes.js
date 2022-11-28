import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "1",
          content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
                alias non illo ut a consequatur. Sequi quisquam ut sed, nemo hic
                cupiditate facilis at eius ab sint dolorem sapiente iusto.`
        },
        {
          id: "2",
          content: `Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Voluptas aliquid
                laborum, dolores inventore quo possimus ut quaerat odit corrupti
                beatae, amet commodi consequuntur quod error eligendi dolorum sunt
                eius laudantium praesentium!`
        }
      ]
    };
  },
  actions: {
    addNote(newNoteContent) {
      console.log("add note", newNoteContent);

      let currentDate = new Date().getTime();
      let id = currentDate.toString();

      const note = {
        id,
        content: newNoteContent
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    }
  }
});

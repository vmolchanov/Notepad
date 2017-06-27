export const SHOW_ADD_NOTE_POPUP = "SHOW_ADD_NOTE_POPUP";
export const HIDDEN_POPUP = "HIDDEN_ADD_NOTE_POPUP";
export const ADD_NOTE = "ADD_NOTE";
export const SHOW_NOTE_POPUP = "SHOW_NOTE_POPUP";


export default (state = initialStore, action) => {
    switch (action.type) {
        case SHOW_ADD_NOTE_POPUP:
            return Object.assign(
                {},
                state,
                { isShowAddNotePopup: action.data }
            );

        case HIDDEN_POPUP:
            return Object.assign(
                {},
                state,
                {
                    isShowAddNotePopup: false,
                    isShowNotePopup: false
                }
            );

        case ADD_NOTE:
            return Object.assign(
                {},
                state,
                {
                    notes: [...state.notes, action.data],
                    notesCount: state.notesCount + 1,
                    isShowAddNotePopup: false
                }
            );

        case SHOW_NOTE_POPUP:
            return Object.assign(
                {},
                state,
                {
                    isShowNotePopup: true,
                    choosenNote: action.data
                }
            );

        default:
            return state;
    }
}

let initialStore = {
    notes: [
        {
            id: 1,
            header: "Заметка 1",
            content: "Текст заметки 1",
            date: "26.07.17"
        },
        {
            id: 2,
            header: "Заметка 2",
            content: "Текст заметки 2",
            date: "26.07.17"
        },
        {
            id: 3,
            header: "Заметка 3",
            content: "Текст заметки 3",
            date: "26.07.17"
        }
    ],
    isShowAddNotePopup: false,
    isShowNotePopup: false,
    choosenNote: 0,
    notesCount: 3
};

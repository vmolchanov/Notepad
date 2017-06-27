let initialStore = {
    notes: [
        {
            header: "Заметка 1",
            content: "Текст заметки 1",
            date: "26.07.17"
        },
        {
            header: "Заметка 2",
            content: "Текст заметки 2",
            date: "26.07.17"
        },
        {
            header: "Заметка 3",
            content: "Текст заметки 3",
            date: "26.07.17"
        }
    ],
    isShowAddNotePopup: false,
    notesCount: 3
};


export default (state = initialStore, action) => {
    switch (action.type) {
        case "SHOW_POPUP":
            return Object.assign(
                {},
                state,
                { isShowAddNotePopup: action.data }
            );

        case "HIDDEN_POPUP":
            return Object.assign(
                {},
                state,
                { isShowAddNotePopup: action.data }
            );

        case "ADD_NOTE":
            return Object.assign(
                {},
                state,
                {
                    notes: [...state.notes, action.data],
                    notesCount: state.notesCount + 1
                }
            );
        default:
            return state;
    }
}
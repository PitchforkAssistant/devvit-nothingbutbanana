// Keeping all of the labels, help texts, error messages, and default values in one place makes keeps main.ts cleaner and makes them easier to change.
// It also opens up the possibility of internationalization in the future.

export const LABELS = {
    createPostButton: "Create Banana Post",
    createPostFormName: "Create Banana Post",
    createPostAccept: "Submit",
    createPostCancel: "Cancel",
    createPostFormTitle: "Post Title",
    customPostName: "Banana Post",
};

export const DESCS = {
    createPostButton: "This button will open a form to create a new Banana post.",
    createPostFormDesc: "This form is used to create a new Banana post.",
    createPostFormTitle: "This will be used as the title of the new Banana post.",
    customPostDesc: "Banana. What more do you need to know?",
};

export const ERRORS = {
    createPostFormFailed: "ERROR: Failed to submit custom post!",
};

export const DEFAULTS = {
    createPostFormTitle: "🍌",
};

export const OPTIONS = {
    SELECT: [
        {label: "Label 0", value: "value0"},
        {label: "Label 1", value: "value1"},
        {label: "Label 2", value: "value2"},
        {label: "Label 3", value: "value3"},
        {label: "Label 4", value: "value4"},
        {label: "Label 5", value: "value5"},
        {label: "Label 6", value: "value6"},
        {label: "Label 7", value: "value7"},
        {label: "Label 8", value: "value8"},
        {label: "Label 9", value: "value9"},
    ],
};

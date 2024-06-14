import {Context, Devvit, Form, FormKey, FormOnSubmitEvent, FormOnSubmitEventHandler} from "@devvit/public-api";
import {DEFAULTS, ERRORS, DESCS, LABELS} from "../constants.js";
import {CustomPostPreview} from "../customPost/components/preview.js";

// If you want to dynamically generate the form, use this:
// const form: FormFunction = (data: Data) => // return form generated from data;
const form: Form = {
    fields: [
        {
            type: "string",
            name: "title",
            label: LABELS.createPostFormTitle,
            helpText: DESCS.createPostFormTitle,
            defaultValue: DEFAULTS.createPostFormTitle,
        },
    ],
    title: LABELS.createPostFormName,
    description: DESCS.createPostFormDesc,
    acceptLabel: LABELS.createPostAccept,
    cancelLabel: LABELS.createPostCancel,
};

const formHandler: FormOnSubmitEventHandler = async (event: FormOnSubmitEvent, context: Context) => {
    const message = `You submitted the form with values ${JSON.stringify(event.values)}`;
    console.log(message);
    context.ui.showToast(message);

    // The logic for creating a custom post.
    const subredditName = (await context.reddit.getCurrentSubreddit()).name;

    let title = DEFAULTS.createPostFormTitle;
    if (event.values.title) {
        title = String(event.values.title);
    }

    try {
        const newPost = await context.reddit.submitPost({
            title,
            subredditName,
            preview: CustomPostPreview,
        });
        context.ui.showToast({
            text: "Custom post created, redirecting...",
            appearance: "success",
        });
        context.ui.navigateTo(newPost);
    } catch (e) {
        console.error("Error creating custom post", e);
        context.ui.showToast(ERRORS.createPostFormFailed);
    }
};

export const createPostForm: FormKey = Devvit.createForm(form, formHandler);

import {Context, Devvit, MenuItemOnPressEvent} from "@devvit/public-api";
import {createPostForm} from "../main.js";
import {DESCS, LABELS} from "../constants.js";

const onPress = (event: MenuItemOnPressEvent, context: Context) => {
    console.log("Create post button pressed: ", event);
    context.ui.showForm(createPostForm);
};

export const createPostButton = Devvit.addMenuItem({
    location: "subreddit",
    label: LABELS.createPostButton,
    description: DESCS.createPostButton,
    onPress,
});


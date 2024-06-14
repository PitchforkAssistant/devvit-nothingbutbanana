import {CustomPostType, Devvit} from "@devvit/public-api";
import {PostState} from "./state/postState.js";
import {Page} from "./pages.js";
import {DESCS, LABELS} from "../constants.js";

export const CustomPostExample: CustomPostType = {
    name: LABELS.customPostName,
    description: DESCS.customPostDesc,
    height: "regular",
    render: context => {
        const state = new PostState(context);
        return (
            <blocks>
                <vstack alignment="center middle" gap="medium" grow>
                    <Page state={state} />
                </vstack>
            </blocks>
        );
    },
};

export const customPost = Devvit.addCustomPostType(CustomPostExample);

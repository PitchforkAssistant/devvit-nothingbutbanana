import {Devvit, UseStateResult} from "@devvit/public-api";
import {PostState} from "./postState.js";

export type SubredditData = {
    name: string;
    id: string;
};

export type UserData = {
    username: string;
    id: string;
};

export class BananaState {
    readonly _bananaImageUrl: UseStateResult<string>;

    constructor (public state: PostState) {
        this._bananaImageUrl = state.context.useState<string>(async () => state.context.assets.getURL("banana.png"));
    }

    get imageUrl (): string {
        return this._bananaImageUrl[0];
    }

    set imageUrl (imageUrl: string) {
        this._bananaImageUrl[1](imageUrl);
    }

    public async onPress (event: Devvit.Blocks.OnPressEvent): Promise<void> {
        console.log("Banana Clicked: ", event);
        this.state.context.ui.showToast({appearance: "success", text: "Banana Clicked!"});
    }
}

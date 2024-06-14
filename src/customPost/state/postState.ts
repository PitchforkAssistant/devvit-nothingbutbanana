import {Context, UseStateResult} from "@devvit/public-api";
import {PageName} from "../pages.js";
import {BananaState} from "./bananaState.js";

export type SubredditData = {
    name: string;
    id: string;
};

export type UserData = {
    username: string;
    id: string;
};

export class PostState {
    readonly _currentPage: UseStateResult<PageName>;
    readonly bananaState: BananaState;

    constructor (public context: Context, startPage: PageName = "banana") {
        this._currentPage = context.useState<PageName>(startPage);
        this.bananaState = new BananaState(this);
    }

    get page (): PageName {
        return this._currentPage[0];
    }

    protected set page (page: PageName) {
        this._currentPage[1](page);
    }

    public changePage (page: PageName) {
        if (page === this.page) {
            return;
        }

        this.page = page;
    }
}

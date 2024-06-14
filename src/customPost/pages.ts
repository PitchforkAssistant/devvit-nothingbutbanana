import {BananaPage} from "./pages/bananaPage.js";
import {PostState} from "./state/postState.js";

export type PageName = "banana";

export type PageList = {
    [key in PageName]: (state: PostState) => JSX.Element;
};

export const Pages: PageList = {
    banana: BananaPage,
};

export interface PageProps {
    state: PostState;
}

export const Page = ({state}: PageProps) => Pages[state.page](state);

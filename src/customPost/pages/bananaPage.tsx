import {Devvit} from "@devvit/public-api";
import {PostState} from "../state/postState.js";
import {Banana} from "../components/banana.js";

export type BananaPageProps = {
    state: PostState;
}

export const BananaPage = (state: PostState): JSX.Element => {
    console.log("Banana page rendered");
    return (
        <Banana height={100} width={100} imageUrl={state.bananaState.imageUrl} onPress={state.bananaState.onPress.bind(state.bananaState)}></Banana>
    );
};


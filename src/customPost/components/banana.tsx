import {Devvit} from "@devvit/public-api";

export type BananaItemProps = {
    imageUrl: string;
    width: Devvit.Blocks.SizePixels | number;
    height: Devvit.Blocks.SizePixels | number;
    onPress: (event: Devvit.Blocks.OnPressEvent) => void | Promise<void>;
}

export const Banana: Devvit.BlockComponent<BananaItemProps> = (props: Devvit.BlockComponentProps<BananaItemProps>): JSX.Element => {
    console.log("Banana page rendered");

    return (
        <image url={props.imageUrl} onPress={props.onPress} imageWidth={props.width} imageHeight={props.height}>

        </image>
    );
};


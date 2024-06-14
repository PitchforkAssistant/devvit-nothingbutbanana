
import {Devvit} from "@devvit/public-api";

// Enable any Devvit features you might need.
Devvit.configure({
    redditAPI: true,
    redis: true,
    media: false,
    http: false,
});

// Devvit Definitions Imports
export {customPost} from "./customPost/index.js";
export {createPostButton} from "./buttons/createPostButton.js";
export {createPostForm} from "./forms/createPostForm.js";

export default Devvit;

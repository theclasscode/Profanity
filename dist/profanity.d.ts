import { ProfanityOptions } from "./profanity-options";
import { List, CensorType } from "./models";
export declare class Profanity {
    options: ProfanityOptions;
    whitelist: List;
    private blacklist;
    private regex;
    constructor(options?: ProfanityOptions);
    exists(text: string): boolean;
    censor(text: string, censorType?: CensorType): string;
    addWords(words: string[]): void;
    removeWords(words: string[]): void;
    private buildRegex;
}
export declare const profanity: Profanity;
export default profanity;

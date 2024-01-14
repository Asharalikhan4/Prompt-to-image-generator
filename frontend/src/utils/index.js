import FileSaver from "file-saver";
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export const BaseUrl = "http://localhost:8080/api/v1";
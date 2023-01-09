import axios from "axios";
import { IQuestion } from "../types/types";

export default class Server {
    static async getQuestions() {
        try {
            const response = await axios.get<IQuestion>('./questions.json');
            return (await response).data;
        } catch (e: unknown) {
            const err = e as Error
            console.log(err.message);
        };
    };
};
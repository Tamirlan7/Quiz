export default class Server {
    static async getQuestions() {
        const response = await fetch('./questions.json');
        return await response.json();
    };
};
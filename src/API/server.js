export default class Server {
    static async getQuestions() {
        try {
            const response = await fetch('./questions.json');
            return await response.json();
        } catch (e) {
            console.log(e.message);
        };
    };
};
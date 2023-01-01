import Main from "../pages/Main/Main";
import Quiz from "../pages/Quiz/Quiz";

const router = [
    {
        path: '/',
        element: <Main />,
        exact: true
    },
    {
        path: '/quiz',
        element: <Quiz />,
        exact: true
    }
];

export default router;
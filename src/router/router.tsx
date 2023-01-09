import Main from "../pages/Main/Main";
import Quiz from "../pages/Quiz/Quiz";

interface Route {
    path: string;
    element: React.ReactNode;
};

const router: Route[] = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/quiz',
        element: <Quiz />,
    }
];

export default router;
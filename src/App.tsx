import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage/Home";
import Quiz from "./pages/QuizPage/Quiz";
import Result from "./pages/ResultPage/Result";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="quiz/:topic" element={<Quiz />}/>
                <Route path="result" element={<Result />}/>
            </Route>
        </Routes>
    </BrowserRouter>;
}

export default App;

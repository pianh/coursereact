import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Layout>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                return <Route key={index} path={route.path} element={<Page />} />;
                            })}
                        </Routes>
                    </Layout>
                </div>
            </Router>
        </>
    );
}

export default App;

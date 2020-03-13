import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/home';
import Error404 from './pages/error404/';
import Movie from './pages/movie';
import Popular from './pages/popular';
import NewMovies from './pages/new-movies';
import Search from './pages/search/';
import MenuTop from './components/MenuTop';
import Footer from './components/Footer';

function App() {
    const { Header, Content } = Layout;
    return (
        <Layout>
            <Router>
                <Header style={{ zIndex: 1 }}>
                    <MenuTop />
                </Header>
                <Content>
                    <Switch>
                        <Route path='/' exact>
                            <Home />
                        </Route>
                        <Route path='/new-movies' exact>
                            <NewMovies />
                        </Route>
                        <Route path='/popular' exact>
                            <Popular />
                        </Route>
                        <Route path='/search' exact>
                            <Search />
                        </Route>
                        <Route path='/movie/:id' exact>
                            <Movie />
                        </Route>
                        <Route path='*'>
                            <Error404 />
                        </Route>
                    </Switch>
                </Content>
            </Router>
            <Footer />
        </Layout>
    );
}

export default App;

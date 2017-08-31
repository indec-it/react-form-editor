/* global window */
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from '../reducers';
import SectionEditor from '../components/SectionEditor';

const store = createStore(
    reducers,
    // eslint-disable-next-line no-underscore-dangle
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const HomePage = () => (
    <Provider store={store}>
        <main>
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
            <SectionEditor/>
        </main>
    </Provider>
);

export default HomePage;

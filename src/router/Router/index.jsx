import { lazy, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import FULL_PAGE from '../../templates/FullPage';
import TEXT_ONLY from '../../templates/TextOnly';

const ABOUT = lazy(() => import('../../pages/About'));
const CALORIES = lazy(() => import('../../pages/Calories'));
const COUNTER = lazy(() => import('../../pages/Counter'));
const HOME = lazy(() => import('../../pages/Home'));
const LOGIN = lazy(() => import('../../pages/Login'));
const LOREM_IPSUM = lazy(() => import('../../pages/LoremIpsum'));
const NOT_FOUND = lazy(() => import('../../pages/NotFound'));
const SIGNIN = lazy(() => import('../../pages/SignIn'));
const TASKS = lazy(() => import('../../pages/Tasks'));
const TEMPLATE = lazy(() => import('../../pages/Template'));

export default function ROUTER() {
  return useMemo(() => {
    return (
      <Routes>
        <Route path="/" element={<FULL_PAGE />}>
          <Route index element={<HOME />} />
          <Route path="about" element={<ABOUT />} />
          <Route path="calories" element={<CALORIES />} />
          <Route path="counter" element={<COUNTER />} />
          <Route path="home" element={<HOME />} />
          <Route path="login" element={<LOGIN />} />
          <Route path="loremipsum" element={<LOREM_IPSUM />} />
          <Route path="tasks" element={<TASKS />} />
          <Route path="template" element={<TEMPLATE />} />
          <Route path="*" element={<NOT_FOUND />} />
        </Route>
        <Route path="/" element={<TEXT_ONLY />}>
          <Route path="signin" element={<SIGNIN />} />
        </Route>
      </Routes>
    );
  }, []);
}

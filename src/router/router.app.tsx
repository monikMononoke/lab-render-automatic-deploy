import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { OrgProvider } from '@/core/context/orgContext';
import { AppLayout } from '@/layouts/app.layout';
import {
  MainScene,
  MembersListScene,
  CharactersListScene,
  DetailScene,
  CharacterDetailScene,
} from '@/scenes';

export const AppRouter: React.FC = () => {
  return (
    <OrgProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path='/' element={<MainScene />} />
            <Route path='/members/*' element={<MemberRouter />} />
            <Route path='/characters/*' element={<CharactersRouter />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </AppLayout>
      </Router>
    </OrgProvider>
  );
};

const MemberRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='list' element={<MembersListScene />} />
      <Route path='detail/:login' element={<DetailScene />} />
    </Routes>
  );
};

const CharactersRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='list' element={<CharactersListScene />} />
      <Route path='detail/:id' element={<CharacterDetailScene />} />
    </Routes>
  );
};

import React from 'react';
import Button from './components/Button';
import LeftSlideMenu from './components/LeftSlideMenu';
export default function App() {
  return (
    <div>
      <LeftSlideMenu>
        <Button title="Home" type="primary-outline"/>
      </LeftSlideMenu>
    </div>
  );
}

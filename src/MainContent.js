import React from 'react';
import './main.css'

function MainContent() {
  const mainContentStyle = {
    // スタイルの定義
  };

  const handleClick = () => {
    window.location.href = 'https://canape2020.stars.ne.jp/script/index.html';
  };

  return (
    <main style={mainContentStyle}>
      <h2>Main Content Component</h2>
      <p>This is the main content of the application.</p>
      <input
        id="canape-button"
        type="button"
        value="戻る"
        onClick={handleClick}
      />
    </main>
  );
}

export default MainContent;

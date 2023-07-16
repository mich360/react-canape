import React from 'react';

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

// import React from 'react';

// function MainContent() {
//     const mainContentStyle = {
//         /* スタイルの定義 */
        
//     #canape-button {
//     width: 100px;
//     height: 27px;
//     font-size: 14px;
//     background-color: #0000CC;
//     font-family: cursive; 
//     color: #ffff80;
//     border-style: solid;
//     border-color: #ffff80;
//     border-width: 2px;
//     border-radius: 8px;
    
//     }
   
//       };
    
//   return (
//     <main>
//       <h2>Main Content Component</h2>
//       <p>This is the main content of the application.</p>
//       <input id="canape-button" type="button" onclick="location.href='https://canape2020.stars.ne.jp/script/index.html'" value="戻る"></input>
//     </main>
//   );
// }

// export default MainContent;

// 
// MainContent.js

// import React from 'react';

// function MainContent() {
//   const mainContentStyle = {
//     /* スタイルの定義 */
//   };

//   return (
//     <div style={mainContentStyle}>
//       {/* コンテンツ */}
//     </div>
//   );
// }

// export default MainContent;


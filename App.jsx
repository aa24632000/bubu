import React, { useState, useEffect } from 'react';
import liff from '@line/liff';

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // 這是之後要填 LIFF ID 的地方
  const liffId = "12345678-abcde"; 

  useEffect(() => {
    liff.init({ liffId })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then(p => setProfile(p));
        } else {
          liff.login();
        }
      })
      .catch((err) => setError(err.toString()));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#5b8a6a' }}>🍃 Pupu Says 家長控制台</h1>
        {profile && <p>早安，{profile.displayName}！今天也要幫 Pupu 加油喔！</p>}
      </header>

      <div style={{ background: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ borderBottom: '2px solid #e0e0e0', paddingBottom: '10px' }}>小孩學習狀態</h3>
        
        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#fff9e6', borderRadius: '10px' }}>
          <strong>👦 Pupu (5年級)</strong>
          <p>今日進度：2 個英文字根 (未完成)</p>
          <div style={{ width: '100%', backgroundColor: '#ddd', height: '10px', borderRadius: '5px' }}>
            <div style={{ width: '30%', backgroundColor: '#ffcc00', height: '10px', borderRadius: '5px' }}></div>
          </div>
        </div>

        <div style={{ margin: '15px 0', padding: '10px', backgroundColor: '#e6f3ff', borderRadius: '10px' }}>
          <strong>🧑 哥哥 (8年級)</strong>
          <p>今日進度：Excel VBA 基礎練習 (已完成)</p>
          <div style={{ width: '100%', backgroundColor: '#ddd', height: '10px', borderRadius: '5px' }}>
            <div style={{ width: '100%', backgroundColor: '#4a90e2', height: '10px', borderRadius: '5px' }}></div>
          </div>
        </div>
      </div>
      
      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#888', fontSize: '12px' }}>
        © 2026 Pupu Says - 給孩子最好的陪伴
      </footer>
    </div>
  );
}

export default App;

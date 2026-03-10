import React, { useState, useEffect } from 'react';
import liff from '@line/liff';

function App() {
  const [profile, setProfile] = useState(null);
  const [highlight, setHighlight] = useState(""); 
  const [expense, setExpense] = useState(""); 

  // 這裡是之後要填 LIFF ID 的地方
  const liffId = "12345678-abcde"; 

  useEffect(() => {
    liff.init({ liffId })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then(p => setProfile(p));
        } else {
          liff.login();
        }
      }).catch(console.error);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f9fbf2', minHeight: '100vh', color: '#4a5d4e' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', color: '#5b8a6a' }}>✨ 小步拾光</h1>
        {profile && <p>午安，{profile.displayName}。今天也要溫柔對待自己。</p>}
      </header>

      <section style={cardStyle}>
        <h3 style={titleStyle}>📔 今日拾光</h3>
        <textarea 
          placeholder="記下一件微小但美好的事..." 
          style={inputStyle}
          value={highlight}
          onChange={(e) => setHighlight(e.target.value)}
        />
      </section>

      <section style={cardStyle}>
        <h3 style={titleStyle}>💰 溫柔記帳</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="number" placeholder="金額" style={{ ...inputStyle, flex: 1 }} value={expense} onChange={(e) => setExpense(e.target.value)} />
          <button style={buttonStyle}>記錄</button>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#a0a0a0' }}>
        小步走，拾起每一刻的時光。
      </footer>
    </div>
  );
}

const cardStyle = { background: '#ffffff', borderRadius: '20px', padding: '20px', marginBottom: '20px', boxShadow: '0 8px 15px rgba(0,0,0,0.05)' };
const titleStyle = { margin: '0 0 10px 0', fontSize: '18px', color: '#7a9d8c' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' };
const buttonStyle = { backgroundColor: '#5b8a6a', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px' };

export default App;

import Link from 'next/link';
import { useState } from 'react';

// '/' 경로를 가지는 페이지
const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <label>
        username
        <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default App;

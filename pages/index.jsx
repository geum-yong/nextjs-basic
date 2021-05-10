// '/' 경로를 가지는 페이지
import { useState } from 'react';
import { useRouter } from 'next/router';

const App = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <div>
      <button type='button' onClick={() => router.push('/tomato')}>
        tomato로 가기
      </button>
      <p>이름</p>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginTop: '12px' }}
      />
      <button type='button' onClick={() => router.push(`/vegetable/${name}`)}>
        {name}으로 가기
      </button>
    </div>
  );
};

export default App;

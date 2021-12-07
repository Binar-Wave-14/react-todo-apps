import './App.css';
import { useState } from 'react';
import TextInput from './components/TextInput';

function App() {
  const [data, setData] = useState({
    name: 'Indonesia',
    textName: ''
  })

  const onChangeText = (e) => {
    setData({
      ...data,
      textName: e.target.value
    })
  }

  const onSubmit = () => {
    setData({
      ...data,
      name: data.textName,
      textName: ''
    })
  }

  return (
    <div>
      <h5>Hello {data.name}</h5>
      <TextInput textName={data.textName} onChangeText={onChangeText} onSubmit={onSubmit} />
    </div>
  );
}

export default App;

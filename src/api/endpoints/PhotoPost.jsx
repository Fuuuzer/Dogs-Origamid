import React from 'react'

const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');


  function handleSubmit(e) {
    e.preventDefault();


    const formData = new FormData();
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);


    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    }).then(resp => {
      console.log(resp);
      return resp.json()
    }).then(json => console.log(json))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='token'
        value={token}
        onChange={({ target }) => setToken(target.value)} />

      <input
        type="text"
        placeholder='Nome'
        value={nome}
        onChange={({ target }) => setNome(target.value)} />

      <input
        type="text"
        placeholder='Peso'
        value={peso}
        onChange={({ target }) => setPeso(target.value)} />

      <input
        type="text"
        placeholder='Idade'
        value={idade}
        onChange={({ target }) => setIdade(target.value)} />

      <input
        type="file"
        onChange={({ target }) => setImg(target.files[0])} />

      <button>enviar</button>
    </form>
  )
}

export default PhotoPost
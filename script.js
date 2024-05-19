fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (!res.ok) {
      throw new Error('Not ok');
    }
    return res.json();
  })
  .then(data => {
    const names = data.map(user => user.name);

    const container = document.getElementById('text');

    const ul = document.createElement('ul');

    names.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  })
  .catch(error => {
    console.warn(error);
  });

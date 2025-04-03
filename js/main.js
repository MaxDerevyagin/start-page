async function loadTabs() {
  try {
    const response = await fetch('data/tabs.json');
    const tabs = await response.json();
    const grid = document.getElementById('grid');

    tabs.forEach(tab => {
      const a = document.createElement('a');
      a.href = tab.url;
      a.className = 'item';
      a.innerHTML = `
        <img src="${tab.icon}" alt="${tab.title}">
        <span>${tab.title}</span>
      `;
      grid.appendChild(a);
    });
  } catch (err) {
    console.error('Ошибка загрузки tabs.json:', err);
  }
}

loadTabs();
// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Owner mode: quickly add updates and reveal "+ Add update" button
const ownerLink = document.getElementById('ownerMode');
const addBtn = document.getElementById('addUpdateBtn');
const updatesList = document.getElementById('updatesList');

ownerLink.addEventListener('click', (e) => {
  e.preventDefault();
  addBtn.style.display = 'inline-block';
  alert('Owner mode enabled. Use "+ Add update" to post a quick note.');
});

addBtn.addEventListener('click', () => {
  const text = prompt('Write an update (customers will see this):');
  if (!text) return;
  const li = document.createElement('li');
  const t = document.createElement('time');
  const now = new Date();
  const y = now.getFullYear(), m = now.toLocaleString(undefined, { month: 'short' }), d = now.getDate();
  t.setAttribute('datetime', now.toISOString().slice(0,10));
  t.textContent = `${m} ${d}, ${y}`;
  const span = document.createElement('span');
  span.textContent = text;
  li.append(t, span);
  updatesList.prepend(li);
});

// 2025 Album Ranking

// -------- Seed data --------
const defaultAlbums = [
  { id: "eusexua", title: "Eusexua", artist: "FKA twigs", year: 2025 },
  { id: "lux", title: "LUX", artist: "ROSALÍA", year: 2025 },
  { id: "mayhem", title: "Mayhem", artist: "Lady Gaga", year: 2025 },
  {
    id: "for-melancholy-brunette",
    title: "For Melancholy Brunette",
    artist: "Japanese Breakfast",
    year: 2025
  },
  { id: "glory", title: "Glory", artist: "Perfume Genius", year: 2025 },
  {
    id: "sincerely",
    title: "Sincerely,",
    artist: "Kali Uchis",
    year: 2025
  },
  { id: "virgin", title: "Virgin", artist: "Lorde", year: 2025 },
  {
    id: "moisturizer",
    title: "Moisturizer",
    artist: "Wet Leg",
    year: 2025
  },
  {
    id: "sable-fable",
    title: "Sable, Fable",
    artist: "Bon Iver",
    year: 2025
  },
  {
    id: "fancy-that",
    title: "Fancy That",
    artist: "PinkPantheress",
    year: 2025
  },
  {
    id: "choke-enough",
    title: "Choke Enough",
    artist: "Oklou",
    year: 2025
  },
  {
    id: "euro-country",
    title: "Euro-Country",
    artist: "Cmat",
    year: 2025
  },
  {
    id: "thats-showbiz-baby",
    title: "That’s Showbiz Baby!",
    artist: "JADE",
    year: 2025
  },
  {
    id: "the-clearing",
    title: "The Clearing",
    artist: "Wolf Alice",
    year: 2025
  },
  {
    id: "willoughby-tucker-ill-always-love-you",
    title: "Willoughby Tucker, I’ll Always Love You",
    artist: "Ethel Cain",
    year: 2025
  },
  { id: "addison", title: "Addison", artist: "", year: 2025 },
  {
    id: "never-enough",
    title: "Never Enough",
    artist: "Turnstile",
    year: 2025
  },
  { id: "saya", title: "SAYA", artist: "", year: 2025 },
  {
    id: "west-end-girl",
    title: "West End Girl",
    artist: "Lily Allen",
    year: 2025
  },
  {
    id: "black-star",
    title: "Black Star",
    artist: "Amaarae",
    year: 2025
  },
  { id: "i-quit", title: "I Quit", artist: "", year: 2025 },
  {
    id: "mans-best-friend",
    title: "Man’s Best Friend",
    artist: "Sabrina Carpenter",
    year: 2025
  },
  {
    id: "ego-death-at-a-bachelorette-party",
    title: "Ego Death At A Bachelorette Party",
    artist: "Hayley Williams",
    year: 2025
  },
  {
    id: "a-matter-of-time",
    title: "A Matter Of Time",
    artist: "Laufey",
    year: 2025
  },
  {
    id: "portrait-of-my-heart",
    title: "Portrait of My Heart",
    artist: "Spellling",
    year: 2025
  },
  {
    id: "louder-please",
    title: "Louder Please",
    artist: "Rose Gray",
    year: 2025
  },
  {
    id: "debi-tirar-mas-fotos",
    title: "Debi Tirar Mas Fotos",
    artist: "Bad Bunny",
    year: 2025
  },
  {
    id: "iconoclasts",
    title: "Iconoclasts",
    artist: "Anna von Hausswolff",
    year: 2025
  },
  { id: "ruby", title: "Ruby", artist: "", year: 2025 },
  {
    id: "big-city-life",
    title: "Big City Life",
    artist: "Smerz",
    year: 2025
  },
  {
    id: "the-art-of-loving",
    title: "The Art of Loving",
    artist: "Olivia Dean",
    year: 2025
  },
  { id: "tether", title: "Tether", artist: "Anastasia", year: 2025 },
  {
    id: "double-infinity",
    title: "Double Infinity",
    artist: "Big Thief",
    year: 2025
  },
  {
    id: "afterglow",
    title: "Afterglow",
    artist: "FKA twigs",
    year: 2025
  },
  {
    id: "a-complicated-woman",
    title: "A Complicated Woman",
    artist: "Self Esteem",
    year: 2025
  },
  {
    id: "i-love-my-computer",
    title: "I Love My Computer",
    artist: "Ninajirachi",
    year: 2025
  },
  {
    id: "something-beautiful",
    title: "Something Beautiful",
    artist: "Miley Cyrus",
    year: 2025
  },
  {
    id: "viagr-aboys",
    title: "Viagr Aboys",
    artist: "Viagra Boys",
    year: 2025
  },
  {
    id: "from-the-pyre",
    title: "From The Pyre",
    artist: "The last dinner party",
    year: 2025
  },
  {
    id: "snocaps",
    title: "Snocaps",
    artist: "Snocaps",
    year: 2025
  },
  {
    id: "getting-killed",
    title: "Getting Killed",
    artist: "Geese",
    year: 2025
  },
  {
    id: "caroline-2",
    title: "Caroline 2",
    artist: "Caroline",
    year: 2025
  },
  {
    id: "everybody-scream",
    title: "Everybody Scream",
    artist: "Florence + The Machine",
    year: 2025
  },
  {
    id: "the-bpm",
    title: "The BPM",
    artist: "Sudan Archives",
    year: 2025
  },
  {
    id: "luster",
    title: "Luster",
    artist: "Maria Sommerville",
    year: 2025
  },
  {
    id: "bloodless",
    title: "Bloodless",
    artist: "Samia",
    year: 2025
  },
  {
    id: "through-the-wall",
    title: "Through The Wall",
    artist: "Rochelle Jordans",
    year: 2025
  },
  {
    id: "forever-is-a-feeling",
    title: "Forever is a Feeling",
    artist: "Lucy Dacus",
    year: 2025
  },
  {
    id: "essex-honey",
    title: "Essex Honey",
    artist: "Blood Orange",
    year: 2025
  },
  {
    id: "lifetime",
    title: "Lifetime",
    artist: "Erika de Casier",
    year: 2025
  },
  {
    id: "whos-the-clown",
    title: "Who’s The Clown",
    artist: "Aubrey Hobert",
    year: 2025
  },
  {
    id: "tranquilizer",
    title: "Tranquilizer",
    artist: "Oneohtrix Point Never",
    year: 2025
  }
];


// -------- Storage keys --------
const STORAGE_KEYS = {
  savedLists: "albumRanking2025.savedLists"
};

const STORAGE_KEY_ORDER = "albumOrder2025-v1";
const STORAGE_KEY_ALBUMS = "albums2025-data-v1";


// -------- DOM --------
const listEl = document.getElementById("album-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchResultsPanel = document.getElementById("search-results-panel");


// -------- State --------
function loadAlbums() {
  const raw = localStorage.getItem(STORAGE_KEY_ALBUMS);
  if (!raw) return defaultAlbums.slice();
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return defaultAlbums.slice();
    return parsed.map(a => ({
      id: a.id,
      title: a.title || "",
      artist: a.artist || "",
      year: a.year || "",
      cover: a.cover || null
    }));
  } catch {
    return defaultAlbums.slice();
  }
}

let albums = loadAlbums();
let albumMap = new Map(albums.map(a => [a.id, a]));


// -------- Utilities --------
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// -------- Render Ranking --------
function render(order) {
  listEl.innerHTML = "";

  order.forEach((id, index) => {
    const album = albumMap.get(id);
    if (!album) return;

    const li = document.createElement("li");
    li.className = "album-item";
    li.dataset.id = id;

    const rank = document.createElement("div");
    rank.className = "rank";
    rank.textContent = index + 1;

    const cover = document.createElement("div");
    cover.className = "cover";
    if (album.cover) {
      const img = document.createElement("img");
      img.src = album.cover;
      img.alt = `${album.title} album cover`;
      img.loading = "lazy";
      cover.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "cover-placeholder";
      ph.textContent = album.title.charAt(0).toUpperCase();
      cover.appendChild(ph);
    }

    const info = document.createElement("div");
    info.className = "info";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = album.title;

    const artist = document.createElement("div");
    artist.className = "artist";
    if (album.artist) {
      artist.textContent = album.year
        ? `${album.artist} · ${album.year}`
        : album.artist;
    } else {
      artist.innerHTML = `<span class="placeholder">[add artist]</span>${
        album.year ? ` · ${album.year}` : ""
      }`;
    }

    info.appendChild(title);
    info.appendChild(artist);

    const actions = document.createElement("div");
    actions.className = "actions";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "icon-button remove-btn";
    removeBtn.textContent = "✕";

    const handle = document.createElement("div");
    handle.className = "handle";
    handle.textContent = "☰";

    actions.appendChild(removeBtn);
    actions.appendChild(handle);

    li.appendChild(rank);
    li.appendChild(cover);
    li.appendChild(info);
    li.appendChild(actions);

    listEl.appendChild(li);
  });
}


// -------- Order storage --------
function saveCurrentOrder() {
  const ids = Array.from(listEl.children).map(li => li.dataset.id);
  localStorage.setItem(STORAGE_KEY_ORDER, JSON.stringify(ids));
}

function updateRankNumbers() {
  Array.from(listEl.children).forEach((li, index) => {
    const rankEl = li.querySelector(".rank");
    rankEl.textContent = index + 1;
  });
}

function getInitialOrder() {
  const raw = localStorage.getItem(STORAGE_KEY_ORDER);
  if (!raw) return albums.map(a => a.id);
  try {
    const ids = JSON.parse(raw);
    const valid = ids.filter(id => albumMap.has(id));
    const missing = albums.map(a => a.id).filter(id => !valid.includes(id));
    return [...valid, ...missing];
  } catch {
    return albums.map(a => a.id);
  }
}


// -------- Saved list system --------
// (unchanged — your full logic preserved)

function loadSavedListsFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEYS.savedLists);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveSavedListsToStorage(lists) {
  localStorage.setItem(STORAGE_KEYS.savedLists, JSON.stringify(lists));
}

let currentListName = "";
let currentListId = "";

function refreshSavedListsDropdown() {
  const select = document.getElementById("saved-lists");
  if (!select) return;
  const lists = loadSavedListsFromStorage();
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Saved rankings…";
  placeholder.disabled = true;
  select.appendChild(placeholder);

  lists.forEach(list => {
    const opt = document.createElement("option");
    opt.value = list.id;
    opt.textContent = list.name;
    select.appendChild(opt);
  });

  if (currentListId) select.value = currentListId;
  else select.selectedIndex = 0;
}

function updateCurrentListNameDisplay() {
  const el = document.getElementById("current-list-name");
  if (!el) return;
  if (currentListName.trim() !== "") el.textContent = currentListName;
  else el.textContent = "History";
}

function autosaveCurrentList() {
  if (!currentListId) return;
  const lists = loadSavedListsFromStorage();
  const order = Array.from(listEl.children).map(li => li.dataset.id);
  const idx = lists.findIndex(l => l.id === currentListId);

  if (idx !== -1) {
    lists[idx].order = order;
    lists[idx].name = currentListName.trim();
    saveSavedListsToStorage(lists);
    refreshSavedListsDropdown();
  }
}

function handleSaveList() {
  const lists = loadSavedListsFromStorage();
  const order = Array.from(listEl.children).map(li => li.dataset.id);

  let name = currentListName.trim();
  if (!name) {
    name = window.prompt("Name this list:", "") || "";
    name = name.trim();
  }
  if (!name) return alert("List not saved (no name)");

  let id = currentListId;
  if (id) {
    const idx = lists.findIndex(l => l.id === id);
    if (idx !== -1) {
      lists[idx].name = name;
      lists[idx].order = order;
    }
  } else {
    const existingIdx = lists.findIndex(l => l.name === name);
    if (existingIdx !== -1) {
      id = lists[existingIdx].id;
      lists[existingIdx].order = order;
    } else {
      id = String(Date.now());
      lists.push({ id, name, order });
    }
  }

  currentListId = id;
  currentListName = name;

  updateCurrentListNameDisplay();
  saveSavedListsToStorage(lists);
  refreshSavedListsDropdown();
}

function handleLoadList() {
  const select = document.getElementById("saved-lists");
  if (!select) return;
  const id = select.value;
  if (!id) return;

  const lists = loadSavedListsFromStorage();
  const chosen = lists.find(l => l.id === id);
  if (!chosen) return;

  currentListId = chosen.id;
  currentListName = chosen.name || "";

  render(chosen.order);
  localStorage.setItem(STORAGE_KEY_ORDER, JSON.stringify(chosen.order));
  updateCurrentListNameDisplay();
}

function handleDeleteList() {
  const select = document.getElementById("saved-lists");
  if (!select) return;
  const id = select.value;
  if (!id) return;

  const lists = loadSavedListsFromStorage();
  const filtered = lists.filter(l => l.id !== id);
  saveSavedListsToStorage(filtered);

  if (id === currentListId) {
    currentListId = "";
    currentListName = "";
    updateCurrentListNameDisplay();
  }

  refreshSavedListsDropdown();
}


// -------- Search Results Panel --------

function renderSearchResults(results, queryText = "") {
  if (!searchResultsPanel) return;

  // Always show panel when rendering results
  searchResultsPanel.classList.remove("hidden");

  searchResultsPanel.innerHTML = "";


  if (!results || results.length === 0) {
    searchResultsPanel.innerHTML = `
      <div class="search-results-header">
        <div class="search-results-title">Search results</div>
        <div class="search-results-count">
          No matches for "${escapeHtml(queryText)}"
        </div>
      </div>
      <div class="search-results-empty">
        Try another search term.
      </div>
    `;
    return;
  }

  const safeQuery = escapeHtml(queryText);

  const headerHtml = `
    <div class="search-results-header">
      <div>
        <div class="search-results-title">Search results</div>
        <div class="search-results-count">
          ${results.length} result${results.length === 1 ? "" : "s"}
          for "${safeQuery}"
        </div>
      </div>
      <button class="search-results-clear" type="button" id="clear-search-results">
        Clear
      </button>
    </div>
  `;

  searchResultsPanel.innerHTML = headerHtml;

  const list = document.createElement("ul");
  list.className = "search-results-list";

  results.forEach(result => {
    const li = document.createElement("li");
    li.className = "search-result-item";

    const text = document.createElement("div");
    text.className = "search-result-text";

    const titleEl = document.createElement("div");
    titleEl.className = "search-result-title";
    titleEl.textContent = result.title;

    const metaEl = document.createElement("div");
    metaEl.className = "search-result-meta";
    metaEl.textContent = [result.artist, result.year].filter(Boolean).join(" • ");

    text.appendChild(titleEl);
    text.appendChild(metaEl);

    const addBtn = document.createElement("button");
    addBtn.className = "search-result-add-btn";
    addBtn.textContent = "Add";

    addBtn.addEventListener("click", () => {
      addAlbumFromSearch(result);
    });

    li.appendChild(text);
    li.appendChild(addBtn);
    list.appendChild(li);
  });

  searchResultsPanel.appendChild(list);

  const clearBtn = document.getElementById("clear-search-results");
  clearBtn.onclick = () => {
  searchResultsPanel.innerHTML = "";
  searchResultsPanel.classList.add("hidden");
};

}


// -------- MusicBrainz Search --------
const MB_BASE =
  "https://corsproxy.io/?https://musicbrainz.org/ws/2/release-group/";
const CAA_BASE =
  "https://corsproxy.io/?https://coverartarchive.org/release-group/";

async function fetchCoverArt(mbid) {
  if (!mbid) return null;
  const url = `${CAA_BASE}${mbid}/front-250`;

  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return url;
  } catch {
    return null;
  }
}

async function searchAlbums(query) {
  const url = `${MB_BASE}?query=${encodeURIComponent(query)}&fmt=json&type=album&limit=8`;

  try {
    const res = await fetch(url);
    if (!res.ok) return [];

    const data = await res.json();
    const groups = data["release-groups"] || [];

    if (groups.length === 0) {
      return [
        {
          id: `custom-${Date.now()}`,
          mbid: null,
          title: query,
          artist: "",
          year: "",
          isCustom: true
        }
      ];
    }

    return groups.map(g => ({
      id: `mb-${g.id}`,
      mbid: g.id,
      title: g.title || "Untitled",
      artist:
        g["artist-credit"] &&
        g["artist-credit"][0] &&
        g["artist-credit"][0].name
          ? g["artist-credit"][0].name
          : "",
      year: g["first-release-date"]
        ? g["first-release-date"].slice(0, 4)
        : "",
      isCustom: false
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function addAlbumFromSearch(result) {
  if (!result) return;

  const id = result.id;

  if (!albumMap.has(id)) {
    const cover = result.mbid ? await fetchCoverArt(result.mbid) : null;

    const newAlbum = {
      id,
      title: result.title,
      artist: result.artist,
      year: result.year,
      cover
    };

    albums.push(newAlbum);
    albumMap.set(id, newAlbum);
    localStorage.setItem(STORAGE_KEY_ALBUMS, JSON.stringify(albums));
  }

  const ids = Array.from(listEl.children).map(li => li.dataset.id);
  const newOrder = [...ids, id];

  render(newOrder);
  saveCurrentOrder();
  autosaveCurrentList();
}


// -------- Search Logic --------
async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  const original = searchBtn.textContent;
  searchBtn.disabled = true;
  searchBtn.textContent = "Searching…";

  const results = await searchAlbums(query);
  renderSearchResults(results, query);

  searchBtn.disabled = false;
  searchBtn.textContent = original;
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});


// -------- Remove album --------
listEl.addEventListener("click", e => {
  const btn = e.target.closest(".remove-btn");
  if (!btn) return;

  const li = btn.closest(".album-item");
  const id = li.dataset.id;

  const remaining = Array.from(listEl.children)
    .map(el => el.dataset.id)
    .filter(x => x !== id);

  render(remaining);
  saveCurrentOrder();
  autosaveCurrentList();
});


// -------- List Buttons --------
const saveListBtn = document.getElementById("save-list");
const deleteListBtn = document.getElementById("delete-list");
const savedListsSelect = document.getElementById("saved-lists");
const newListBtn = document.getElementById("new-list");

if (saveListBtn) saveListBtn.addEventListener("click", handleSaveList);
if (deleteListBtn) deleteListBtn.addEventListener("click", handleDeleteList);

if (savedListsSelect)
  savedListsSelect.addEventListener("change", handleLoadList);

if (newListBtn)
  newListBtn.addEventListener("click", () => {
    let name = window.prompt("Name this new list:", currentListName || "");
    if (name === null) return;
    name = name.trim();

    render([]);
    localStorage.setItem(STORAGE_KEY_ORDER, JSON.stringify([]));

    if (name) {
      const lists = loadSavedListsFromStorage();
      const newList = { id: String(Date.now()), name, order: [] };
      lists.push(newList);
      saveSavedListsToStorage(lists);

      currentListId = newList.id;
      currentListName = newList.name;
    } else {
      currentListId = "";
      currentListName = "";
    }

    updateCurrentListNameDisplay();
    refreshSavedListsDropdown();
  });


// -------- Init --------
const initialOrder = getInitialOrder();
render(initialOrder);
refreshSavedListsDropdown();
updateCurrentListNameDisplay();

new Sortable(listEl, {
  animation: 150,
  onSort() {
    updateRankNumbers();
    saveCurrentOrder();
    autosaveCurrentList();
  }
});

// 2025 Album Ranking

// -------- Seed data --------
const defaultAlbums = [
  {
    id: "eusexua",
    title: "Eusexua",
    artist: "FKA twigs",
    year: 2025,
    image: "images/eusexua.jpg"
  },
  {
    id: "lux",
    title: "LUX",
    artist: "ROSALÍA",
    year: 2025,
    image: "images/lux.jpg"
  },
  {
    id: "mayhem",
    title: "MAYHEM",
    artist: "Lady Gaga",
    year: 2025,
    image: "images/mayhem.jpg"
  },
  {
    id: "for-melancholy-brunettes",
    title: "For Melancholy Brunettes",
    artist: "Japanese Breakfast",
    year: 2025,
    image: "images/for-melancholy-brunettes.jpg"
  },
  {
    id: "glory",
    title: "Glory",
    artist: "Perfume Genius",
    year: 2025,
    image: "images/glory.jpg"
  },
  {
    id: "sincerely",
    title: "Sincerely,",
    artist: "Kali Uchis",
    year: 2025,
    image: "images/sincerely.jpg"
  },
  {
    id: "virgin",
    title: "Virgin",
    artist: "Lorde",
    year: 2025,
    image: "images/virgin.jpg"
  },
  {
    id: "moisturizer",
    title: "moisturizer",
    artist: "Wet Leg",
    year: 2025,
    image: "images/moisturizer.jpg"
  },
  {
    id: "sable-fable",
    title: "SABLE, fABLE",
    artist: "Bon Iver",
    year: 2025,
    image: "images/sable-fable.jpg"
  },
  {
    id: "fancy-that",
    title: "Fancy That",
    artist: "PinkPantheress",
    year: 2025,
    image: "images/fancy-that.jpg"
  },
  {
    id: "choke-enough",
    title: "choke enough",
    artist: "Oklou",
    year: 2025,
    image: "images/choke-enough.jpg"
  },
  {
    id: "euro-country",
    title: "EURO-COUNTRY",
    artist: "CMAT",
    year: 2025,
    image: "images/euro-country.jpg"
  },
  {
    id: "that-s-showbiz-baby",
    title: "That’s Showbiz Baby!",
    artist: "JADE",
    year: 2025,
    image: "images/that-s-showbiz-baby.jpg"
  },
  {
    id: "the-clearing",
    title: "The Clearing",
    artist: "Wolf Alice",
    year: 2025,
    image: "images/the-clearing.jpg"
  },
  {
    id: "willoughby-tucker-i-ll-always-love-you",
    title: "Willoughby Tucker, I’ll Always Love You",
    artist: "Ethel Cain",
    year: 2025,
    image: "images/willoughby-tucker-i-ll-always-love-you.jpg"
  },
  {
    id: "addison",
    title: "Addison",
    artist: "Addison Rae",
    year: 2025,
    image: "images/addison.jpg"
  },
  {
    id: "never-enough",
    title: "NEVER ENOUGH",
    artist: "Turnstile",
    year: 2025,
    image: "images/never-enough.jpg"
  },
  {
    id: "saya",
    title: "SAYA",
    artist: "Saya Grey",
    year: 2025,
    image: "images/saya.jpg"
  },
  {
    id: "west-end-girl",
    title: "West End Girl",
    artist: "Lily Allen",
    year: 2025,
    image: "images/west-end-girl.jpg"
  },
  {
    id: "black-star",
    title: "Black Star",
    artist: "Amaarae",
    year: 2025,
    image: "images/black-star.jpg"
  },
  {
    id: "i-quit",
    title: "I quit",
    artist: "HAIM",
    year: 2025,
    image: "images/i-quit.jpg"
  },
  {
    id: "man-s-best-friend",
    title: "Man’s Best Friend",
    artist: "Sabrina Carpenter",
    year: 2025,
    image: "images/man-s-best-friend.jpg"
  },
  {
    id: "ego-death-at-a-bachelorette-party",
    title: "Ego Death At A Bachelorette Party",
    artist: "Hayley Williams",
    year: 2025,
    image: "images/ego-death-at-a-bachelorette-party.jpg"
  },
  {
    id: "a-matter-of-time",
    title: "A Matter Of Time",
    artist: "Laufey",
    year: 2025,
    image: "images/a-matter-of-time.jpg"
  },
  {
    id: "portrait-of-my-heart",
    title: "Portrait of My Heart",
    artist: "Spellling",
    year: 2025,
    image: "images/portrait-of-my-heart.jpg"
  },
  {
    id: "louder-please",
    title: "Louder, Please",
    artist: "Rose Grey",
    year: 2025,
    image: "images/louder-please.jpg"
  },
  {
    id: "debi-tirar-mas-fotos",
    title: "DeBÍ TiRAR MáS FOToS",
    artist: "Bad Bunny",
    year: 2025,
    image: "images/debi-tirar-mas-fotos.jpg"
  },
  {
    id: "iconoclasts",
    title: "Iconoclasts",
    artist: "Anna von Hausswolff",
    year: 2025,
    image: "images/iconoclasts.jpg"
  },
  {
    id: "ruby",
    title: "Ruby",
    artist: "Jennie",
    year: 2025,
    image: "images/ruby.jpg"
  },
  {
    id: "big-city-life",
    title: "Big City Life",
    artist: "Smerz",
    year: 2025,
    image: "images/big-city-life.jpg"
  },
  {
    id: "the-art-of-loving",
    title: "The Art Of Loving",
    artist: "Oliva Dean",
    year: 2025,
    image: "images/the-art-of-loving.jpg"
  },
  {
    id: "tether",
    title: "Tether",
    artist: "Annahstasia",
    year: 2025,
    image: "images/tether.jpg"
  },
  {
    id: "double-infinity",
    title: "Double Infinity",
    artist: "Big Thief",
    year: 2025,
    image: "images/double-infinity.jpg"
  },
  {
    id: "afterglow",
    title: "Afterglow",
    artist: "FKA twigs",
    year: 2025,
    image: "images/afterglow.jpg"
  },
  {
    id: "a-complicated-woman",
    title: "A Complicated Woman",
    artist: "Self Esteem",
    year: 2025,
    image: "images/a-complicated-woman.jpg"
  },
  {
    id: "i-love-my-computer",
    title: "I Love My Computer",
    artist: "Ninajirachi",
    year: 2025,
    image: "images/i-love-my-computer.jpg"
  },
  {
    id: "bloodless",
    title: "Bloodless",
    artist: "Samia",
    year: 2025,
    image: "images/bloodless.jpg"
  },
  {
    id: "viagr-aboys",
    title: "viagr aboys",
    artist: "Viagra Boys",
    year: 2025,
    image: "images/viagr-aboys.jpg"
  },
  {
    id: "who-s-the-clown",
    title: "Who’s The Clown",
    artist: "Audrey Hobert",
    year: 2025,
    image: "images/who-s-the-clown.jpg"
  },
  {
    id: "something-beautiful",
    title: "Something Beautiful",
    artist: "MIley Cyrus",
    year: 2025,
    image: "images/something-beautiful.jpg"
  },
  {
    id: "stage-girl",
    title: "Stage Girl",
    artist: "Eli",
    year: 2025,
    image: "images/stage-girl.jpg"
  },
  {
    id: "forever-is-a-feeling",
    title: "Forever Is A Feeling",
    artist: "Lucy Dacus",
    year: 2025,
    image: "images/forever-is-a-feeling.jpg"
  },
  {
    id: "luster",
    title: "Luster",
    artist: "Maria Somerville",
    year: 2025,
    image: "images/luster.jpg"
  },
  {
    id: "getting-killed",
    title: "Getting Killed",
    artist: "Geese",
    year: 2025,
    image: "images/getting-killed.jpg"
  },
  {
    id: "caroline-2",
    title: "caroline 2",
    artist: "caroline",
    year: 2025,
    image: "images/caroline-2.jpg"
  },
  {
    id: "everybody-scream",
    title: "Everybody Scream",
    artist: "Florence+ the machine",
    year: 2025,
    image: "images/everybody-scream.jpg"
  },
  {
    id: "the-bpm",
    title: "The BPM",
    artist: "Sudan Archives",
    year: 2025,
    image: "images/the-bpm.jpg"
  },
  {
    id: "through-the-wall",
    title: "Through The Wall",
    artist: "Rochelle Jordan",
    year: 2025,
    image: "images/through-the-wall.jpg"
  },
  {
    id: "bleeds",
    title: "Bleeds",
    artist: "Wednesday",
    year: 2025,
    image: "images/bleeds.jpg"
  },
  {
    id: "essex-honey",
    title: "Essex Honey",
    artist: "Blood Orange",
    year: 2025,
    image: "images/essex-honey.jpg"
  },
  {
    id: "lifetime",
    title: "Lifetime",
    artist: "Erika de Casier",
    year: 2025,
    image: "images/lifetime.jpg"
  }
];

// Automatically attach local cover images based on each album's id.
// Make sure you have files like /images/<id>.jpg as listed above.
defaultAlbums.forEach(album => {
  album.cover = `images/${album.id}.jpg`;
});



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
// We always use the built-in list; no albums from localStorage
let albums = defaultAlbums.slice();
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


// -------- Album Search via iTunes API --------

const ITUNES_BASE = "https://itunes.apple.com/search";

async function searchAlbums(query) {
  const url =
    `${ITUNES_BASE}?media=music&entity=album&limit=8&term=` +
    encodeURIComponent(query);

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("iTunes API error:", res.status);
      return [];
    }

    const data = await res.json();
    const items = data.results || [];

    if (items.length === 0) {
      // Fallback: allow creating a custom album with no cover
      return [
        {
          id: `custom-${Date.now()}`,
          title: query,
          artist: "",
          year: "",
          cover: null,
          isCustom: true
        }
      ];
    }

    return items.map(item => {
      const year = item.releaseDate
        ? new Date(item.releaseDate).getFullYear()
        : "";

      // Upgrade 100x100 art to 600x600 if possible
      let cover = item.artworkUrl100 || null;
      if (cover) {
        cover = cover.replace("100x100", "600x600");
      }

      return {
        id: `itunes-${item.collectionId}`,
        title: item.collectionName || "Untitled",
        artist: item.artistName || "",
        year,
        cover,
        isCustom: false
      };
    });
  } catch (err) {
    console.error("searchAlbums error:", err);
    return [];
  }
}

async function addAlbumFromSearch(result) {
  if (!result) return;

  const id = result.id;

  if (!albumMap.has(id)) {
    const cover = result.cover || null;

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

    // 👉 Start every new list with ALL albums in default order
    const order = albums.map(a => a.id);

    // Render the full list and save this order as the current one
    render(order);
    localStorage.setItem(STORAGE_KEY_ORDER, JSON.stringify(order));

    if (name) {
      const lists = loadSavedListsFromStorage();
      const newList = { id: String(Date.now()), name, order };
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

  // Make touch drag feel less “twitchy”
  delay: 120,               // wait 120ms before drag starts
  delayOnTouchOnly: true,   // only on touch, not on mouse
  touchStartThreshold: 5,   // allow a few px movement before dragging

  // Make fallback dragging smoother on some mobile browsers
  fallbackOnBody: true,
  swapThreshold: 0.5,

  // NOTE: we are NOT setting ghostClass/chosenClass/dragClass here.
  // We just use Sortable's built-in classes:
  //  - .sortable-chosen  (real item)
  //  - .sortable-ghost   (clone)

  onStart() {
    document.body.classList.add("is-dragging");
  },
  onEnd() {
    document.body.classList.remove("is-dragging");
    updateRankNumbers();
    saveCurrentOrder();
    autosaveCurrentList();
  }
});




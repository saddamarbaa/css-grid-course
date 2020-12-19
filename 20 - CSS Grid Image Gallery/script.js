const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

// generate image base on give width and height

function generateHTML([h, v]) {
  return `
        <div class="item h${h} v${v}">
          <img src="images/${randomNumber(12)}.jpg">
          <div class="item__overlay">
            <button>View →</button>
          </div>
        </div>
      `;
}

// return random number between 1 and given limit

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  // console.log(e.currentTarget);
  const src = e.currentTarget.querySelector("img").src;
  // console.log(src);
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}

const digits = Array.from({ length: 50 }, () =>
[ randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

// console.log(digits);
const html = digits.map(generateHTML).join("");
// console.log(html);

gallery.innerHTML = html;

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

overlayClose.addEventListener("click", close);

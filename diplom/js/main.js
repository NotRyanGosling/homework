// Инициализация бургер-меню
function lockBodyScroll() {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollBarWidth + "px";
}

function unlockBodyScroll() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const burger = document.querySelector(".burger-icon");
    const menuLinks = document.querySelectorAll(".nav__link");

    burger.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.toggle("body--opened-menu");

        if (body.classList.contains("body--opened-menu")) {
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            body.classList.remove("body--opened-menu");
            unlockBodyScroll();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            body.classList.remove("body--opened-menu");
            unlockBodyScroll();
        }
    });
});



// Активирование тегов в товарах
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".filters__item");

    items.forEach(i => i.classList.remove("filters__item--enable"));

    items.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();

            if (item.classList.contains("filters__item-more")) return;

            if (item.classList.contains("filters__item--enable")) {
                item.classList.remove("filters__item--enable");
            } else {
                items.forEach(i => i.classList.remove("filters__item--enable"));
                item.classList.add("filters__item--enable");
            }
        });
    });
});
// Кастомный селект
document.querySelectorAll(".custom-select").forEach(select => {
    const trigger = select.querySelector(".custom-select__trigger");
    const options = select.querySelectorAll(".custom-option");
    const span = trigger.querySelector("span");

    trigger.addEventListener("click", () => {
        select.classList.toggle("open");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            options.forEach(o => o.classList.remove("selected"));
            option.classList.add("selected");
            span.textContent = option.textContent;
            select.classList.remove("open");
        });
    });
});

document.addEventListener("click", e => {
    document.querySelectorAll(".custom-select").forEach(select => {
        if (!select.contains(e.target)) {
            select.classList.remove("open");
        }
    });
});

// Добавление количества товара
document.addEventListener("DOMContentLoaded", () => {
    const cartCountEl = document.querySelector(".shopping__count");
    let cartCount = 0;

    function updateCartUI() {
        cartCountEl.textContent = cartCount;
        // Скрываем span, если товаров нет
        if (cartCount === 0) {
            cartCountEl.style.display = 'none';
        } else {
            cartCountEl.style.display = 'flex';
        }
    }

    updateCartUI();

    document.querySelectorAll(".product-card").forEach(card => {
        const minusBtn = card.querySelector(".counter__btn--minus");
        const plusBtn = card.querySelector(".counter__btn--plus");
        const valueEl = card.querySelector(".counter__value");
        const addBtn = card.querySelector(".product-card__button");

        let count = Math.max(1, parseInt(valueEl.textContent, 10) || 1);

        function updateUI() {
            valueEl.textContent = count;
            if (count > 1) {
                minusBtn.classList.add('is-active');
            } else {
                minusBtn.classList.remove('is-active');
            }
        }

        updateUI();

        plusBtn.addEventListener('click', () => {
            count++;
            updateUI();
        });

        minusBtn.addEventListener('click', () => {
            if (count > 1) {
                count--;
                updateUI();
            }
        });

        addBtn.addEventListener('click', () => {
            cartCount += count;
            updateCartUI();
        });
    });
});




// Подключение Слайдера
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".products__slider", {
        spaceBetween: 32,
        slidesPerView: 1,
        pagination: {
            el: ".products__pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' из ' +
                    '<span class="' + totalClass + '"></span>';
            },
        },
        navigation: {
            nextEl: ".products__next",
            prevEl: ".products__prev",
        }
    });
});


// Подключение Аккардеона
const accordionLists = document.querySelectorAll(".accordion-list");

accordionLists.forEach((el) => {
    el.addEventListener("click", (e) => {
        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector(
            ".accordion__item--opened"
        );
        const accordionOpenedContent = accordionList.querySelector(
            ".accordion__item--opened .accordion__content"
        );

        const accordionControl = e.target.closest(".accordion-list__control");
        if (!accordionControl) return;
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove("accordion__item--opened"); // без точки!
            if (accordionOpenedContent) {
                accordionOpenedContent.style.maxHeight = null;
            }
        }
        accordionItem.classList.toggle("accordion__item--opened");

        if (accordionItem.classList.contains("accordion__item--opened")) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});

// Перекрашивание кнопки рассылки
document.addEventListener("DOMContentLoaded", () => {
    const subscribeBtn = document.querySelector(".subscribe__button");

    subscribeBtn.addEventListener('click', () => {
        subscribeBtn.classList.add("clicked");

        setTimeout(() => {
            subscribeBtn.classList.remove("clicked");
            subscribeBtn.classList.add("to-accent");
        }, 200);

        setTimeout(() => {
            subscribeBtn.classList.remove("to-accent");
        }, 2500);
    });
});

// Перекрашивание кнопки заявки
document.addEventListener("DOMContentLoaded", () => {
    const callBtn = document.querySelector(".call_button");

    callBtn.addEventListener('click', () => {
        callBtn.classList.add("to-accent");

        setTimeout(() => {
            callBtn.classList.remove("to-accent");
        }, 2500);
    });
});


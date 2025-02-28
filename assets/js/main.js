/// COUNTER ///
$(document).ready(function () {
    let countdownDate = new Date().getTime() + (3 * 60 * 60 * 1000) + (29 * 60 * 1000) + (42 * 1000);

    function updateCountdown() {
        let now = new Date().getTime();
        let distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            $(".count-number").text("0");
            return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        function animateChange(element, newValue) {
            let $el = $(element);
            if ($el.text() !== newValue.toString()) {
                $el.text(newValue);
                $el.addClass("animate");
                setTimeout(() => $el.removeClass("animate"), 300);
            }
        }

        animateChange(".count-days h3", days);
        animateChange(".count-hrs h3", hours);
        animateChange(".count-mins h3", minutes);
        animateChange(".count-secs h3", seconds);
    }

    updateCountdown();
    let interval = setInterval(updateCountdown, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("handle-scroll-button").addEventListener("click", 
        function () {
        window.scrollBy({
            top: window.innerHeight, // Scroll down by one viewport height
            behavior: "smooth"
        });
    });
});

// ACCORDION //
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// Đóng tất cả accordion mặc định khi trang tải
accordionItemHeaders.forEach(item => {
  item.classList.remove("active");
  item.parentElement.classList.remove("active"); // Bỏ màu nền khi đóng
  item.nextElementSibling.style.maxHeight = 0;
});

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", () => {
    // Đóng tất cả accordion trước khi mở cái được click
    accordionItemHeaders.forEach(item => {
      if (item !== accordionItemHeader) {
        item.classList.remove("active");
        item.parentElement.classList.remove("active"); // Bỏ màu nền
        item.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Toggle trạng thái của accordion được click
    accordionItemHeader.classList.toggle("active");
    accordionItemHeader.parentElement.classList.toggle("active"); // Đổi màu nền
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

/// SCROLL AND FIXED BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button-scroll");
  const header = document.getElementById("introduction-section");

  function checkScroll() {
      const rect = header.getBoundingClientRect();
      if ((-rect.top) >= 600) {
        button.classList.add("show");
      } else {
        button.classList.remove("show");
      }
  }

  window.addEventListener("scroll", checkScroll);
});
const feedbacks = [
    {
      image: "images/image-1.jpg",  
      name: "Robin",
      designation: "Web Developer, Digi Agency",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "images/image-2.jpg",
      name: "John",
      designation: "CEO, WallBook",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
    },
    {
      image: "images/image-3.jpg",  
      name: "Eva",
      designation: "UX Designer, TechShow",
      feedback:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  
  let i = 0;
  let j = feedbacks.length;
  
  let testimonialCont = document.getElementById("testimonial-cont");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  
  let showTestimonial = () => {
    testimonialCont.innerHTML = `
      <p>${feedbacks[i].feedback}</p>
      <img src=${feedbacks[i].image}>
      <h3>${feedbacks[i].name}</h3>
      <h6>${feedbacks[i].designation}</h6>
    `;
  };

  prev.addEventListener("click", () => {
    i = (j + i - 1) % j;
    showTestimonial();
  });
  next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    showTestimonial();
  });
  
  window.onload = showTestimonial;
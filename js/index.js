const start = () => {
  const ratingComponentItems = document.querySelectorAll(
    '.rating-component__item'
  )
  const ratingComponentInner = document.querySelector(
    '.rating-component__inner'
  )
  const ratingComponentButton = document.querySelector(
    '.rating-component__button'
  )

  function ratingClickHandler() {
    ratingComponentItems.forEach((item) => {
      item.classList.remove('active')
      this.classList.add('active')
    })
  }

  ratingComponentItems.forEach((item) => {
    item.addEventListener('click', ratingClickHandler)
  })

  let ratingId = ''
  const ratingSubmit = () => {
    for (let item of ratingComponentItems) {
      if (item.classList.contains('active')) {
        ratingId = item.dataset.rating
      }
    }

    if (ratingId) {
      ratingComponentInner.innerHTML = `
      <div class="rating-component__success">
        <img src="./images/illustration-thank-you.svg" alt="Icon success" />
        <div class="rating-component__count">You selected ${ratingId} our of 5</div>
        <div class="rating-component__title">Thank you!</div>
        <div class="rating-component__desc">
         We appreciate you taking the time to give a rating. 
         If you ever need more support, don't hesitate to 
         get in touch!
        </div>
      </div>
      `
      setTimeout(() => location.reload(), 5000)
    } else {
      alert('You did not rate')
    }
  }

  ratingComponentButton.addEventListener('click', ratingSubmit)
}

document.addEventListener('DOMContentLoaded', start)

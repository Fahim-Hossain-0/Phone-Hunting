const loapPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phone = data.data;
  // console.log(phone);  
  displayPhone(phone)
}

// display-phones

const displayPhone = phones => {
  const phonesContainer = document.getElementById('phone-container');
  phonesContainer.textContent = '';
  // console.log(phones)
  const seeMore = document.getElementById("see-more")
  // console.log(seeMore)
  if (phones.length > 9) {
    seeMore.classList.remove('hidden');
  } else {
    seeMore.classList.add('hidden');
  }

  phones = phones.slice(0, 9)
  phones.forEach(phone => {
    const phoneCard = document.createElement('div')
    phoneCard.classList = `card bg-gray-100 w-96 shadow-xl`
    phoneCard.innerHTML = `<figure class="px-10 pt-10">
                      <img
                        src="${phone.image}"
                        alt="Phone"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div> `
    phonesContainer.appendChild(phoneCard)
  });
  // hide-loadingSpiner
toggleLoadingSpiner(false)

}
// search-button
const handleSearch = () => {
  toggleLoadingSpiner(true)
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value
  loapPhone(searchText)

}

const toggleLoadingSpiner = (isLoading) => {
  const loadingSpiner = document.getElementById('loading-spinner')
  if (isLoading) {
    loadingSpiner.classList.remove('hidden')
  }
  else{
    loadingSpiner.classList.add('hidden')
  }

}









loapPhone()
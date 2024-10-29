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
    phonesContainer.textContent = ''
    // console.log(phones)
    phones.forEach(phone => {
        
        // console.log(phone)
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
                    </div>
        `
        phonesContainer.appendChild(phoneCard)
    });

}
// search-button
const handleSearch=()=>{
    // console.log('ok')
    const searchField = document.getElementById('search-field')
    const searchText= searchField.value
    loapPhone(searchText)
    // console.log(searchText)
}









loapPhone()
const tripsList = document.querySelectorAll('.trips-list');

const showTripsBtn = document.createElement('li');
const showTripsInput = document.createElement('input');
const showTripsLabel = document.createElement('label');

const showMoreBtn = (event) => {
    event.target.parentElement.parentElement.classList.contains('trips-list_overflow-hidden')
    ? 
    event.target.parentElement.parentElement.classList.remove('trips-list_overflow-hidden')
    : 
    event.target.parentElement.parentElement.classList.add('trips-list_overflow-hidden');
}

showTripsInput.setAttribute('type', 'checkbox');
showTripsInput.setAttribute('autocomplete', 'off')
showTripsInput.className = 'btn-check trip-time';

showTripsLabel.className = 'btn btn-primary trip-time';
showTripsLabel.innerText = 'ещё...'

showTripsBtn.appendChild(showTripsInput);
showTripsBtn.appendChild(showTripsLabel);
showTripsBtn.onclick = showMoreBtn;


tripsList.forEach(list => {

    list.children.length > 4 ? list.classList.add('trips-list_overflow-hidden') : list.classList.remove('trips-list_overflow-hidden')

    list.children.length > 4 ? (console.log(list.children[3]), list.insertBefore(showTripsBtn, list.children[3])) : console.log('hui');
})


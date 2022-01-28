// переключение табов

const personalInfoMenuItems = document.querySelectorAll('.personal-info__item');
const personalInfoBlock = document.querySelectorAll('.personal-info__block');

console.log(personalInfoMenuItems, personalInfoBlock);

personalInfoMenuItems.forEach((item) => {

    item.addEventListener('click', (evt) => {
        const itemId = evt.target.dataset.id;

        personalInfoMenuItems.forEach((item) => {
            item.classList.remove('personal-info__item--active')
        });
        item.classList.add('personal-info__item--active');

        personalInfoBlock.forEach((block) => {
            block.classList.remove('personal-info__block--active');
        })
        personalInfoBlock[itemId].classList.add('personal-info__block--active');
    })
})

// Открытие и скрытие блока редактирования профиля

const editProfileButton = document.querySelector('.profile__edit-button');
const avatarEditingButton = document.querySelector('.avatar-editing__button');
const profileInfoEditingButton = document.querySelector('.info-editing__save');

const avatarEditingBlock = document.querySelector('.avatar-editing');
const profileInfoEditingBlock = document.querySelector('.info-editing');
const contentItemBlock = document.querySelector('.content-item__personal-info');
const mainMenu = document.querySelector('.main-menu');

const editingButtonClickHandler = () => {
    contentItemBlock.style.display = 'block';
    avatarEditingBlock.style.display = 'none';
    profileInfoEditingBlock.style.display = 'none';
    editProfileButton.style.display = 'block';
    mainMenu.style.display = 'block';
}

editProfileButton.addEventListener('click', () => {
    contentItemBlock.style.display = 'none';
    avatarEditingBlock.style.display = 'block';
    profileInfoEditingBlock.style.display = 'block';
    editProfileButton.style.display = 'none';
    mainMenu.style.display = 'none';
})

avatarEditingButton.addEventListener('click', editingButtonClickHandler);
profileInfoEditingButton.addEventListener('click', editingButtonClickHandler);
const button = document.getElementById('button')

const boxesContainer = document.getElementById('box-container')


button.addEventListener('click', () => boxesContainer.classList.toggle('big'))

createBoxes()


function createBoxes() {

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const singleBox = document.createElement('div')
            singleBox.className = 'box'
            // console.log(singleBox)

            singleBox.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

            boxesContainer.append(singleBox)
        }
    }

}
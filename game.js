const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You are walking across a town in halloween and you come across a haunted house. 4 directions are in front of you which one will you choose?',
    options: [
      {
        text: 'Go Straight',
        
        nextText: 2
      },
      {
        text: 'Go Left',
        nextText: 9
      },

      {
        text: "Go Back",
        nextText: 4
      },

      {
        text: "Go Right",
        nextText: 6
      }
    ]
  },
  {
    id: 2,
    text: 'You venture into a haunted house and come across a ghost, do you attack or run?',
    options: [
      {
        text: 'Attack the ghost',
        
        nextText: 3
      },
      {
        text: 'Run away',

        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: 'You find a air blower and blow the ghost away with it. The ghost disappears and you escape the haunted house thus winning!',
    options: [
      {
        text: 'Congratulations, play again!',
        nextText: -1
      }
    ]
  },
  {
    id: 4,
    text: 'You come in front of a headless horseman which slits your throat and you die! Game Over.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Your running was a waste as the ghost easily catches up and takes your spirit from your body thus killing you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Upon turning right, you encounter a dark and lonely street, what do you do?',
    options: [
      {
        text: 'Go in it',
        nextText: 7
      },
      {
          text: 'Turn back',
          nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'Upon going in, you encounter a snake which stings you and die.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Good choice, or else the snake would have killed you! You have survied',
    options: [
      {
        text: 'Congratulations, Play Again!',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You start to feel tired and see a shelter coming up ahead, what do you do?',
    options: [
      {
        text: 'Go in it',
        nextText: 10
      },
      {
          text: 'Skip it',
          nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'The Shelter is full of pumpkin bombs and it explodes on you, thus killing you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You enter a cave with a hungry jack o lantern monster and are eaten!',
    options: [
      {
        text: 'Restart.',
        nextText: -1
      }
    ]
  }
]

startGame()